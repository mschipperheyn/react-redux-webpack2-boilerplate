'use strict';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from 'dev/redux-dev-tools';
import logger from 'dev/logger';

const isProduction = process.env.NODE_ENV === 'production';

export default function configureStore(initialState) {

    let enhancer;

    if (isProduction) {
      // In production adding only thunk middleware
      const middleware = applyMiddleware(thunkMiddleware);

      enhancer = compose(middleware);

    } else {
      // In development mode beside thunk, logger and DevTools are added

      const middleware = applyMiddleware(thunkMiddleware, logger);

      enhancer = compose(
        middleware,
        DevTools.instrument()
      );
    }

    const store = createStore(rootReducer, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('./reducers', () =>
          store.replaceReducer(require('./reducers').default)
        );
    }

    return store;
}
