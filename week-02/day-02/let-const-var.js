'use strict';

module.exports = {
  avg(nums) {
    let sum = 0;
    const { length } = nums;
    for (let i = 0; i < length; i += 1) {
      sum += nums[i];
    }
    return sum / length;
  },
};
