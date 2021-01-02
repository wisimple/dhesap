import React from 'react';
import MultiSelect from '../components/common/MultiSelect';
import Pagination from '../components/common/Pagination';

const Home = () => {
  return (
    <>
      <MultiSelect />
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th style={{ width: '9rem' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(50).keys()).map((item, i) => (
            <tr key={i}>
              <td>Arif Sami SAHIN</td>
              <td className='money text-green'>+300.00$</td>
              <td>20-02-20</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </>
  );
};

export default Home;
