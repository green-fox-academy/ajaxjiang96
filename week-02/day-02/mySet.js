'use strict';

/* eslint-disable no-proto, func-names */
function MySet() { }

MySet.__proto__ = Array.__proto__;

MySet.prototype.add = function (value) {
  if (Array.prototype.indexOf.call(this, value) === -1) Array.prototype.push.call(this, value);
};

module.exports = MySet;
