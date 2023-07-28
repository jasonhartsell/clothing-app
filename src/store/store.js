import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

// root reducer

import { rootReducer } from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger, 
    sagaMiddleware
].filter(Boolean);

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }).concat(middleWares)
  });

sagaMiddleware.run(rootSaga);