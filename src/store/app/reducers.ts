import { AppState, AppActionTypes, SET_APP_LOADING, SET_APP_THEME } from './types';

const initialState: AppState = {
  loading: false,
  theme: localStorage.getItem('theme') || '',
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

    default:
      return state;
  }
}
