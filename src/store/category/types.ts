import { ICategory } from 'models/Category';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import { TransactionActionTypes } from 'store/transaction/types';

export interface CategoryState {
  categories: ICategory[];
  category?: ICategory;
  loading?: boolean;
  opLoading?: boolean;
}

export const GET_ALL_CATEGORIES_SUCCESS = 'GET_ALL_CATEGORIES_SUCCESS';
export const CREATE_CATEGORY_SUCCESS = 'CREATE_CATEGORY_SUCCESS';
export const UPDATE_CATEGORY_SUCCESS = 'UPDATE_CATEGORY_SUCCESS';
export const DELETE_CATEGORY_SUCCESS = 'DELETE_CATEGORY_SUCCESS';
export const GET_ONE_CATEGORY_SUCCESS = 'GET_ONE_CATEGORY_SUCCESS';
export const SET_CATEGORY_LOADING = 'SET_CATEGORY_LOADING';
export const SET_CATEGORY_OPERATION_LOADING = 'SET_CATEGORY_OPERATION_LOADING';
interface SetCategoryLoadingAction {
  type: typeof SET_CATEGORY_LOADING;
  payload: {
    loading: boolean;
  };
}
interface SetCategoryOperationLoadingAction {
  type: typeof SET_CATEGORY_OPERATION_LOADING;
  payload: {
    opLoading: boolean;
  };
}

interface GetAllCategoriesSuccessAction {
  type: typeof GET_ALL_CATEGORIES_SUCCESS;
  payload: {
    categories: ICategory[];
  };
}

interface CreateCategorySuccessAction {
  type: typeof CREATE_CATEGORY_SUCCESS;
  payload: { category: ICategory };
}

interface GetOneCategorySuccessAction {
  type: typeof GET_ONE_CATEGORY_SUCCESS;
  payload: {
    category: ICategory;
  };
}

interface UpdateCategorySuccessAction {
  type: typeof UPDATE_CATEGORY_SUCCESS;
  payload: {
    category: ICategory;
  };
}
interface DeleteCategorySuccessAction {
  type: typeof DELETE_CATEGORY_SUCCESS;
  payload: {
    category: ICategory;
  };
}

export type CategoryActionTypes =
  | GetAllCategoriesSuccessAction
  | CreateCategorySuccessAction
  | GetOneCategorySuccessAction
  | UpdateCategorySuccessAction
  | DeleteCategorySuccessAction
  | SetCategoryLoadingAction
  | SetCategoryOperationLoadingAction;

export type CategoryThunkActionTypes = ThunkAction<
  void,
  RootState,
  unknown,
  CategoryActionTypes | TransactionActionTypes
>;
