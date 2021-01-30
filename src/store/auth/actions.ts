import { AuthActionTypes, SIGN_IN, SIGN_OUT, SIGN_UP } from './types';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import api from 'utils/api';

type TActionType = ThunkAction<void, RootState, unknown, AuthActionTypes>;

export const signin = (email: string, password: string): TActionType => async (dispatch) => {
  try {
    const { data } = await api.post('auth/signin', {
      email,
      password,
    });

    api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    localStorage.setItem('token', data.token);

    dispatch({
      type: SIGN_IN,
      payload: data,
    });
  } catch (error) {}
};

export const signup = (name: string, email: string, password: string): TActionType => async (dispatch) => {
  try {
    const { data } = await api.post('auth/signup', {
      name,
      email,
      password,
    });

    api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    localStorage.setItem('token', data.token);

    dispatch({
      type: SIGN_UP,
      payload: data,
    });
  } catch (error) {}
};

export function signout(): AuthActionTypes {
  localStorage.clear();
  api.defaults.headers.common['Authorization'] = '';
  return {
    type: SIGN_OUT,
  };
}
