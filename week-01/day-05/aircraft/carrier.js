'use strict';

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
    if (this.ammo > 0) {
      this.aircrafts.forEach((a) => { this.ammo = a.refill(this.ammo); });
    } else {
      throw new Error('Out of Ammo');
    }
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
    return this.hp <= 0
      ? 'It\'s dead Jim :('
      : `HP: ${this.hp}, Aircraft count: ${this.aircrafts.length}, Ammo Storage: ${this.ammo}, Total damage: ${this.totalDmg}
Aircrafts:${this.aircrafts.map((a) => a.getStatus()).join('\n')}`;
  }
}

module.exports = Carrier;
