import { IAccountDto } from 'models/Account';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import api from 'utils/api';
import {
  AccountActionTypes,
  CREATE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_SUCCESS,
  GET_ALL_ACCOUNTS_SUCCESS,
  GET_ONE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_SUCCESS,
} from './types';

type TActionType = ThunkAction<void, RootState, unknown, AccountActionTypes>;

export const setAllCategories = (): TActionType => async (dispatch) => {
  try {
    const { data } = await api.get('accounts');
    dispatch({
      type: GET_ALL_ACCOUNTS_SUCCESS,
      payload: { accounts: data },
    });
  } catch (error) {}
};

export const createAccount = (accountDto: IAccountDto): TActionType => async (dispatch) => {
  try {
    const { data } = await api.post('accounts', accountDto);

    dispatch({
      type: CREATE_ACCOUNT_SUCCESS,
      payload: { account: data },
    });
  } catch (error) {}
};

export const getOneAccount = (id: string): TActionType => async (dispatch) => {
  try {
    const { data } = await api.get(`accounts/${id}`);
    dispatch({
      type: GET_ONE_ACCOUNT_SUCCESS,
      payload: { account: data },
    });
  } catch (error) {}
};

export const updateAccount = (id: string, accountDto: IAccountDto): TActionType => async (dispatch) => {
  try {
    const { data } = await api.put(`accounts/${id}`, accountDto);
    dispatch({
      type: UPDATE_ACCOUNT_SUCCESS,
      payload: { account: data },
    });
  } catch (error) {}
};

export const deleteAccount = (id: string): TActionType => async (dispatch) => {
  try {
    const { data } = await api.delete(`accounts/${id}`);
    dispatch({
      type: DELETE_ACCOUNT_SUCCESS,
      payload: { account: data },
    });
  } catch (error) {}
};
