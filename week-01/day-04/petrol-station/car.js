'use strict';

module.exports = class Car {
  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;
  }

  refill(amount) {
    if (amount < this.capacity - this.gasAmount) {
      this.gasAmount += amount;
      return amount;
    }
    const filled = this.capacity - this.gasAmount;
    this.gasAmount = this.capacity;
    return filled;
  }
};
