import Avatar from 'components/common/Avatar';
import MoneyText from 'components/common/MoneyText';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';

import Edit from '@material-ui/icons/Edit';
import React, { useEffect } from 'react';
import CustomIcon from 'components/common/CustomIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getOneAccount } from 'store/account/actions';
import { RootState } from 'store';
import { ITransaction } from 'models/Transaction';

const transactions: ITransaction[] = [];

const Show = () => {
  const { pathname } = useLocation();
  const params: { id: string } = useParams();
  const history = useHistory();
  const { account, loading } = useSelector((state: RootState) => state.accountState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (account?._id !== params.id) dispatch(getOneAccount(params.id));
  }, [params]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Link to={`${pathname}/edit`}>
        <div className='flex items-center'>
          <Avatar type={account?.type || 'person'} className='mr-2' />
          <h2>{loading ? 'loading...' : account?.name}</h2>
          <Edit className='icon--sm link ml-1' />
        </div>
      </Link>
      <div className='table-container mt-2'>
        <table className='table'>
          <thead>
            <tr>
              <th>Account</th>
              <th>Amount</th>
              <th>Balance</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              const { _id, from, amnt } = transaction;
              return (
                <tr key={_id} onClick={() => history.push('/me/transactions/' + transaction._id)}>
                  <td>
                    <div className='flex flex-wrap items-center'>
                      {transaction.to && <span className='mr-1'>{transaction.to?.name}</span>}
                      <div className='flex items-center flex-wrap'>
                        {transaction.ctgrs?.map((c) => (
                          <div
                            key={c._id}
                            className='badge'
                            style={{ backgroundColor: c.icon.bgClr, color: c.icon.clr }}>
                            <CustomIcon name={c.icon.name} size='sm' color={c.icon.clr} />
                            <span>{c.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <MoneyText amount={amnt} currency={from.crny} />
                  </td>
                  <td>
                    <MoneyText amount={from.blnc} currency={from.crny} colored={false} className='text-sm' />
                  </td>
                  <td className='text-xsm'>{transaction.cAt.toLocaleDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Show;
