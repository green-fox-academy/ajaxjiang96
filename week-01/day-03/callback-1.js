'use strict';

const mapWith = (array, callback) => {
  let output = [];
  // The mapWith() function should iterate over the given
  // array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  output = array.map(callback);
  return output;
};

const addOne = (number) => number + 1;

// Exercise 1:

console.log(mapWith([1, 2, 3], addOne));
// expected result: [2, 3, 4]

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = (word) => word.split('').filter((_, i) => i % 2 === 0).join('');
console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
