export interface AppState {
  loading: boolean;
}

export const SET_APP_LOADING = 'SET_APP_LOADING';

interface SetAppLoading {
  type: typeof SET_APP_LOADING;
  payload: {
    loading: boolean;
  };
}

export type AppActionTypes = SetAppLoading;
