'use strict';

const AirCraft = require('./aircraft');

class F35 extends AirCraft {
  constructor() {
    super(12, 50, true);
  }
}

module.exports = F35;
