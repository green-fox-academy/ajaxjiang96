'use strict';

const Pirate = require('./pirate');

class Ship {
  constructor() {
    this.captain = undefined;
    this.crew = [];
  }

  fillShip() {
    this.captain = new Pirate();
    this.initialCrewCount = Math.ceil(Math.random() * 4);
    this.crew = [...Array(this.initialCrewCount)].map(() => new Pirate());
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
    this.crew.sort((crew1) => crew1.isDead);
    console.log(`${lostCrewNumber} crew died in this battle`);
    // console.log("crew", this.crew);
  }

  party() {
    this.captain.drinkSomeRum();
    this.captain.howsItGoingMate();
    this.crew.forEach((crewMember) => crewMember.drinkSomeRum() && crewMember.howsItGoingMate());
  }

  get score() {
    return Math.max(this.aliveCrewCount - this.captain.consumedBottles, 0);
  }

  get aliveCrewCount() {
    return this.crew.filter((x) => x.isAlive).length;
  }

  print() {
    const capState = `${this.captain.state}`.padEnd(15, ' ');
    const capDrink = `${this.captain.consumedBottles}`.padEnd(4, ' ');
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
