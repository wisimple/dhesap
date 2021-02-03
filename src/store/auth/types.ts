import { IUser } from 'models/User';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import { IUserSettings } from 'models/User';
import { AppActionTypes } from 'store/app/types';
export interface AuthState {
  user?: IUser;
  token: string | null;
}

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_USER = 'SET_USER';

export const UPDATE_USER = 'UPDATE_USER';

interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: {
    user: IUser;
  };
}
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

export type AuthActionTypes =
  | SigninAction
  | SignupAction
  | SignoutAction
  | SetUserAction
  | UpdateUserAction
  | AppActionTypes;
export type AuthThunkActionTypes = ThunkAction<void, RootState, unknown, AuthActionTypes>;
