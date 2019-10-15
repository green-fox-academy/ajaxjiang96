
'use strict'

const lineCount = 6

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i = 0; i < lineCount; i++) {
  let line = ''
  for (let j = 0; j < lineCount; j++) {
    if (i === 0 || i === lineCount - 1) {
      line += '%'
    } else {
      if (j === 0 || j === lineCount - 1) {
        line += '%'
      } else {
        line += ' '
      }
    }
  }
  console.log(line)
}
