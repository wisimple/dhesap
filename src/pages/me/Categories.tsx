import ChevronRight from '@material-ui/icons/ChevronRight';
import CustomIcon from 'components/common/CustomIcon';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { getAllCategories } from 'store/category/actions';

import LoadingText from 'components/common/TextLoading';

import { useTranslation } from 'react-i18next';

const Categories: React.FC = () => {
  const { t } = useTranslation();
  const { categories, loading } = useSelector((state: RootState) => state.categoryState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (categories.length < 2) {
      dispatch(getAllCategories());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr>
              <th>{t('categories')}</th>
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
        {loading && <LoadingText />}
      </div>
    </>
  );
};

export default Categories;
