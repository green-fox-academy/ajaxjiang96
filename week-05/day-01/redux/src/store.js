import { createStore, combineReducers } from 'redux';
import counterReducer from './redux/Counter/reducer';
import tagReducer from './redux/Tag/reducer';

export default createStore(combineReducers({
  counterReducer,
  tagReducer,
}));
