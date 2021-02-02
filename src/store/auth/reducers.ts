import { AuthActionTypes, AuthState, SET_USER, SIGN_IN, SIGN_OUT, SIGN_UP } from './types';

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token') || null,
};

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP: {
      const { user, token } = action.payload;
      return { ...state, user, token };
    }
    case SIGN_OUT:
      return { ...state, user: null, token: null };

    case SET_USER: {
      const { user } = action.payload;
      return { ...state, user };
    }

    default:
      return state;
  }
}
