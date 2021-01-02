import Avatar from 'components/common/Avatar';
import MultiSelect from 'components/common/MultiSelect';
import Pagination from 'components/common/Pagination';

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
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar imageUrl='https://www.w3schools.com/howto/img_avatar.png' />
                  <span>Arif Sami SAHIN</span>
                </div>
              </td>
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
