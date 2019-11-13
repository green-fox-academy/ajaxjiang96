import {
  SET, RESET, INCREASE, INCREASE_START, INCREASE_FINISHED, DECREASE,
} from './actionTypes';

const initialState = {
  amount: 0,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET:
      return {
        amount: action.amount,
      };
    case RESET:
      return {
        amount: 0,
      };
    case INCREASE:
      return {
        amount: state.amount + action.amount,
      };
    case INCREASE_FINISHED:
      return {
        ...state,
        loading: false,
        amount: state.amount + action.amount,
      };
    case INCREASE_START:
      return {
        ...state,
        loading: true,
      };
    case DECREASE:
      return {
        amount: state.amount - action.amount,
      };
    default:
      return state;
  }
};
