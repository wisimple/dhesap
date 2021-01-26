import { ICategory } from 'models/Category';

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
export const SET_LOADING = 'SET_LOADING';
export const SET_OPERATION_LOADING = 'SET_OPERATION_LOADING';
interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: {
    loading: boolean;
  };
}
interface SetOperationLoadingAction {
  type: typeof SET_OPERATION_LOADING;
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
  | SetLoadingAction
  | SetOperationLoadingAction;
