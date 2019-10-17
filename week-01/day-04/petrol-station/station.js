const Car = require('./car');

class Station {
  constructor() {
    this.gasAmount = 10;
  }

  refill(car) {
    this.gasAmount -= car.refill(this.gasAmount);
  }
}


const station = new Station();
const car = new Car();
console.log(station);
console.log(car);
console.log('refilling >>>>>');
station.refill(car);
console.log(station);
console.log(car);
