'use strict';

const Person = require('./person');

class Mentor extends Person {
  constructor(name = 'Jane Doe', age = 30, gender = 'female', level = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  // eslint-disable-next-line class-methods-use-this
  getGoal() {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
}

// eslint-disable-next-line no-unused-vars
const jane = new Mentor('Jane Doe', 30, 'female', 'intermediate');

module.exports = Mentor;
