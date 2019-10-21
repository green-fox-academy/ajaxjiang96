'use strict';

const Plant = require('./plant');

class Tree extends Plant {
  constructor(color) {
    super(color, 10, 0.40);
    this.name = 'Tree';
  }
}

module.exports = Tree;
