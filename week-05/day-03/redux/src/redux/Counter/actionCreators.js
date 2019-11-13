import {
  SET, RESET, INCREASE, INCREASE_START, INCREASE_FINISHED, DECREASE,
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

export const increaseStart = () => ({
  type: INCREASE_START,
});

export const increaseFinished = (amount, delay) => ({
  type: INCREASE_FINISHED,
  amount,
  delay,
});


export const delayedIncrease = (amount = 1, delay = 0) => (dispatch) => {
  dispatch(increaseStart());
  setTimeout(() => {
    dispatch(increaseFinished(amount));
  }, delay);
};

export const decrease = (amount = 1) => ({
  type: DECREASE,
  amount,
});
