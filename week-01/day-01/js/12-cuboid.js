'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let SurfaceArea = (w, l, h) => {
  return (w * l + l * h + h * w) * 2
}

let Volume = (w, l, h) => {
  return (w * l * h)
}

let width = 2
let height = 3
let length = 4

console.log(`Surface Area: ${SurfaceArea(width, length, height)}
Volume: ${Volume(width, length, height)}`)