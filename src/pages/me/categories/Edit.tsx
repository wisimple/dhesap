import React, { useEffect, useState } from 'react';
import { seeedCategory } from 'seeds/categories';
import CategoryForm from 'components/category/CategoryForm';
import { ICategory } from 'models/Category';
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
  }, []);

  return <CategoryForm data={category} />;
};

export default Edit;
