// Create a map with the following key-value pairs.
const products = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};

// How much is the fish?
console.log(products.Fish);
// What is the most expensive product?
let mostExpensive = '';
let maxPrice = 0;
Object.keys(products).forEach((product) => {
  if (products[product] > maxPrice) {
    mostExpensive = product;
    maxPrice = products[product];
  }
});

console.log(mostExpensive);

// What is the average price?
console.log(
  Object.values(products)
    .reduce((prev, curr) => prev + curr)
  / Object.values(products).length,
);

// How many products' price is below 300?
let count = 0;
Object.values(products).forEach((x) => { count += x < 300 ? 1 : 0; });
console.log(count);

// Is there anything we can buy for exactly 125?
console.log(Object.values(products).some((x) => x === 125));

// What is the cheapest product?
let leastExpensive = '';
let minPrice = Infinity;
Object.keys(products).forEach((product) => {
  if (products[product] < minPrice) {
    leastExpensive = product;
    minPrice = products[product];
  }
});
console.log(leastExpensive);
