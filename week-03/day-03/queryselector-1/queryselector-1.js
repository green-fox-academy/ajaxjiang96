'use strict';

/* eslint-disable no-alert */
/* eslint-disable no-restricted-syntax */
// 1. store the element that says 'The King' in the 'king' variable.
// console.log it.

const king = document.querySelector('#b325');
console.log(king);

// 2. store 'The Businessman' and 'The Lamplighter'
// in the 'businessLamp' variable.
// console.log each of them.

const businessLamp = document.querySelectorAll('.asteroid.big');
for (const element of businessLamp) {
  console.log(element);
}

// 3. store 'The King' and 'The Conceited Man'
// in the 'conceitedKing' variable.
// alert them one by one.

const container = document.querySelector('.container');
const conceitedKing = container.querySelectorAll('.asteroid');
for (const element of conceitedKing) {
  alert(element);
}

// 4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
// in the 'noBusiness' variable.
// console.log each of them.

const noBusiness = document.querySelectorAll('div');

for (const element of noBusiness) {
  console.log(element);
}
