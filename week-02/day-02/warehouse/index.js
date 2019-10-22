'use strict';

const Item = require('./Item');
const Toy = require('./Toy');
const Tool = require('./Tool');
const Warehouse = require('./Warehouse');

// this snippet is for testing your code
const wh = new Warehouse();

wh.addItem(new Item('vase', 30));
wh.addItem(new Toy('pebble', undefined, 'grey'));
wh.addItem(new Toy('car', 10, 'blue'));
wh.addItem(new Tool('hammer', 25));

console.log('Items');
wh.printItemsOfType(Item);
console.log('Toys');
wh.printItemsOfType(Toy);
console.log('Tool');
wh.printItemsOfType(Tool);
