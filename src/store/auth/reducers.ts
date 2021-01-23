import { AuthActionTypes, AuthState, SIGN_IN, SIGN_OUT } from './types';

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token') || null,
};

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case SIGN_IN: {
      const { user, token } = action.payload;
      return { ...state, user, token };
    }
    case SIGN_OUT:
      return { ...state, user: null, token: null };
    default:
      return state;
  }
}