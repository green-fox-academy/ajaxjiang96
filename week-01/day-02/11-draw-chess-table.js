
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

for (let i = 0; i < 8; i += 1) {
  let line = '';
  for (let j = 0; j < 8; j += 1) {
    if (i % 2 === 0 && j % 2 === 0) {
      line += '%';
    } else if (i % 2 === 0 && j % 2 !== 0) {
      line += ' ';
    } else if (i % 2 !== 0 && j % 2 === 0) {
      line += ' ';
    } else {
      line += '%';
    }
  }
  console.log(line);
}
