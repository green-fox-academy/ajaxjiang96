const Pirate = require('./pirate');

class Ship {
  constructor() {
    this.captain = undefined;
    this.crew = [];
  }

  fillShip() {
    this.captain = new Pirate();
    this.crew = [...Array(Math.floor(Math.random() * 100))].map(() => new Pirate());
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
    const lostCrewNumber = Math.random() * this.aliveCount;
    for (let i = 0; i < lostCrewNumber; i += 1) {
      this.crew.pop();
    }
  }

  party() {
    this.captain.drinkSomeRum();
    this.crew = this.crew.forEach((c) => c.drinkSomeRum());
  }

  get score() {
    return this.aliveCrewCount - this.captain.drinks;
  }

  get aliveCrewCount() {
    return this.crew.filter((x) => x.alive).length;
  }

  print() {
    const capState = `${this.captain.state}`.padEnd(15, ' ');
    const aliveCount = `${this.aliveCrewCount}`.padEnd(3, ' ');
    console.log(
      `                   +---------+  +
  Ship             |         +--+--+
                   |         | |+|
                   |        ++------+
                   +--------+       |
+-Captain----------+-----+  |       |    +-Crew-------+
| Drinks: ${this.captain.drinks}              |  |       |    | Alive: ${aliveCount} |
| State : ${capState}|  +-------+    +------------+
+-----------------------++  |       |
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
