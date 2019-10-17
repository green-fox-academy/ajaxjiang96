/* Teacher Student

Create Student and Teacher classes
Student
learn() -> prints the student is learning something new
question(teacher) -> calls the teachers answer method
Teacher
teach(student) -> calls the students learn method
answer() -> prints the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method
*/
// const Student = require('./student');

const Student = require('./student');
const Teacher = require('./teacher');

class StudentAndTeacher {
  constructor() {
    this.student = new Student();
    this.teacher = new Teacher();
  }

  main() {
    this.student.question(this.teacher);
    this.teacher.teach(this.student);
  }
}

const snt = new StudentAndTeacher();
snt.main();
