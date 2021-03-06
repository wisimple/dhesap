import { IAccount } from 'models/Account';
import { ICategory } from 'models/Category';
import { ITransaction } from 'models/Transaction';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import { AccountActionTypes } from 'store/account/types';

export interface TransactionState {
  transactions: ITransaction[];
  transaction?: ITransaction;
  activePage: number;
  totalPages: number;
  loading?: boolean;
  opLoading?: boolean;
}

export const GET_PAGINATED_TRANSACTIONS = 'GET_PAGINATED_TRANSACTIONS';
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const GET_ONE_TRANSACTION = 'GET_ONE_TRANSACTION';
export const SET_TRANSACTION_LOADING = 'SET_TRANSACTION_LOADING';
export const SET_TRANSACTION_OPERATION_LOADING = 'SET_TRANSACTION_OPERATION_LOADING';
export const SET_TRANSACTIONS_ACTIVE_PAGE = 'SET_TRANSACTIONS_ACTIVE_PAGE';

export const UPDATE_TRANSACTION_ACCOUNTS = 'UPDATE_TRANSACTION_ACCOUNTS';
export const UPDATE_TRANSACTION_CATEGORIES = 'UPDATE_TRANSACTION_CATEGORIES';

interface UpdateTransactionCategories {
  type: typeof UPDATE_TRANSACTION_CATEGORIES;
  payload: {
    category: ICategory;
  };
}
interface UpdateTransactionAccounts {
  type: typeof UPDATE_TRANSACTION_ACCOUNTS;
  payload: {
    account: IAccount;
  };
}

interface SetTransactionSActivePageAction {
  type: typeof SET_TRANSACTIONS_ACTIVE_PAGE;
  payload: {
    activePage: number;
  };
}
interface SetTransactionLoadingAction {
  type: typeof SET_TRANSACTION_LOADING;
  payload: {
    loading: boolean;
  };
}
interface SetTransactionOperationLoadingAction {
  type: typeof SET_TRANSACTION_OPERATION_LOADING;
  payload: {
    opLoading: boolean;
  };
}

interface GetAllTransactionsAction {
  type: typeof GET_PAGINATED_TRANSACTIONS;
  payload: {
    transactions: ITransaction[];
    totalPages: number;
    activePage: number;
  };
}

interface CreateTransactionAction {
  type: typeof CREATE_TRANSACTION;
  payload: { transaction: ITransaction };
}

interface GetOneTransactionAction {
  type: typeof GET_ONE_TRANSACTION;
  payload: {
    transaction: ITransaction;
  };
}

interface UpdateTransactionAction {
  type: typeof UPDATE_TRANSACTION;
  payload: {
    transaction: ITransaction;
  };
}

interface DeleteTransactionAction {
  type: typeof DELETE_TRANSACTION;
  payload: {
    transaction: ITransaction;
  };
}

export type TransactionActionTypes =
  | GetAllTransactionsAction
  | CreateTransactionAction
  | GetOneTransactionAction
  | UpdateTransactionAction
  | DeleteTransactionAction
  | SetTransactionLoadingAction
  | SetTransactionOperationLoadingAction
  | SetTransactionSActivePageAction
  | UpdateTransactionAccounts
  | UpdateTransactionCategories;

export type TransactionThunkActionTypes = ThunkAction<
  void,
  RootState,
  unknown,
  TransactionActionTypes | AccountActionTypes
>;
