import { useEffect, useState } from 'react';

import Avatar from 'components/common/Avatar';

// import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import UnfoldMoreTwoTone from '@material-ui/icons/UnfoldMoreTwoTone';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import LoadingText from 'components/common/TextLoading';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAccounts } from 'store/account/actions';
import { RootState } from 'store';
import MoneyText from 'components/common/MoneyText';
import Icon from '@material-ui/core/Icon';

interface QueryParams {
  sortOrder?: boolean;
  sortBy?: string;
  search?: string;
}

const Accounts = () => {
  const { accounts, loading } = useSelector((state: RootState) => state.accountState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [queryParams, setqueryParams] = useState<QueryParams>();

  const toggleSort = (key: string) => {
    const newState = {
      search: '',
      sortBy: key,
      sortOrder: queryParams?.sortBy === key ? !queryParams?.sortOrder : false,
    };
    setqueryParams(newState);
    dispatch(getAllAccounts({ sort: `${newState?.sortOrder ? '-' : ''}${newState?.sortBy}` }));
  };

  console.log(queryParams);

  useEffect(() => {
    if (accounts.length < 1) {
      dispatch(getAllAccounts());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <form className='form'>
        <div className='form__group'>
          <input
            type='text'
            name='search'
            className='input'
            placeholder='Search an Account'
            value={queryParams?.search || ''}
            onChange={({ target }) => setqueryParams((prev) => ({ search: target.value }))}
          />
          <label htmlFor='search' className='label label--linear label--as-placeholder'>
            Search an Account
          </label>
        </div>
      </form>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr>
              <th className='cursor-pointer' onClick={() => toggleSort('name')}>
                <div className='flex justify-start items-center'>
                  Account
                  <Icon className='ml-1'>
                    {queryParams?.sortBy === 'name'
                      ? queryParams?.sortOrder
                        ? 'arrow_upward'
                        : 'arrow_downward'
                      : 'unfold_more_two_tone'}
                  </Icon>
                </div>
              </th>
              <th className='cursor-pointer' onClick={() => toggleSort('blnc')}>
                <div className='flex justify-end items-center'>
                  Balance
                  <Icon className='ml-1'>
                    {queryParams?.sortBy === 'blnc'
                      ? queryParams?.sortOrder
                        ? 'arrow_upward'
                        : 'arrow_downward'
                      : 'unfold_more_two_tone'}
                  </Icon>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={account._id} onClick={() => history.push('/me/accounts/' + account._id)}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar url={account.avtT} type={account.type} gender={account.gndr} className='mr-15' />
                    <span>{account.name}</span>
                  </div>
                </td>
                <td>
                  <MoneyText amount={account.blnc} withPlus={false} currency={account.crny} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {loading && <LoadingText />}
    </>
  );
};

export default Accounts;
