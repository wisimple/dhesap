import { AppState, AppActionTypes, SET_APP_LOADING } from './types';

const initialState: AppState = {
  loading: false,
};

export function appReducer(state = initialState, action: AppActionTypes): AppState {
  switch (action.type) {
    case SET_APP_LOADING: {
      const { loading } = action.payload;
      return { ...state, loading };
    }

    default:
      return state;
  }
}
