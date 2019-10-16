'use strict';

// When saving this quote a disk error has occured. Please fix it.
// Add "always takes longer than" to between the words "It" and "you"

let quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.";

const iIt = quote.indexOf('It');
quote = `${quote.substr(0, iIt + 2)} always takes longer than${quote.substr(iIt + 2)}`;
console.log(quote);
