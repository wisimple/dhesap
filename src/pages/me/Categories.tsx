import ChevronRight from '@material-ui/icons/ChevronRight';
import CustomIcon from 'components/common/CustomIcon';
import { ICategory } from 'models/Category';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { seedCategories } from 'seeds/categories';
import TextLoading from 'components/common/TextLoading';
import Pagination from 'components/common/Pagination';

const Categories: React.FC = () => {
  const [categories, setcategories] = useState<ICategory[]>([]);
  const [loading, setloading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      const res = seedCategories(30);
      setcategories(res);
      setloading(false);
    }, 300);
  }, []);

  return (
    <>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr>
              <th>Categories</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, i) => (
              <tr key={category._id} onClick={() => history.push('/me/categories/' + category._id)}>
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
      </div>
      {loading && <TextLoading />}
      <Pagination />
    </>
  );
};

export default Categories;
