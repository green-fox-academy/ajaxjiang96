'use strict';

const Armada = require('./armada');

class WarApp {
  constructor() {
    this.a1 = new Armada();
    this.a2 = new Armada();
  }

  ready() {
    this.a1.fillShips();
    this.a2.fillShips();
    console.log(`Armada 1 has ${this.a1.size} ships!`);
    console.log(`Armada 2 has ${this.a2.size} ships!`);
    console.log('Let the war begin!');
  }

  main() {
    this.ready();
    const result = this.a1.war(this.a2);
    if (result) {
      this.a1.ships.forEach((s, i) => {
        console.log(`Here comes winner ship ${i + 1}`);
        s.print();
      });
      console.log('Armada 1 won the war!!!');
    } else {
      this.a2.ships.forEach((s, i) => {
        console.log(`Here comes winner ship ${i + 1}`);
        s.print();
      });
      console.log('Armada 2 won the war!!!');
    }
  }
}

module.exports = WarApp;
