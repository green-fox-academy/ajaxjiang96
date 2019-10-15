
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

function printer(...params) {
  params.forEach((param) => console.log(param));
}

printer('hello', 'my', 'name', 'is', '...');
