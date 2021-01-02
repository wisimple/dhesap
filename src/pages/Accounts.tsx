import React from 'react';
import Avatar from '../components/common/Avatar';

const Accounts = () => {
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {Array.from(Array(50).keys()).map((item, i) => (
            <tr key={i}>
              <td>
                <Avatar imageUrl='https://www.w3schools.com/howto/img_avatar.png' />
                Arif Sami SAHIN
              </td>
              <td className='money text-green'>+300.00$</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Accounts;
