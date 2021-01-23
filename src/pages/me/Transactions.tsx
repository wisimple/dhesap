import React, { useEffect, useState } from 'react';
import Avatar from 'components/common/Avatar';
import Pagination from 'components/common/Pagination';

import { AnimatePresence, motion } from 'framer-motion';
import TextLoading from 'components/common/TextLoading';
import { seedTransactions } from 'seeds/transactions';
import { ITransaction } from 'models/Transaction';
import CustomIcon from 'components/common/CustomIcon';
import MoneyText from 'components/common/MoneyText';
import { useHistory } from 'react-router-dom';

const TransactionItem = ({ transaction, index }: { transaction: ITransaction; index: number }) => {
  const history = useHistory();

  return (
    <motion.tr
      key={transaction._id}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: () => ({
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.02 },
        }),
      }}
      initial='hidden'
      animate='visible'
      onClick={() => history.push('/me/transactions/' + transaction._id)}>
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
    </motion.tr>
  );
};

const Transactions: React.FC = () => {
  const [loading, setloading] = useState(true);
  const [transactions, settransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const res = seedTransactions(30);
      settransactions(res);
      setloading(false);
    }, 500);
  }, []);
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
            <AnimatePresence>
              {transactions.map((transaction, index) => (
                <TransactionItem key={transaction._id} transaction={transaction} index={index} />
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      {loading && <TextLoading />}
      <Pagination />
    </>
  );
};

export default Transactions;
