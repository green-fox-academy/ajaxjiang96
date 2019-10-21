'use strict';

const lineCount = 10;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

const maxWidth = 1 + ((lineCount - 1) * 2);
const leftPadding = (maxWidth - 1) / 2;

for (let i = 1; i <= lineCount; i += 1) {
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
