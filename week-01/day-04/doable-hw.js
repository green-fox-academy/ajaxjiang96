'use strict';

/* eslint-disable no-unused-vars */
const tree1 = {
  type: 'groot',
  leafColor: 'green',
  age: 5,
  sex: 'male',
};

const tree2 = {
  type: 'maple',
  leafColor: 'red',
  age: 500,
  sex: 'male',
};

const tree3 = {
  type: 'prunus',
  leafColor: 'green',
  age: 5,
  sex: 'male',
};

const tree4 = {
  type: 'Cotinus',
  leafColor: 'green',
  age: 15,
  sex: 'female',
};

const tree5 = {
  type: 'Ailanthus',
  leafColor: 'green',
  age: 18,
  sex: 'female',
};

class Tree {
  constructor(name, leafColor = 'green', age, sex) {
    this.name = name;
    this.leafColor = leafColor;
    this.age = age;
    this.sex = sex;
  }
}

const trees = [
  new Tree('groot', undefined, 5, 'male'),
  new Tree('maple', 'red', 500, 'male'),
  new Tree('prunus', undefined, 5, 'male'),
  new Tree('Cotinus', undefined, 15, 'female'),
  new Tree('Ailanthus', undefined, 18, 'female'),
];
