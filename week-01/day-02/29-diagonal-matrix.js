
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

const result = [];
for (let i = 0; i < 4; i += 1) {
  result[i] = [];
  for (let j = 0; j < 4; j += 1) {
    result[i].push(i === 4 - j - 1 ? 1 : 0);
  }
}
console.table(result);
