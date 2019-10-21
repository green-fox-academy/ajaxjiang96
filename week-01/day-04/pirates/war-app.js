'use strict';

const Armada = require('./armada');

class WarApp {
  constructor() {
    this.armada1 = new Armada('Armada 1');
    this.armada2 = new Armada('Armada 2');
  }

  initWar() {
    this.armada1.fillShips();
    this.armada2.fillShips();
    console.log(`Armada 1 has ${this.armada1.size} ships!`);
    console.log(`Armada 2 has ${this.armada2.size} ships!`);
    console.log('Let the war begin!');
  }

  main() {
    this.initWar();
    const winner = this.armada1.war(this.armada2) ? this.armada1 : this.armada2;
    this.printResult(winner);
  }

  // eslint-disable-next-line class-methods-use-this
  printResult(armada) {
    armada.ships.forEach((s, i) => {
      console.log(`Here comes winner ship ${i + 1}`);
      s.print();
    });
    console.log(`${armada.name} won the war!!!`);
  }
}

module.exports = WarApp;
