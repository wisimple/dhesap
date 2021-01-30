import React, { useEffect } from 'react';
import Avatar from 'components/common/Avatar';
import Pagination from 'components/common/Pagination';

import { ITransaction } from 'models/Transaction';
import CustomIcon from 'components/common/CustomIcon';
import MoneyText from 'components/common/MoneyText';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions, setTransactionsActivePage } from 'store/transaction/actions';
import { RootState } from 'store';
import LoadingText from 'components/common/TextLoading';

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
            size='sm'
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
        <MoneyText amount={transaction.amnt} currency={transaction.from.crny} withPlus />
      </td>
      <td>
        <MoneyText amount={transaction.fBlnc} currency={transaction.from.crny} />
      </td>
    </tr>
  );
};

const Transactions: React.FC = () => {
  const { transactions, totalPages, activePage, loading } = useSelector(
    (state: RootState) => state.transactionState
  );

  const dispatch = useDispatch();
  useEffect(() => {
    if (transactions.length < 1) {
      dispatch(getTransactions({ page: 1 }));
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
      <Pagination
        totalPages={totalPages}
        activePage={activePage}
        loading={loading}
        onChanged={(page) => {
          dispatch(setTransactionsActivePage(page));
          dispatch(getTransactions({ page }));
        }}
      />
      {loading && transactions.length === 0 && <LoadingText />}
    </>
  );
};

export default Transactions;
