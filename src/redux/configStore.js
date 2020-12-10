import { createStore, combineReducers, applyMiddleware } from 'redux';
import changeModeReducer from './reducers/changeModeReducer';

/* Setup Middleware Saga */
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
	changeModeReducer,
});

const store = createStore(rootReducer, applyMiddleware(middleWareSaga));

/* Call Saga */

middleWareSaga.run(rootSaga);

export default store;
