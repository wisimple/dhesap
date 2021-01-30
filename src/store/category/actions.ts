import { ICategoryDto } from 'models/Category';

import { UPDATE_TRANSACTION_CATEGORIES } from 'store/transaction/types';
import api from 'utils/api';
import {
  CategoryThunkActionTypes,
  CategoryActionTypes,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ONE_CATEGORY_SUCCESS,
  SET_CATEGORY_LOADING,
  SET_CATEGORY_OPERATION_LOADING,
  UPDATE_CATEGORY_SUCCESS,
} from './types';

export const getAllCategories = (): CategoryThunkActionTypes => async (dispatch, getState) => {
  try {
    const { categoryState } = getState();

    dispatch(setCategoryLoading(true));

    const { data } = await api.get('categories');

    dispatch({
      type: GET_ALL_CATEGORIES_SUCCESS,
      payload: { categories: data },
    });
  } catch (error) {}
};

export const createCategory = (categoryDto: ICategoryDto): CategoryThunkActionTypes => async (dispatch) => {
  try {
    dispatch(setCategoryOperationLoading(true));

    const { data } = await api.post('categories', categoryDto);

    dispatch({
      type: CREATE_CATEGORY_SUCCESS,
      payload: { category: data },
    });
  } catch (error) {}
};

export const getOneCategory = (id: string): CategoryThunkActionTypes => async (dispatch) => {
  try {
    dispatch(setCategoryLoading(true));
    const { data } = await api.get(`categories/${id}`);
    dispatch({
      type: GET_ONE_CATEGORY_SUCCESS,
      payload: { category: data },
    });
  } catch (error) {}
};

export const updateCategory = (id: string, categoryDto: ICategoryDto): CategoryThunkActionTypes => async (
  dispatch
) => {
  try {
    dispatch(setCategoryOperationLoading(true));
    const { data } = await api.put(`categories/${id}`, categoryDto);
    dispatch({
      type: UPDATE_CATEGORY_SUCCESS,
      payload: { category: data },
    });

    dispatch({
      type: UPDATE_TRANSACTION_CATEGORIES,
      payload: {
        category: data,
      },
    });
  } catch (error) {}
};

export const deleteCategory = (id: string): CategoryThunkActionTypes => async (dispatch) => {
  try {
    dispatch(setCategoryOperationLoading(true));
    const { data } = await api.delete(`categories/${id}`);
    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
      payload: { category: data },
    });
  } catch (error) {}
};

const setCategoryLoading = (loading: boolean): CategoryActionTypes => {
  return {
    type: SET_CATEGORY_LOADING,
    payload: { loading },
  };
};

const setCategoryOperationLoading = (opLoading: boolean): CategoryActionTypes => {
  return {
    type: SET_CATEGORY_OPERATION_LOADING,
    payload: { opLoading },
  };
};
