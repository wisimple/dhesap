import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { RootState } from 'store';

import { getOneTransaction } from 'store/transaction/actions';

const Show = () => {
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  const { pathname } = useLocation();
  const history = useHistory();
  const transaction = useSelector((state: RootState) => state.transactionState.transaction);

  useEffect(() => {
    dispatch(getOneTransaction(params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <Link to={`${pathname}/edit`}>
        <h3>{transaction?._id}</h3>
      </Link>
      <pre>{JSON.stringify(transaction, null, 2)}</pre>
    </div>
  );
};

export default Show;
