'use strict';

const data = [5, 1, 2, 9, 7, 3, 8];

const max = (nums) => {
  let localMax = -Infinity;
  // eslint-disable-next-line no-restricted-syntax, guard-for-in, prefer-const
  for (let num of nums) {
    localMax = num > localMax ? num : localMax;
  }
  return localMax;
};

module.exports = {
  max,
};
