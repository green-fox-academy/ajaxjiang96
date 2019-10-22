'use strict';

const { vectorInitializer } = require('./vector');

const vectors = [
  [1, 2, 3],
  [],
  [2, 3],
  [-1],
  [6, 7, 8, 9],
];

console.log(vectors.map((vector) => vectorInitializer(...vector)));
