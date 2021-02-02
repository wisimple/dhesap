import { IUser } from 'models/User';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

export interface AuthState {
  user: IUser | null;
  token: string | null;
}

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_USER = 'SET_USER';

interface SetUserAction {
  type: typeof SET_USER;
  payload: {
    user: IUser;
  };
}

interface SigninAction {
  type: typeof SIGN_IN;
  payload: { user: IUser; token: string };
}

interface SignupAction {
  type: typeof SIGN_UP;
  payload: {
    user: IUser;
    token: string;
  };
}

interface SignoutAction {
  type: typeof SIGN_OUT;
}

export type AuthActionTypes = SigninAction | SignupAction | SignoutAction | SetUserAction;
export type AuthThunkActionTypes = ThunkAction<void, RootState, unknown, AuthActionTypes>;
