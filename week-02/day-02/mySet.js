'use strict';

/* eslint-disable no-proto, func-names */
function MySet(size = 0) {
  Array.call(this, size);
}

MySet.prototype = Object.create(Array.prototype);
MySet.prototype.constructor = MySet;
MySet.prototype.add = function (value) {
  if (Array.prototype.indexOf.call(this, value) === -1) Array.prototype.push.call(this, value);
};
MySet.prototype.includes = function (value) {
  return this.indexOf(value) !== -1;
};
module.exports = MySet;
