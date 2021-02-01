import { ITransactionCrudDto } from 'models/Transaction';
import api from 'utils/api';

import {
  CREATE_TRANSACTION,
  DELETE_TRANSACTION,
  GET_ONE_TRANSACTION,
  GET_PAGINATED_TRANSACTIONS,
  SET_TRANSACTIONS_ACTIVE_PAGE,
  SET_TRANSACTION_LOADING,
  SET_TRANSACTION_OPERATION_LOADING,
  TransactionActionTypes,
  TransactionThunkActionTypes,
  UPDATE_TRANSACTION,
} from './types';

import { UPDATE_ACCOUNT_SUCCESS } from 'store/account/types';

export const getTransactions = (params: { page: number }): TransactionThunkActionTypes => async (
  dispatch
) => {
  try {
    dispatch(setTransactionLoading(true));
    const { data } = await api.get('transactions', { params: { ...params } });

    const { transactions, totalPages, activePage } = data;
    dispatch({
      type: GET_PAGINATED_TRANSACTIONS,
      payload: { transactions, totalPages, activePage },
    });
  } catch (error) {}
};

export const createTransaction = (
  transactonCrudDto: ITransactionCrudDto
): TransactionThunkActionTypes => async (dispatch, getState) => {
  try {
    dispatch(setTransactionOperationLoading(true));
    const { data } = await api.post('transactions', transactonCrudDto);

    dispatch({
      type: CREATE_TRANSACTION,
      payload: { transaction: data },
    });

    dispatch({
      type: UPDATE_ACCOUNT_SUCCESS,
      payload: {
        account: data.from,
      },
    });

    if (data.to) {
      dispatch({
        type: UPDATE_ACCOUNT_SUCCESS,
        payload: {
          account: data.to,
        },
      });
    }

    const { transactionState } = getState();
    if (transactionState.activePage !== 1) {
      dispatch(getTransactions({ page: 1 }));
    }
  } catch (error) {}
};

export const getOneTransaction = (id: string): TransactionThunkActionTypes => async (dispatch) => {
  try {
    dispatch(setTransactionLoading(true));
    const { data } = await api.get(`transactions/${id}`);
    dispatch({
      type: GET_ONE_TRANSACTION,
      payload: { transaction: data },
    });
  } catch (error) {}
};

export const updateTransaction = (
  id: string,
  transactonCrudDto: ITransactionCrudDto
): TransactionThunkActionTypes => async (dispatch, getState) => {
  try {
    dispatch(setTransactionOperationLoading(true));
    const { data } = await api.put(`transactions/${id}`, transactonCrudDto);
    dispatch({
      type: UPDATE_TRANSACTION,
      payload: { transaction: data },
    });

    dispatch({
      type: UPDATE_ACCOUNT_SUCCESS,
      payload: {
        account: data.from,
      },
    });

    if (data.to) {
      dispatch({
        type: UPDATE_ACCOUNT_SUCCESS,
        payload: {
          account: data.to,
        },
      });
    }

    const { transactionState } = getState();
    dispatch(getTransactions({ page: transactionState.activePage }));
  } catch (error) {}
};

export const deleteTransaction = (id: string): TransactionThunkActionTypes => async (dispatch, getState) => {
  try {
    const { data } = await api.delete(`transactions/${id}`);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: { transaction: data },
    });

    const { transactionState } = getState();
    dispatch(getTransactions({ page: transactionState.activePage }));
  } catch (error) {}
};

export const setTransactionsActivePage = (activePage: number): TransactionActionTypes => {
  return {
    type: SET_TRANSACTIONS_ACTIVE_PAGE,
    payload: { activePage },
  };
};

const setTransactionLoading = (loading: boolean): TransactionActionTypes => {
  return {
    type: SET_TRANSACTION_LOADING,
    payload: { loading },
  };
};

const setTransactionOperationLoading = (opLoading: boolean): TransactionActionTypes => {
  return {
    type: SET_TRANSACTION_OPERATION_LOADING,
    payload: { opLoading },
  };
};
