'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

const printAfter = (txt, time) => setTimeout(() => {
  console.log(txt);
}, time);

printAfter('apple', 0);
printAfter('pear', 1000);
printAfter('melon', 3000);
printAfter('grapes', 5000);
