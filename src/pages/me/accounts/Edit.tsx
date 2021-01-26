import AccountForm from 'components/account/AccountForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'store';
import { getOneAccount } from 'store/account/actions';

const Edit = () => {
  const [loading, setloading] = useState(false);
  const account = useSelector((state: RootState) => state.accountState.account);
  const params: { id: string } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function init() {
      setloading(true);
      dispatch(getOneAccount(params.id));
      setloading(false);
    }
    init();
  }, [params]); // eslint-disable-line react-hooks/exhaustive-deps

  return <AccountForm data={account} loading={loading} />;
};

export default Edit;
