import { ITransaction } from 'models/Transaction';

export interface TransactionState {
  transactions: ITransaction[];
  transaction?: ITransaction;
  activePage: number;
  totalPages: number;
}

export const GET_PAGINATED_TRANSACTIONS = 'GET_PAGINATED_TRANSACTIONS';
export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const GET_ONE_TRANSACTION = 'GET_ONE_TRANSACTION';

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
  | DeleteTransactionAction;
