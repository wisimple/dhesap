import ChevronRight from '@material-ui/icons/ChevronRight';
import CustomIcon from 'components/common/CustomIcon';
import { useHistory } from 'react-router-dom';

import { seedCategories } from 'seeds/categories';

const Categories: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>Categories</th>
          </tr>
        </thead>
        <tbody>
          {seedCategories(20).map((category, i) => (
            <tr key={category._id} onClick={() => history.push('/me/categories/' + category._id + '/edit')}>
              <td>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <CustomIcon
                    name={category.icon.name}
                    color={category.icon.clr}
                    bgColor={category.icon.bgClr}
                    className='mr-15'
                  />
                  <span className='text-truncate' style={{ flexGrow: 1 }}>
                    {category.name}
                  </span>
                  <ChevronRight style={{ flexShrink: 0 }} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Categories;
