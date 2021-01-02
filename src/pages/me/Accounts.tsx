import Avatar from 'components/common/Avatar';

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
          {Array.from(Array(15).keys()).map((item, i) => (
            <tr key={i}>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar imageUrl='https://www.w3schools.com/howto/img_avatar.png' />
                  <span>Arif Sami SAHIN</span>
                </div>
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
