import TransactionForm from 'components/transaction/TransactionForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from 'store';
import { getOneTransaction } from 'store/transaction/actions';

const Edit = () => {
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { transaction, loading } = useSelector((state: RootState) => state.transactionState);

  useEffect(() => {
    if (params.id !== transaction?._id) {
      dispatch(getOneTransaction(params.id));
    }
  }, []);
  return <TransactionForm data={transaction} loading={loading} onSubmitEnd={() => history.goBack()} />;
};

export default Edit;
