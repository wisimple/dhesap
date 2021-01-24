import { IAccount } from 'models/Account';

export interface AccountState {
  accounts: IAccount[];
  account?: IAccount;
}

export const GET_ALL_ACCOUNTS_SUCCESS = 'GET_ALL_ACCOUNTS_SUCCESS';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const GET_ONE_ACCOUNT_SUCCESS = 'GET_ONE_ACCOUNT_SUCCESS';

interface GetAllCategoriesSuccessAction {
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
  | GetAllCategoriesSuccessAction
  | CreateAccountSuccessAction
  | GetOneAccountSuccessAction
  | UpdateAccountSuccessAction
  | DeleteAccountSuccessAction;
