import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './redux/Counter/reducer';
import tagReducer from './redux/Tag/reducer';

export default createStore(
  combineReducers({
    counterReducer,
    tagReducer,
  }),
  applyMiddleware(thunk),
  // eslint-disable-next-line no-underscore-dangle
);
