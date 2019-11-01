'use strict';

const promise = Promise.reject(new Error('REJECTED!'));

// Your solution here
promise.then(console.log).catch(console.error);
