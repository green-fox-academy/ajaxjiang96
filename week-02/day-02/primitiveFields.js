'use strict';

function primitiveFields(obj) {
  return Object.entries(obj)
    .filter((entry) => Object(entry[1]) !== entry[1])
    .map((entry) => entry[0]);
}

console.log(primitiveFields({ x: 1, y: true, z: [] }));
