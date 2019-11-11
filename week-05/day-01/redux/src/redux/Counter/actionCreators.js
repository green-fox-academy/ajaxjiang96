import {
  SET, RESET, INCREASE, DECREASE,
} from './actionTypes';

export const set = (amount = 0) => ({
  type: SET,
  amount,
});

export const reset = () => ({
  type: RESET,
});

export const increase = (amount = 1) => ({
  type: INCREASE,
  amount,
});

export const decrease = (amount = 1) => ({
  type: DECREASE,
  amount,
});
