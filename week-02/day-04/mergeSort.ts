"use strict";

export function mergeSort(input: number[]): number[] {
  let toBeMerged: number[][] = [...input.map((n) => [n])];
  while (toBeMerged.length !== 1) {
    const partialMerged: number[][] = [];

    for (let i = 0; i < toBeMerged.length; i += 2) {
      if (i + 1 >= input.length) {
        partialMerged.push(toBeMerged[i]);
      } else {
        partialMerged.push(merge(toBeMerged[i], toBeMerged[i + 1]));
      }
    }
    toBeMerged = [...partialMerged];
  }
  return toBeMerged[0];
}

export function merge(...arrays: number[][]): number[] {
  const result = [];
  // console.log(arrays);
  while (arrays.some((array) => array && array.length)) {
    let minIndex = -1;
    let min = Infinity;
    arrays.forEach((array, i) => {
      // console.log(array, i);
      if (array && array.length) {
        if (array[0] < min) {
          min = array[0];
          minIndex = i;
        }
      }
    });
    if (minIndex >= 0) { result.push(arrays[minIndex].shift()); }
  }

  return result;
}
console.log(mergeSort([1, 12, 31, 34, 1, 5, 24, 51, 1, 34, 1434, 314, 124, 1421, 4, 356, 456, , 434, 2]));
