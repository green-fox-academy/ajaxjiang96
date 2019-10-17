/* eslint-disable class-methods-use-this */
// const Teacher = require('./teacher');

module.exports = class Student {
  question(teacher) {
    this.learning = true;
    teacher.answer();
  }

  learn() {
    console.log('the student is learning something new');
  }
};
