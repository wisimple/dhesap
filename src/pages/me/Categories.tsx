import ChevronRight from '@material-ui/icons/ChevronRight';
import CustomIcon from 'components/common/CustomIcon';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import TextLoading from 'components/common/TextLoading';
import Pagination from 'components/common/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setAllCategories } from 'store/category/actions';
import { InsertInvitationTwoTone } from '@material-ui/icons';

const Categories: React.FC = () => {
  const categories = useSelector((state: RootState) => state.categoryState.categories);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (categories.length === 0) dispatch(setAllCategories());
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
      <Pagination />
    </>
  );
};

export default Categories;
