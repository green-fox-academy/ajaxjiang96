'use strict';

const Plant = require('./plant');

class Flower extends Plant {
  constructor(color) {
    super(color, 5, 0.75);
    this.name = 'Flower';
  }
}

module.exports = Flower;
