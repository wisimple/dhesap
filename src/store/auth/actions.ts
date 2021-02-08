import {
  AuthActionTypes,
  AuthThunkActionTypes,
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  SET_USER,
  UPDATE_USER,
  SET_AUTH_LOADING,
  SET_AUTH_ERROR,
} from "./types";

import api from "utils/api";
import { IUserSettings } from "models/User";
import { setAppLanguage, setAppTheme } from "store/app/actions";

export const signin = (email: string, password: string): AuthThunkActionTypes => async (dispatch) => {
  try {
    dispatch(setAuthLoading(true));
    dispatch(setAuthError(""));

    const { data } = await api.post("auth/signin", {
      email,
      password,
    });

    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    localStorage.setItem("token", data.token);

    dispatch({
      type: SIGN_IN,
      payload: data,
    });
  } catch (error) {
    dispatch(setAuthError(error.response.data.message));
  }
};

export const signup = (name: string, email: string, password: string): AuthThunkActionTypes => async (
  dispatch
) => {
  try {
    dispatch(setAuthLoading(true));
    dispatch(setAuthError(""));
    const { data } = await api.post("auth/signup", {
      name,
      email,
      password,
    });

    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    localStorage.setItem("token", data.token);

    dispatch({
      type: SIGN_UP,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data);

    if (Array.isArray(error.response.data.message)) {
      dispatch(setAuthError(error.response.data.message[0]));
    } else {
      dispatch(setAuthError(error.response.data.message));
    }
  }
};

export function signout(): AuthActionTypes {
  localStorage.clear();
  api.defaults.headers.common["Authorization"] = "";
  return {
    type: SIGN_OUT,
  };
}

export const getUserData = (): AuthThunkActionTypes => async (dispatch) => {
  try {
    const { data } = await api.get("me");

    dispatch({
      type: SET_USER,
      payload: {
        user: data,
      },
    });

    dispatch(setAppLanguage(data.settings.lang || "tr"));
    dispatch(setAppTheme(data.settings.theme || ""));
  } catch (error) {}
};

export const updateUserSettings = (settings: IUserSettings): AuthThunkActionTypes => async (dispatch) => {
  try {
    const { data } = await api.put("me/settings", settings);

    dispatch({
      type: UPDATE_USER,
      payload: {
        user: data,
      },
    });
  } catch (error) {}
};

const setAuthLoading = (loading: boolean): AuthActionTypes => {
  return { type: SET_AUTH_LOADING, payload: { loading } };
};

const setAuthError = (error: string): AuthActionTypes => {
  return {
    type: SET_AUTH_ERROR,
    payload: {
      error,
    },
  };
};
