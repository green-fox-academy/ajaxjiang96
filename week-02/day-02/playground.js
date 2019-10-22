/* eslint-disable func-names */
const Garden = require('./garden-classic');

function Playground(width, height) {
  Garden.call(this, width, height);
  this.toys = [];
}

Playground.prototype = Object.create(Garden.prototype);

Playground.prototype.constructor = Playground;
Playground.prototype.add = function (toy) {
  this.toys.push(toy);
};
