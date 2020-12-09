import { createStore, combineReducers } from 'redux';
import changeModeReducer from './reducers/changeModeReducer';

const rootReducer = combineReducers({
	changeModeReducer,
});

const store = createStore(rootReducer);

export default store;
