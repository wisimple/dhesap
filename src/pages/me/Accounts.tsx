import { useEffect, useState } from 'react';

import Avatar from 'components/common/Avatar';
import { seedAccounts } from 'seeds/accounts';
import { getCurrencySymbol } from 'constants/currencies';
import Pagination from 'components/common/Pagination';

// import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import UnfoldMoreTwoTone from '@material-ui/icons/UnfoldMoreTwoTone';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import { IAccount } from 'models/Account';
import LoadingText from 'components/common/TextLoading';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllCategories } from 'store/account/actions';
import { RootState } from 'store';

const Accounts = () => {
  const accounts = useSelector((state: RootState) => state.accountState.accounts);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const init = async () => {
      if (accounts.length === 0) {
        setloading(true);
        await dispatch(setAllCategories());
        setloading(false);
      }
    };
    init();
  }, []);

  return (
    <>
      <form className='form'>
        <div className='form__group'>
          <input type='text' name='search' className='input' placeholder='Search an Account' />
          <label htmlFor='search' className='label label--linear label--as-placeholder'>
            Search an Account
          </label>
        </div>
      </form>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr>
              <th className='cursor-pointer'>
                <div className='flex justify-start items-center'>
                  Account <ArrowDownward className='icon-size-base ml-05' />
                </div>
              </th>
              <th className='cursor-pointer'>
                <div className='flex justify-end items-center'>
                  Balance <UnfoldMoreTwoTone className='icon-size-base ml-05' />
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
                <td className={`text-money text-${account.blnc > 0 ? 'green' : 'red'}`}>
                  {account.blnc}
                  <span>{getCurrencySymbol(account.crny)}</span>
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
