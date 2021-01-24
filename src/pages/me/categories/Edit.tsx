import React, { useEffect } from 'react';
import CategoryForm from 'components/category/CategoryForm';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneCategory } from 'store/category/actions';
import { RootState } from 'store';

const Edit = () => {
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.categoryState.category);

  useEffect(() => {
    dispatch(getOneCategory(params.id));
  }, [params]); // eslint-disable-line react-hooks/exhaustive-deps

  return <CategoryForm data={category} />;
};

export default Edit;
