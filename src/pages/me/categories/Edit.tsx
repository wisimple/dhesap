import React, { useEffect } from 'react';
import CategoryForm from 'components/category/CategoryForm';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneCategory } from 'store/category/actions';
import { RootState } from 'store';

const Edit = () => {
  const history = useHistory();
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const { category, loading } = useSelector((state: RootState) => state.categoryState);

  useEffect(() => {
    if (category?._id !== params.id) {
      dispatch(getOneCategory(params.id));
    }
  }, [params]); // eslint-disable-line react-hooks/exhaustive-deps

  return <CategoryForm data={category} loading={loading} onSubmitEnd={() => history.goBack()} />;
};

export default Edit;
