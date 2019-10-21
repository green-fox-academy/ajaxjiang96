'use strict';

const Ship = require('./ship');

class BattleApp {
  constructor() {
    this.ship1 = new Ship();
    this.ship2 = new Ship();
    this.ship1.fillShip();
    this.ship2.fillShip();
    this.printShips();
  }

  main() {
    while (this.ship1.aliveCrewCount && this.ship2.aliveCrewCount) {
      this.battle();
    }
    if (this.ship1.aliveCrewCount) return console.log('Final winner: Ship 1!');
    return console.log('Final winner: Ship 2!');
  }

  battle() {
    console.log('========================');
    console.log('Let the bettle begin!');
    const result = this.ship1.battle(this.ship2);
    if (result) {
      console.log('Ship 1 won!');
    } else {
      console.log('Ship 2 won!');
    }
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

const battle = new BattleApp();
battle.main();
