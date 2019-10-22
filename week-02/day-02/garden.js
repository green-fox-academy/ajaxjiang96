export default class Garden {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  area() {
    return this.width * this.length;
  }

  circumference() {
    return (this.width + this.length) * 2;
  }

  efficiency() {
    return this.area() / this.circumference();
  }
}
