'use strict';

const promise = new Promise(((resolve) => {
  // Your solution here
  setTimeout(() => {
    resolve('FULFILLED!');
  }, 300);
}));

// Your solution here
promise.then(console.log);
