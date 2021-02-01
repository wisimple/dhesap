import { IAccountDto } from 'models/Account';
import { getTransactions } from 'store/transaction/actions';
import { UPDATE_TRANSACTION_ACCOUNTS } from 'store/transaction/types';

import api from 'utils/api';
import {
  AccountActionTypes,
  AccountThunkActionTypes,
  CREATE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_SUCCESS,
  GET_ALL_ACCOUNTS_SUCCESS,
  GET_ONE_ACCOUNT_SUCCESS,
  SET_ACCOUNT_LOADING,
  SET_ACCOUNT_OPERATION_LOADING,
  UPDATE_ACCOUNT_SUCCESS,
} from './types';

export const getAllAccounts = (params?: {
  sort?: string;
  search?: string;
}): AccountThunkActionTypes => async (dispatch) => {
  try {
    dispatch(setAccountLoading(true));
    const { data } = await api.get('accounts', { params });
    dispatch({
      type: GET_ALL_ACCOUNTS_SUCCESS,
      payload: { accounts: data },
    });
  } catch (error) {
    dispatch(setAccountLoading(false));
  }
};

export const createAccount = (accountDto: IAccountDto): AccountThunkActionTypes => async (dispatch) => {
  try {
    dispatch(setAccountOperationLoading(true));
    const { data } = await api.post('accounts', accountDto);

    dispatch({
      type: CREATE_ACCOUNT_SUCCESS,
      payload: { account: data },
    });

    if (data.blnc !== 0) {
      dispatch(getTransactions({ page: 1 }));
    }
  } catch (error) {
    dispatch(setAccountOperationLoading(false));
  }
};

export const getOneAccount = (id: string): AccountThunkActionTypes => async (dispatch) => {
  try {
    dispatch(setAccountLoading(true));
    const { data } = await api.get(`accounts/${id}`);
    dispatch({
      type: GET_ONE_ACCOUNT_SUCCESS,
      payload: { account: data.account, transactions: data.transactions },
    });
  } catch (error) {
    dispatch(setAccountLoading(false));
  }
};

export const updateAccount = (id: string, accountDto: IAccountDto): AccountThunkActionTypes => async (
  dispatch
) => {
  try {
    dispatch(setAccountOperationLoading(true));
    const { data } = await api.put(`accounts/${id}`, accountDto);
    dispatch({
      type: UPDATE_ACCOUNT_SUCCESS,
      payload: { account: data },
    });

    dispatch({
      type: UPDATE_TRANSACTION_ACCOUNTS,
      payload: { account: data },
    });
  } catch (error) {
    dispatch(setAccountOperationLoading(false));
  }
};

export const deleteAccount = (id: string): AccountThunkActionTypes => async (dispatch) => {
  try {
    dispatch(setAccountOperationLoading(true));
    const { data } = await api.delete(`accounts/${id}`);
    dispatch({
      type: DELETE_ACCOUNT_SUCCESS,
      payload: { account: data },
    });
  } catch (error) {
    dispatch(setAccountOperationLoading(false));
  }
};

export const setAccountLoading = (loading: boolean): AccountActionTypes => {
  return {
    type: SET_ACCOUNT_LOADING,
    payload: { loading },
  };
};

export const setAccountOperationLoading = (opLoading: boolean): AccountActionTypes => {
  return {
    type: SET_ACCOUNT_OPERATION_LOADING,
    payload: { opLoading },
  };
};
