const Pirate = require('./pirate');

class Ship {
  constructor() {
    this.captain = undefined;
    this.crew = [];
  }

  fillShip() {
    this.captain = new Pirate();
    this.crew = [...Array(Math.ceil(Math.random() * 4))].map(() => new Pirate());
    this.initialCrewCount = this.crew.length;
  }

  battle(otherShip) {
    if (this.score > otherShip.score) {
      this.party();
      otherShip.lose();
      return true;
    }
    this.lose();
    otherShip.party();
    return false;
  }

  lose() {
    const lostCrewNumber = Math.ceil(Math.random() * this.aliveCrewCount);
    for (let i = 0; i < lostCrewNumber; i += 1) {
      this.crew[i].die();
    }
    console.log(`${lostCrewNumber} crew died in this battle`);
    // console.log("crew", this.crew);
  }

  party() {
    this.captain.drinkSomeRum();
    this.captain.howsItGoingMate();
    this.crew.forEach((c) => c.drinkSomeRum() && c.howsItGoingMate());
  }

  get score() {
    return this.aliveCrewCount - this.captain.drinks;
  }

  get aliveCrewCount() {
    return this.crew ? this.crew.filter((x) => x.alive).length : 0;
  }

  print() {
    const capState = `${this.captain.state}`.padEnd(15, ' ');
    // const capDrinkRounded = Math.round(this.captain.drinks * 100) / 100;
    const capDrink = `${this.captain.drinks}`.padEnd(4, ' ');
    const aliveCount = `${this.aliveCrewCount}`.padEnd(3, ' ');
    const initCrew = `${this.initialCrewCount}`.padEnd(3, ' ');
    console.log(
      `                   +---------+  +
  Ship             |         +--+--+
                   |         | |+|
                   |        ++------+
                   +--------+       |
+-Captain----------+------+ |       |    +-Crew------------+
| Drinks: ${capDrink}            | |       |    | Alive: ${aliveCount}/ ${initCrew} |
| State : ${capState} | +-------+    +-----------------+
+-------------------------+ |       |
      o            |        |       |  +-------+
      --           |        |       |  |       |
      ||           +---+-+--+--+-+--++-+-----------+
 +--------------+      | |     | |   |      +-------+
 \\               \\     | |     | |   |     /        /
  \\               +----+-+-----+-+---+-----+       /
   \\                                              /
    \\                                            /
     \\                                          |
      +-----------------------------------------+
       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
`,
    );
  }
}

// const s = new Ship();
// s.fillShip();
// // console.log(s);
// s.print();

module.exports = Ship;
