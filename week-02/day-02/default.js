/* eslint-disable no-param-reassign */
// default values before ES6
function coffee(sugar = false, milk = false) {
  if (sugar && milk) {
    return 'coffee with sugar and with milk';
  }
  if (sugar) {
    return 'coffee with sugar';
  }
  if (milk) {
    return 'coffee with milk';
  }
  return 'coffee';
}

module.exports = {
  coffee,
};
