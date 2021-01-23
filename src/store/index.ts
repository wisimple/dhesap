import { createStore, applyMiddleware, compose, Action } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import { rootReducer } from './reducers';
import { createLogger } from 'redux-logger';

// export const store = createStore(
//   rootReducer,
//   (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
// );

const logger = createLogger({
  collapsed: true,
});

// const composeEnhancers =
//   ((window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || compose;

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, middleware);

export type RootState = ReturnType<typeof rootReducer>;
