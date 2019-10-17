module.exports = class Car {
  constructor() {
    this.gasAmout = 0;
    this.capacity = 100;
  }

  refill(amount) {
    if (amount < this.capacity - this.gasAmout) {
      this.gasAmout += amount;
      return amount;
    }
    const filled = this.capacity - this.gasAmout;
    this.gasAmout = this.capacity;
    return filled;
  }
};
