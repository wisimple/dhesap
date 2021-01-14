import { useState } from 'react';

import Avatar from 'components/common/Avatar';
import { seedAccounts } from 'seeds/accounts';
import { getCurrencySymbol } from 'constants/currencies';
import Pagination from 'components/common/Pagination';

import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import UnfoldMoreTwoTone from '@material-ui/icons/UnfoldMoreTwoTone';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const accounts = seedAccounts(30);
console.log(accounts);

const Accounts = () => {
  const [page, setPage] = useState(1);
  console.log('render');
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
              <tr key={account._id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      url={account.avtrThumb}
                      type={account.type}
                      gender={account.gndr}
                      className='mr-15'
                    />
                    <span>{account.name}</span>
                  </div>
                </td>
                <td className={`text-money text-${account.blnc > 0 ? 'green' : 'red'}`}>
                  {account.blnc}
                  <span>{getCurrencySymbol(account.crrncy)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination totalPages={3} activePage={page} onChanged={(page) => setPage(page)} />
    </>
  );
};

export default Accounts;
