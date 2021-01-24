import AccountForm from 'components/account/AccountForm';
import { IAccount } from 'models/Account';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { seedAccount } from 'seeds/accounts';
import { RootState } from 'store';
import { getOneAccount } from 'store/account/actions';

const Edit = () => {
  const [loading, setloading] = useState(true);
  const account = useSelector((state: RootState) => state.accountState.account);
  const params: { id: string } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneAccount(params.id));
  }, [params]);

  return <AccountForm data={account} loading={loading} />;
};

export default Edit;
