import { ICategoryDto } from 'models/Category';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import api from 'utils/api';
import {
  CategoryActionTypes,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  GET_ALL_CATEGORIES_SUCCESS,
  GET_ONE_CATEGORY_SUCCESS,
  SET_CATEGORY_LOADING,
  SET_CATEGORY_OPERATION_LOADING,
  UPDATE_CATEGORY_SUCCESS,
} from './types';

type TActionType = ThunkAction<void, RootState, unknown, CategoryActionTypes>;

export const setAllCategories = (): TActionType => async (dispatch) => {
  try {
    dispatch(setCategoryLoading(true));

    const { data } = await api.get('categories');

    dispatch({
      type: GET_ALL_CATEGORIES_SUCCESS,
      payload: { categories: data },
    });
  } catch (error) {}
};

export const createCategory = (categoryDto: ICategoryDto): TActionType => async (dispatch) => {
  try {
    dispatch(setCategoryOperationLoading(true));

    const { data } = await api.post('categories', categoryDto);

    dispatch({
      type: CREATE_CATEGORY_SUCCESS,
      payload: { category: data },
    });
  } catch (error) {}
};

export const getOneCategory = (id: string): TActionType => async (dispatch) => {
  try {
    dispatch(setCategoryLoading(true));
    const { data } = await api.get(`categories/${id}`);
    dispatch({
      type: GET_ONE_CATEGORY_SUCCESS,
      payload: { category: data },
    });
  } catch (error) {}
};

export const updateCategory = (id: string, categoryDto: ICategoryDto): TActionType => async (dispatch) => {
  try {
    dispatch(setCategoryOperationLoading(true));
    const { data } = await api.put(`categories/${id}`, categoryDto);
    dispatch({
      type: UPDATE_CATEGORY_SUCCESS,
      payload: { category: data },
    });
  } catch (error) {}
};

export const deleteCategory = (id: string): TActionType => async (dispatch) => {
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
