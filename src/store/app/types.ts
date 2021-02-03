import { IUserSettings } from 'models/User';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

export type ThemeTypes = string | '' | 'theme-dark';
export type LanguageTypes = string | 'tr' | 'en';
export interface AppState {
  loading: boolean;
  theme: ThemeTypes;
  language: LanguageTypes;
  defaultCurrency: string;
}

export const SET_APP_LOADING = 'SET_APP_LOADING';
export const SET_APP_THEME = 'SET_APP_THEME';
export const SET_APP_LANGUAGE = 'SET_APP_LANGUAGE';

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
interface SetAppLanguage {
  type: typeof SET_APP_LANGUAGE;
  payload: {
    language: LanguageTypes;
  };
}

export type AppActionTypes = SetAppLoading | SetAppTheme | SetAppLanguage;

export type AppThunkActionTypes = ThunkAction<void, RootState, unknown, AppActionTypes>;
