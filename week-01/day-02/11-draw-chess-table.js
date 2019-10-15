'use strict'
// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

for (let i = 0; i < 8; i++) {
  let line = ''
  for (let j = 0; j < 8; j++) {
    if (i % 2 === 0 && j % 2 === 0) {
      line += '%'
    } else if (i % 2 === 0 && j % 2 !== 0) {
      line += ' '
    } else if (i % 2 !== 0 && j % 2 === 0) {
      line += ' '
    } else {
      line += '%'
    }
  }
  console.log(line)
}
