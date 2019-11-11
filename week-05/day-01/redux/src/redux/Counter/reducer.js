import {
  SET, RESET, INCREASE, DECREASE,
} from './actionTypes';

const initialState = {
  amount: 0,
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
    case DECREASE:
      return {
        amount: state.amount - action.amount,
      };
    default:
      return state;
  }
};
