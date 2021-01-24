import { combineReducers } from 'redux';
import { accountReducer } from './account/reducers';
import { authReducer } from './auth/reducers';
import { categoryReducer } from './category/reducers';

export const rootReducer = combineReducers({
  authState: authReducer,
  categoryState: categoryReducer,
  accountState: accountReducer,
});
