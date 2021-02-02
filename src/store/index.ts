import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, composeEnhancers(middleware));

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
