import { AuthActionTypes, AuthThunkActionTypes, SIGN_IN, SIGN_OUT, SIGN_UP, SET_USER } from './types';

import api from 'utils/api';

export const signin = (email: string, password: string): AuthThunkActionTypes => async (dispatch) => {
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

export const signup = (name: string, email: string, password: string): AuthThunkActionTypes => async (
  dispatch
) => {
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

export const getUserData = (): AuthThunkActionTypes => async (dispatch) => {
  try {
    const { data } = await api.get('me');

    dispatch({
      type: SET_USER,
      payload: {
        user: data,
      },
    });
  } catch (error) {}
};
