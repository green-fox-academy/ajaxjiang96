
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

const SurfaceArea = (w, l, h) => (w * l + l * h + h * w) * 2;

const Volume = (w, l, h) => (w * l * h);

const width = 2;
const height = 3;
const length = 4;

console.log(`Surface Area: ${SurfaceArea(width, length, height)}
Volume: ${Volume(width, length, height)}`);
