import { AppState, AppActionTypes, SET_APP_LOADING, SET_APP_THEME, SET_APP_LANGUAGE } from './types';

const initialState: AppState = {
  loading: false,
  theme: localStorage.getItem('theme') || '',
  language: localStorage.getItem('language') || 'tr',
};

export function appReducer(state = initialState, action: AppActionTypes): AppState {
  switch (action.type) {
    case SET_APP_LOADING: {
      const { loading } = action.payload;
      return { ...state, loading };
    }

    case SET_APP_THEME: {
      const { theme } = action.payload;
      localStorage.setItem('theme', theme);
      return { ...state, theme };
    }

    case SET_APP_LANGUAGE: {
      const { language } = action.payload;
      localStorage.setItem('language', language);
      return { ...state, language };
    }

    default:
      return state;
  }
}
