'use strict';

const promise = new Promise(((fulfill, reject) => {
  // Your solution here
  fulfill('I FIRED');
  reject(new Error('REJECTED!'));
}));

function onReject(error) {
  // Your solution here
  console.log(error.message);
}

// Your solution here
promise.then(console.log, onReject);
