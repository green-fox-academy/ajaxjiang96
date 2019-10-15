
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(n) {
  if (n === 1) return n;
  return n * factorio(n - 1);
}

console.log(factorio(4));
