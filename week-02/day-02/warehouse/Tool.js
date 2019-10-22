'use strict';

const Item = require('./Item');

class Tool extends Item {
  constructor(name, price) {
    super(name, price);
    this.condition = 'good';
  }

  get fullName() {
    return `${this.condition} ${this.name}`;
  }
}

module.exports = Tool;
