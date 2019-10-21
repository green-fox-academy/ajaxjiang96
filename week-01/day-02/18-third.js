'use strict';

// - Create a variable named `magicNumbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `magicNumbers`

const magicNumbers = [...Array(4).keys()].map((x) => x * 2 + 1);

console.log(magicNumbers[2]);
