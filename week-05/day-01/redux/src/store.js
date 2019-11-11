import { createStore, combineReducers } from 'redux';
import counterReducer from './redux/Counter/reducer';
import tagReducer from './redux/Tag/reducer';

export default createStore(
  combineReducers({
    counterReducer,
    tagReducer,
  }),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
