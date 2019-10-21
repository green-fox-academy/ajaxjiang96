'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(n) {
  if (n <= 0) return 0;
  return n + sum(n - 1);
}

console.log(sum(6));
