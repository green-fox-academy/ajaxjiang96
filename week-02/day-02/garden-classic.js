'use strict';

/* eslint-disable func-names */
function Garden(width, length) {
  this.width = width;
  this.length = length;
}

Garden.prototype.area = function () {
  return this.width * this.length;
};

Garden.prototype.circumference = function () {
  return (this.width + this.length) * 2;
};

Garden.prototype.efficiency = function () {
  return this.area() / this.circumference();
};

module.exports = Garden;
