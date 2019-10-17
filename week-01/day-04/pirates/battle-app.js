const Ship = require('./ship');

class BattleApp {
  main() {
    this.ship1 = new Ship();
    this.ship2 = new Ship();
    this.ship1.fillShip();
    this.ship2.fillShip();
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
