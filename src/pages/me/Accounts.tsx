import Avatar from 'components/common/Avatar';
import { seedAccounts } from 'seeds/accounts';
import { getCurrencySymbol } from 'constants/currencies';

const Accounts = () => {
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
              <th>Name</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {seedAccounts(30).map((account, index) => (
              <tr key={account._id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar url={account.avtrThumb} />
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
    </>
  );
};

export default Accounts;
