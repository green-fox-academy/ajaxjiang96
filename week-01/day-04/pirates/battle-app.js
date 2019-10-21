'use strict';

const Ship = require('./ship');

class BattleApp {
  constructor() {
    this.ship1 = new Ship();
    this.ship2 = new Ship();
    this.ship1.fillShip();
    this.ship2.fillShip();
  }

  main() {
    this.printShips();
    while (this.ship1.aliveCrewCount && this.ship2.aliveCrewCount) {
      this.battle();
    }
    return console.log(this.ship1.aliveCrewCount ? 'Final winner: Ship 1!' : 'Final winner: Ship 2!');
  }

  battle() {
    console.log('========================');
    console.log('Let the battle begin!');
    const hasShip1Won = this.ship1.battle(this.ship2);
    console.log(hasShip1Won ? 'Ship 1 won!' : 'Ship 2 won!');
    this.printShips();
  }

  printShips() {
    console.log('========================');
    console.log('Here comes Ship 1 !!!!!!');
    this.ship1.print();
    console.log('========================');
    console.log('Here comes Ship 2 !!!!!!');
    this.ship2.print();
  }
}

module.exports = BattleApp;
