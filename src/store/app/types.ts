export type ThemeTypes = string | '' | 'theme-dark';
export interface AppState {
  loading: boolean;
  theme: ThemeTypes;
}

export const SET_APP_LOADING = 'SET_APP_LOADING';
export const SET_APP_THEME = 'SET_APP_THEME';

interface SetAppLoading {
  type: typeof SET_APP_LOADING;
  payload: {
    loading: boolean;
  };
}

interface SetAppTheme {
  type: typeof SET_APP_THEME;
  payload: {
    theme: ThemeTypes;
  };
}

export type AppActionTypes = SetAppLoading | SetAppTheme;
