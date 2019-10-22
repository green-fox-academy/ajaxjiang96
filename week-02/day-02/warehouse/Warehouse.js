'use strict';

class Warehouse {
  constructor() {
    this.itemList = [];
  }

  addItem(item) {
    this.itemList.push(item);
  }

  printItemsOfType(type) {
    this.itemList.filter((item) => item instanceof type).forEach((item) => item.print());
  }
}

module.exports = Warehouse;
