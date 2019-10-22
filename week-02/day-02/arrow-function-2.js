'use strict';

function multiPurposeFunction(action) {
  if (action) {
    console.log(action('John', 'Smith'));
    console.log(action('', 'Bond'));
  }
}

function frameFunction() {
  // Write your code here
  multiPurposeFunction((...params) => (params[0] ? params.join(' ') : params[1]));
  // eslint-disable-next-line prefer-arrow-callback,func-names
  multiPurposeFunction(function (firstName, lastName) {
    return firstName[0] ? `${firstName} ${lastName}` : lastName;
  });
}

frameFunction();
