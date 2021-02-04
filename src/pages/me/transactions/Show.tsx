import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { RootState } from 'store';

import { getOneTransaction } from 'store/transaction/actions';

import Button from 'components/common/inputs/Button';

const Show = () => {
  const dispatch = useDispatch();
  const params: { id: string } = useParams();
  const { pathname } = useLocation();
  const transaction = useSelector((state: RootState) => state.transactionState.transaction);

  useEffect(() => {
    dispatch(getOneTransaction(params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <Link to={`${pathname}/edit`}>
        <Button>Bu hesap hareketini duzenle</Button>
      </Link>
      <p>bu kisim hesap hareketinin tum ayrintiliari gosterilecektir</p>
    </div>
  );
};

export default Show;
