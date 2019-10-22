'use strict';

class Item {
  constructor(name, price = 1) {
    this.name = name;
    this.price = price;
  }

  get fullName() {
    return this.name;
  }

  print() {
    console.log(`${this.fullName} - ${this.price}`);
  }
}

module.exports = Item;
