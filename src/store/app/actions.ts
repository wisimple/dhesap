import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';
import { AppActionTypes, SET_APP_LOADING } from './types';

type TActionType = ThunkAction<void, RootState, unknown, AppActionTypes>;

export const setAppLoading = (loading: boolean): AppActionTypes => {
  return {
    type: SET_APP_LOADING,
    payload: {
      loading,
    },
  };
};
