import { IAccount } from 'models/Account';

export interface AccountState {
  accounts: IAccount[];
  account?: IAccount;
  loading?: boolean;
  opLoading?: boolean;
}

export const GET_ALL_ACCOUNTS_SUCCESS = 'GET_ALL_ACCOUNTS_SUCCESS';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const GET_ONE_ACCOUNT_SUCCESS = 'GET_ONE_ACCOUNT_SUCCESS';
export const SET_ACCOUNT_LOADING = 'SET_ACCOUNT_LOADING';
export const SET_ACCOUNT_OPERATION_LOADING = 'SET_ACCOUNT_OPERATION_LOADING';
interface SetAccountLoadingAction {
  type: typeof SET_ACCOUNT_LOADING;
  payload: {
    loading: boolean;
  };
}
interface SetAccountOperationLoadingAction {
  type: typeof SET_ACCOUNT_OPERATION_LOADING;
  payload: {
    opLoading: boolean;
  };
}
interface GetAllAccountsSuccessAction {
  type: typeof GET_ALL_ACCOUNTS_SUCCESS;
  payload: {
    accounts: IAccount[];
  };
}

interface CreateAccountSuccessAction {
  type: typeof CREATE_ACCOUNT_SUCCESS;
  payload: { account: IAccount };
}

interface GetOneAccountSuccessAction {
  type: typeof GET_ONE_ACCOUNT_SUCCESS;
  payload: {
    account: IAccount;
  };
}

interface UpdateAccountSuccessAction {
  type: typeof UPDATE_ACCOUNT_SUCCESS;
  payload: {
    account: IAccount;
  };
}
interface DeleteAccountSuccessAction {
  type: typeof DELETE_ACCOUNT_SUCCESS;
  payload: {
    account: IAccount;
  };
}

export type AccountActionTypes =
  | GetAllAccountsSuccessAction
  | CreateAccountSuccessAction
  | GetOneAccountSuccessAction
  | UpdateAccountSuccessAction
  | DeleteAccountSuccessAction
  | SetAccountLoadingAction
  | SetAccountOperationLoadingAction;
