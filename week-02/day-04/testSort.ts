"use strict";

import { bubbleSort } from "./bubbleSort";
import { mergeSort } from "./mergeSort";

function randArrayGen(length) {
  return [...Array(length)].map(() => Math.ceil(Math.random() * length));
}

const array = randArrayGen(100000);
console.log(array);

console.time("mergeSort");
console.log(mergeSort(array).slice(0, 10), "...");
console.timeEnd("mergeSort");

console.time("bubbleSort");
console.log(bubbleSort(array).slice(0, 10), "...");
console.timeEnd("bubbleSort");
