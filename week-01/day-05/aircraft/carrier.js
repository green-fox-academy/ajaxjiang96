const F16 = require('./f16');
const F35 = require('./f35');

class Carrier {
  constructor(ammo = 0, hp = 100) {
    this.aircrafts = [];
    this.ammo = ammo;
    this.hp = hp;
  }

  add(aircraft) {
    this.aircrafts.push(aircraft);
    this.aircrafts.sort((a) => !a.isPriority());
  }

  get totalDmg() {
    return this.aircrafts.map((a) => a.totalDmg).reduce((a, b) => a + b);
  }

  fill() {
    this.aircrafts.forEach((a) => { this.ammo = a.refill(this.ammo); });
  }

  fight(other) {
    this.takeDmg(other.aircrafts.map((a) => a.fight()).reduce((a, b) => a + b));
    other.takeDmg(this.aircrafts.map((a) => a.fight()).reduce((a, b) => a + b));
    this.fill();
    other.fill();
  }

  takeDmg(dmg) {
    this.hp -= dmg;
  }

  getStatus() {
    console.log(this.hp <= 0
      ? 'It\'s dead Jim : ('
      : `HP: ${this.hp}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammo}, Total damage: ${this.totalDmg}
Aircrafts:`);
    this.aircrafts.forEach((a) => a.getStatus());
  }
}

module.exports = Carrier;

const a = new Carrier(2300, 5000);
a.add(new F16());
a.add(new F16());
a.add(new F35());
a.add(new F35());
a.add(new F35());
a.getStatus();
a.fill();
a.getStatus();

const b = new Carrier(2300, 5000);
b.add(new F16());
b.add(new F16());
b.add(new F35());
b.add(new F35());
b.add(new F35());

a.fight(b);
a.getStatus();
a.fight(b);
a.getStatus();
a.fight(b);
a.getStatus();
a.fight(b);
a.getStatus();
a.fight(b);
a.getStatus();
a.fight(b);
a.getStatus();
a.fight(b);
a.getStatus();
a.fight(b);
a.getStatus();
