'use strict';

const Item = require('./Item');

class Toy extends Item {
  constructor(name, price, color) {
    super(name, price);
    this.color = color;
  }

  get fullName() {
    return `${this.color} ${this.name}`;
  }
}

module.exports = Toy;
