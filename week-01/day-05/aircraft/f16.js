'use strict';

const AirCraft = require('./aircraft');

class F16 extends AirCraft {
  constructor() {
    super(8, 30, false);
  }
}

module.exports = F16;
