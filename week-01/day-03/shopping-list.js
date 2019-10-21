const products = {
  Milk: 1.07,
  Rice: 1.59,
  Eggs: 3.14,
  Cheese: 12.60,
  'Chicken Breasts': 9.40,
  Apples: 2.31,
  Tomato: 2.58,
  Potato: 1.75,
  Onion: 1.10,
};

const bobs = {
  Milk: 3,
  Rice: 2,
  Eggs: 2,
  Cheese: 1,
  'Chicken Breasts': 4,
  Apples: 1,
  Tomato: 2,
  Potato: 1,
};

const alices = {
  Rice: 1,
  Eggs: 5,
  'Chicken Breasts': 2,
  Apples: 1,
  Tomato: 10,
};

const totalCost = shoppingList => Object.keys(shoppingList)
  .map((item) => shoppingList[item] * products[item])
  .reduce((a, b) => a + b);
// How much does Bob pay?
console.log(totalCost(bobs));

// How much does Alice pay ?
console.log(totalCost(alices));

const whoBuysMore = (key) => (bobs[key] > alices[key] ? 'bob' : 'alice');
// Who buys more Rice ?
console.log(whoBuysMore('Rice'));
// Who buys more Potato ?
console.log(whoBuysMore('Potato'));
// Who buys more different products ?
console.log(Object.keys(bobs).length > Object.keys(alices).length ? 'bob' : 'alice');
// Who buys more products ? (piece)
const sum = (a, b) => a + b;
console.log(Object.values(bobs).reduce(sum) > Object.values(alices).reduce(sum) ? 'bob' : 'alice');
