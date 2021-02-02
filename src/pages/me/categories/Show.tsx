import Avatar from 'components/common/Avatar';
import CustomIcon from 'components/common/CustomIcon';
import MoneyText from 'components/common/MoneyText';
import Pagination from 'components/common/Pagination';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';

import Edit from '@material-ui/icons/Edit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getOneCategory } from 'store/category/actions';
import { useTranslation } from 'react-i18next';

const Show = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const params: { id: string } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { category, loading, transactions } = useSelector((state: RootState) => state.categoryState);

  useEffect(() => {
    dispatch(getOneCategory(params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Link to={`${pathname}/edit`}>
        <div className='flex items-center'>
          <CustomIcon
            name={category?.icon.name || 'home'}
            size='lg'
            bgColor={category?.icon.bgClr}
            color={category?.icon.clr}
            className='mr-1'
          />
          <h2>{loading ? t('loading') : category?.name}</h2>
          <Edit className='icon--sm link ml-1' />
        </div>
      </Link>
      <div className='table-container mt-2'>
        <table className='table'>
          <thead>
            <tr>
              <th>{t('account')}</th>
              <th>{t('amount')}</th>
              <th>{t('date')}</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              const { _id, from, amnt } = transaction;
              return (
                <tr key={_id} onClick={() => history.push('/me/transactions/' + transaction._id)}>
                  <td>
                    <div className='flex items-center'>
                      <Avatar url={from.avtT} type={from.type} className='mr-1' size='sm' />
                      {from.name}
                    </div>
                  </td>
                  <td>
                    <MoneyText amount={amnt} currency={from.crny} />
                  </td>
                  <td>
                    <small>{new Date(transaction.cAt).toLocaleDateString()}</small>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default Show;
