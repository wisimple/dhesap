import {
  AppActionTypes,
  LanguageTypes,
  SET_APP_LANGUAGE,
  SET_APP_LOADING,
  SET_APP_THEME,
  ThemeTypes,
} from './types';

export const setAppLoading = (loading: boolean): AppActionTypes => {
  return {
    type: SET_APP_LOADING,
    payload: {
      loading,
    },
  };
};

export const setAppTheme = (theme: ThemeTypes): AppActionTypes => {
  return {
    type: SET_APP_THEME,
    payload: {
      theme,
    },
  };
};

export const setAppLanguage = (language: LanguageTypes): AppActionTypes => {
  return {
    type: SET_APP_LANGUAGE,
    payload: {
      language,
    },
  };
};
