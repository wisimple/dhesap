import { combineReducers } from 'redux';
import { accountReducer } from './account/reducers';
import { appReducer } from './app/reducers';
import { authReducer } from './auth/reducers';
import { categoryReducer } from './category/reducers';
import { transactionReducer } from './transaction/reducers';

export const rootReducer = combineReducers({
  appState: appReducer,
  authState: authReducer,
  categoryState: categoryReducer,
  accountState: accountReducer,
  transactionState: transactionReducer,
});
