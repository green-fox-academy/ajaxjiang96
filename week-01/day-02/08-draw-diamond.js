'use strict';

const lineCount = 50;

// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

const maxWidth = 1 + ((Math.ceil(lineCount / 2) - 1) * 2);
const leftPadding = (maxWidth - 1) / 2;

for (let i = 1; i <= Math.ceil(lineCount / 2); i += 1) {
  let line = '';
  for (let j = 1; j <= leftPadding - i + 1; j += 1) {
    line += ' ';
  }
  line += '*';
  for (let k = 1; k < i; k += 1) {
    line += '**';
  }
  console.log(line);
}

for (let i = Math.floor(lineCount / 2); i >= 1; i -= 1) {
  let line = '';
  for (let j = 1; j <= leftPadding - i + 1; j += 1) {
    line += ' ';
  }
  line += '*';
  for (let k = 1; k < i; k += 1) {
    line += '**';
  }
  console.log(line);
}
