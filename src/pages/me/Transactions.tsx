import React, { useEffect, useState } from 'react';
import Avatar from 'components/common/Avatar';
import Pagination from 'components/common/Pagination';

import { AnimatePresence, motion } from 'framer-motion';
import TextLoading from 'components/common/TextLoading';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';
import Icon from '@material-ui/core/Icon';
import { accountTypes } from 'constants/accountTypes';
import { seedTransactions } from 'seeds/transactions';
import { getCurrencySymbol } from 'constants/currencies';
import { ITransaction } from 'models/Transaction';
import { ICategory } from 'models/Category';

const options = ['All', 'Incomes', 'Expenses'];

const transactios = seedTransactions(30);

const TransactionItem = ({ transaction, index }: { transaction: ITransaction; index: number }) => {
  console.log(transaction);

  const isPositive = transaction.amnt > 0;

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
      animate='visible'>
      <td>
        <div className='flex items-center'>
          <Avatar
            url={transaction.from.avtrThumb}
            type={transaction.from.type}
            gender={transaction.from.gndr}
            className='mr-15'
          />
          <span>{transaction.from.name}</span>
        </div>
      </td>
      <td className={`text-money text-${isPositive ? 'green' : 'red'}`}>
        {isPositive && '+'}
        {transaction.amnt}
        {transaction.from.crrncy && <span>{getCurrencySymbol(transaction.from.crrncy)}</span>}
      </td>
      <td className='text-money text-sm'>
        {transaction.from.blnc}
        {transaction.from.crrncy && <span>{getCurrencySymbol(transaction.from.crrncy)}</span>}
      </td>
    </motion.tr>
  );
};

const Transactions: React.FC = () => {
  const [loading, setloading] = useState(true);
  const [showCategories, setshowCategories] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setTimeout(() => setloading(false), 500);
  }, []);
  return (
    <>
      <ScrollableSelect
        options={options}
        onChanged={({ index, selectedItem }) => console.log(selectedItem)}
        renderItem={(item, i, isSelected) => (
          <button
            className={`button button--rounded button--sm button--primary${isSelected ? '' : '--outlined'}`}>
            {item}
          </button>
        )}
        lastItem={
          <button
            className={`button button--rounded button--sm button--orange${
              showCategories ? '' : '--outlined'
            }`}
            onClick={() => setshowCategories((prev) => !prev)}>
            <div className='icon icon--left'>
              <Icon>filter_alt</Icon>
            </div>
            Filters by Categories
          </button>
        }
      />
      <AnimatePresence>
        {showCategories && (
          <motion.div
            variants={{
              hidden: { opacity: 0, height: 0 },
              visible: { opacity: 1, height: '6rem' },
            }}
            initial='hidden'
            animate='visible'
            exit='hidden'>
            <ScrollableSelect
              options={accountTypes}
              renderItem={(item, i, selected) => (
                <button
                  type='button'
                  className={`button button--sm button--rounded button--orange${
                    selected ? '' : '--outlined'
                  }`}>
                  {item.name}
                </button>
              )}
            />
          </motion.div>
        )}
      </AnimatePresence>
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
            {!loading && (
              <AnimatePresence>
                {transactios.map((transaction, index) => (
                  <TransactionItem key={transaction._id} transaction={transaction} index={index} />
                ))}
              </AnimatePresence>
            )}
          </tbody>
        </table>
      </div>
      {loading && <TextLoading />}
      {!loading && <Pagination totalPages={4} activePage={page} onChanged={(page) => setPage(page)} />}
    </>
  );
};

export default Transactions;
