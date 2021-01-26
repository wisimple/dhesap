import React, { useEffect, useState } from 'react';
import Avatar from 'components/common/Avatar';
import Pagination from 'components/common/Pagination';

import TextLoading from 'components/common/TextLoading';
import { ITransaction } from 'models/Transaction';
import CustomIcon from 'components/common/CustomIcon';
import MoneyText from 'components/common/MoneyText';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from 'store/transaction/actions';
import { RootState } from 'store';

const TransactionItem = ({ transaction, index }: { transaction: ITransaction; index: number }) => {
  const history = useHistory();

  return (
    <tr onClick={() => history.push('/me/transactions/' + transaction._id)}>
      <td>
        <div className='flex items-center'>
          <Avatar
            url={transaction.from.avtT}
            type={transaction.from.type}
            gender={transaction.from.gndr}
            className='mr-15'
          />
          <div className='flex flex-column'>
            <span>{transaction.from.name}</span>
            <div className='flex'>
              {transaction.ctgrs?.map((c) => {
                const { name, clr } = c.icon;
                return <CustomIcon key={c._id} name={name} size='sm' color={clr} />;
              })}
            </div>
          </div>
        </div>
      </td>
      <td>
        <MoneyText amount={transaction.amnt} currency={transaction.from.crny} />
      </td>
      <td>
        <MoneyText
          className='text-sm'
          amount={transaction.fBlnc}
          currency={transaction.from.crny}
          colored={false}
          withPlus={false}
        />
      </td>
    </tr>
  );
};

const Transactions: React.FC = () => {
  const [loading, setloading] = useState(false);
  const { transactions, totalPages, activePage } = useSelector((state: RootState) => state.transactionState);

  const dispatch = useDispatch();
  useEffect(() => {
    async function init() {
      setloading(true);
      await dispatch(getTransactions({ page: 1 }));
      setloading(false);
    }
    if (transactions.length === 0) {
      init();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <TransactionItem key={transaction._id} transaction={transaction} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      {loading && <TextLoading />}
      <Pagination
        totalPages={totalPages}
        activePage={activePage}
        onChanged={(page) => dispatch(getTransactions({ page }))}
      />
    </>
  );
};

export default Transactions;
