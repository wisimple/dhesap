import Avatar from 'components/common/Avatar';
import CustomIcon from 'components/common/CustomIcon';
import MoneyText from 'components/common/MoneyText';
import Pagination from 'components/common/Pagination';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { seeedCategory } from 'seeds/categories';
import { seedTransactions } from 'seeds/transactions';

import Edit from '@material-ui/icons/Edit';
import { ICategory } from 'models/Category';
import { useEffect, useState } from 'react';
import { ITransaction } from 'models/Transaction';
import LoadingText from 'components/common/TextLoading';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getOneCategory } from 'store/category/actions';

const Show = () => {
  const { pathname } = useLocation();
  const params: { id: string } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.categoryState.category);
  const [transactions, settransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    dispatch(getOneCategory(params.id));
  }, []);

  if (!category) return <LoadingText />;

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
          <h2>{category?.name}</h2>
          <Edit className='icon--sm link ml-1' />
        </div>
      </Link>
      <div className='table-container mt-2'>
        <table className='table'>
          <thead>
            <tr>
              <th>Account</th>
              <th>Amount</th>
              <th>Date</th>
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
                  <td className='text-xsm'>{transaction.cAt.toLocaleDateString()}</td>
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
