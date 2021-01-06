import React, { useEffect, useState } from 'react';
import Avatar from 'components/common/Avatar';
import Pagination from 'components/common/Pagination';

import { AnimatePresence, motion } from 'framer-motion';
import LoadingText from 'components/common/LoadingText';
import ScrollableSelect from 'components/common/inputs/ScrollableSelect';

const options = ['All', 'Incomes', 'Expenses', 'hello world', 'it has been a long time'];

const Transactions: React.FC = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => setloading(false), 200);
  }, []);
  return (
    <>
      <ScrollableSelect
        options={options}
        onChanged={({ index, selectedItem }) => console.log(selectedItem)}
        renderItem={(item, i, isSelected) => (
          <button
            className={`button button--rounded button--sm ${isSelected ? '' : 'button--inverted'}`}>
            {item}
          </button>
        )}
      />
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th style={{ width: '9rem' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {!loading && (
            <AnimatePresence>
              {Array.from(Array(15).keys()).map((item, i) => (
                <motion.tr
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: () => ({ opacity: 1, y: 0, transition: { delay: i * 0.02 } }),
                  }}
                  initial='hidden'
                  animate='visible'>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar imageUrl='https://www.w3schools.com/howto/img_avatar.png' />
                      <span>Arif Sami SAHIN</span>
                    </div>
                  </td>
                  <td className='money text-green'>+300.00$</td>
                  <td>20-02-20</td>
                </motion.tr>
              ))}
            </AnimatePresence>
          )}
        </tbody>
      </table>
      {loading && <LoadingText />}
      {!loading && <Pagination />}
    </>
  );
};

export default Transactions;
