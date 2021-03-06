"use strict";

export function bubbleSort(input: number[]): number[] {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length - i - 1; j++) {
      if (input[j] > input[j + 1]) {
        [input[j], input[j + 1]] = [input[j + 1], input[j]];
      }
    }
  }
  return input;
}
