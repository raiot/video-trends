import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './middleware/root.saga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);