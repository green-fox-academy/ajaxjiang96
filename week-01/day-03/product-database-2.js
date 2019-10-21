'use strict';

const products = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};

// Which products cost less than 201? (just the name)
console.log(Object.keys(products).filter((product) => products[product] < 201));

// Which products cost more than 150 ? (name + price)
const expensiveOnes = Object.keys(products).filter((product) => products[product] > 150);
expensiveOnes.forEach((x) => console.log(`${x} ${products[x]}`));
