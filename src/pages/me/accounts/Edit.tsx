import AccountForm from 'components/account/AccountForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from 'store';
import { getOneAccount } from 'store/account/actions';

const Edit = () => {
  const history = useHistory();
  const { account, loading } = useSelector((state: RootState) => state.accountState);
  const params: { id: string } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (account?._id !== params.id) dispatch(getOneAccount(params.id));
  }, [params]); // eslint-disable-line react-hooks/exhaustive-deps

  return <AccountForm data={account} loading={loading} onSubmitEnd={() => history.goBack()} />;
};

export default Edit;
