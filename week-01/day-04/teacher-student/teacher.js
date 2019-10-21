'use strict';

/* eslint-disable class-methods-use-this */
module.exports = class Teacher {
  teach(student) {
    this.answering = true;
    student.learn();
  }

  answer() {
    console.log('the teacher is answering a question');
  }
};
