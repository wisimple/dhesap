import Avatar from 'components/common/Avatar';
import MoneyText from 'components/common/MoneyText';
import Pagination from 'components/common/Pagination';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { seedTransactions } from 'seeds/transactions';

import Edit from '@material-ui/icons/Edit';
import React, { useEffect, useState } from 'react';
import { ITransaction } from 'models/Transaction';
import LoadingText from 'components/common/TextLoading';
import { seedAccount } from 'seeds/accounts';
import { IAccount } from 'models/Account';
import CustomIcon from 'components/common/CustomIcon';

const Show = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const [account, setAccount] = useState<IAccount | undefined>();
  const [transactions, settransactions] = useState<ITransaction[]>([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const acc = seedAccount();
      const tran = seedTransactions(30);
      setAccount(acc);
      settransactions(tran);

      setloading(false);
    }, 300);
  }, []);

  if (loading) return <LoadingText />;

  return (
    <>
      <Link to={`${pathname}/edit`}>
        <div className='flex items-center'>
          <Avatar type={account?.type || 'person'} className='mr-2' />
          <h2>{account?.name}</h2>
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
      <Pagination totalPages={1} />
    </>
  );
};

export default Show;
