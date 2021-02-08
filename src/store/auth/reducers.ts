import {
  AuthActionTypes,
  AuthState,
  SET_AUTH_ERROR,
  SET_AUTH_LOADING,
  SET_USER,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  UPDATE_USER,
} from "./types";

const initialState: AuthState = {
  user: undefined,
  token: localStorage.getItem("token") || null,
  loading: false,
};

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
  switch (action.type) {
    case SET_AUTH_LOADING: {
      const { loading } = action.payload;
      return { ...state, loading };
    }

    case SET_AUTH_ERROR: {
      const { error } = action.payload;
      return { ...state, error, loading: false };
    }
    case SIGN_IN:
    case SIGN_UP: {
      const { user, token } = action.payload;
      return { ...state, user, token, loading: false, error: "" };
    }
    case SIGN_OUT:
      return { ...state, user: undefined, token: null };

    case SET_USER:
    case UPDATE_USER: {
      const { user } = action.payload;
      return { ...state, user };
    }

    default:
      return state;
  }
}
