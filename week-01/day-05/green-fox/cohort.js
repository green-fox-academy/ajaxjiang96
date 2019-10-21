'use strict';

class Cohort {
  constructor(name) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(Student) {
    this.students.push(Student);
  }

  addMentor(Mentor) {
    this.mentors.push(Mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

module.exports = Cohort;
