'use strict';

function multiPurposeFunction(action) {
  if (action) {
    console.log(action(3));
  }
}

function exampleNonAnonymFunction(param) {
  return param * param;
}

function frameFunction() {
  // this function call shows an example,
  // but it is not using anonym functions
  multiPurposeFunction(exampleNonAnonymFunction);
  // write your code here\
  // eslint-disable-next-line prefer-arrow-callback,func-names
  multiPurposeFunction(function (param) {
    return param ** 2;
  });

  multiPurposeFunction((param) => param ** 2);
}

frameFunction();
