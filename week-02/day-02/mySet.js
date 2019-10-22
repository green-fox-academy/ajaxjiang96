'use strict';

/* eslint-disable no-proto, func-names */
function MySet(size = 0) {
  Array.call(this, size);
}

MySet.prototype = Object.create(Array.prototype);
MySet.prototype.constructor = MySet;
MySet.prototype.add = function (value) {
  if (this.indexOf(value) === -1) this.push(value);
};
MySet.prototype.includes = function (value) {
  return this.indexOf(value) !== -1;
};
module.exports = MySet;
