import Avatar from 'components/common/Avatar';
import MoneyText from 'components/common/MoneyText';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';

import Edit from '@material-ui/icons/Edit';
import React, { useEffect } from 'react';
import CustomIcon from 'components/common/CustomIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getOneAccount } from 'store/account/actions';
import { RootState } from 'store';
import LoadingText from 'components/common/TextLoading';
import { useTranslation } from 'react-i18next';

const Show = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const params: { id: string } = useParams();
  const history = useHistory();
  const { account, transactions, loading } = useSelector((state: RootState) => state.accountState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneAccount(params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Link to={`${pathname}/edit`}>
        <div className='flex items-center'>
          <Avatar type={account?.type || 'person'} className='mr-2' />
          <h2>{loading ? t('loading') : account?.name}</h2>
          <Edit className='icon--sm link ml-1' />
        </div>
      </Link>
      <div className='table-container mt-2'>
        <table className='table'>
          <thead>
            <tr>
              <th>{t('description')}</th>
              <th>{t('amount')}</th>
              <th>{t('balance')}</th>
              <th>{t('date')}</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              const { _id, desc, amnt, cAt } = transaction;
              return (
                <tr key={_id} onClick={() => history.push('/me/transactions/' + transaction._id)}>
                  <td>
                    <div className='flex flex-wrap items-center'>
                      <span>{desc}</span>
                      <div className='flex items-center flex-wrap'>
                        {transaction.ctgrs?.map((c) => (
                          <div
                            key={c._id}
                            className='badge'
                            style={{ backgroundColor: c.icon.bgClr, color: c.icon.clr }}>
                            <CustomIcon name={c.icon.name} size='sm' color={c.icon.clr} />
                            <span>{c.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td>
                    <MoneyText amount={amnt} currency={account?.crny} />
                  </td>
                  <td>
                    <MoneyText
                      amount={transaction.fBlnc}
                      currency={account?.crny}
                      colored={false}
                      className='text-sm'
                    />
                  </td>
                  <td className=''>
                    <small>{new Date(cAt).toLocaleDateString()}</small>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {loading && !transactions.length && <LoadingText />}
    </>
  );
};

export default Show;
