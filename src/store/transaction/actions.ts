import { ITransactionCrudDto } from 'models/Transaction';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import api from 'utils/api';
import {
  CREATE_TRANSACTION,
  DELETE_TRANSACTION,
  GET_ONE_TRANSACTION,
  GET_PAGINATED_TRANSACTIONS,
  TransactionActionTypes,
  UPDATE_TRANSACTION,
} from './types';

type TActionType = ThunkAction<void, RootState, unknown, TransactionActionTypes>;

export const getTransactions = (params: { page: number }): TActionType => async (dispatch) => {
  try {
    const { data } = await api.get('transactions', { params: { ...params } });

    const { transactions, totalPages, activePage } = data;
    dispatch({
      type: GET_PAGINATED_TRANSACTIONS,
      payload: { transactions, totalPages, activePage },
    });
  } catch (error) {}
};

export const createTransaction = (transactonCrudDto: ITransactionCrudDto): TActionType => async (
  dispatch
) => {
  try {
    const { data } = await api.post('transactions', transactonCrudDto);

    dispatch({
      type: CREATE_TRANSACTION,
      payload: { transaction: data },
    });
  } catch (error) {}
};

export const getOneTransaction = (id: string): TActionType => async (dispatch) => {
  try {
    const { data } = await api.get(`transactions/${id}`);
    dispatch({
      type: GET_ONE_TRANSACTION,
      payload: { transaction: data },
    });
  } catch (error) {}
};

export const updateTransaction = (id: string, transactonCrudDto: ITransactionCrudDto): TActionType => async (
  dispatch
) => {
  try {
    const { data } = await api.put(`transactions/${id}`, transactonCrudDto);
    dispatch({
      type: UPDATE_TRANSACTION,
      payload: { transaction: data },
    });
  } catch (error) {}
};

export const deleteTransaction = (id: string): TActionType => async (dispatch) => {
  try {
    const { data } = await api.delete(`transactions/${id}`);
    dispatch({
      type: DELETE_TRANSACTION,
      payload: { transaction: data },
    });
  } catch (error) {}
};
