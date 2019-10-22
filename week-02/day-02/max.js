'use strict';

// Write a function that takes an object which has numbers on it's values.
// It represents the result of a word count on a text.
// The function should return the word with the highest count.

function myArgMax(obj) {
  let tempMax = -Infinity;
  let tempMaxKey = '';
  // eslint-disable-next-line no-restricted-syntax, prefer-const
  for (let entry of Object.entries(obj)) {
    if (entry[1] > tempMax) {
      [tempMaxKey, tempMax] = entry;
    }
  }

  return tempMaxKey;
}

module.exports = { myArgMax };
