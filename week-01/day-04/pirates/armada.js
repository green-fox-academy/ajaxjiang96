'use strict';

const Ship = require('./ship');

class Armada {
  constructor(name = 'Armada') {
    this.name = name;
    this.ships = [];
  }

  fillShips() {
    this.shipCount = Math.ceil(Math.random() * 50);
    this.ships = [...Array(this.shipCount)]
      .map(() => new Ship());
    this.ships.forEach((ship) => ship.fillShip());
  }

  returnShip(ship) {
    this.ships.push(ship);
  }

  get hasShip() {
    return this.ships.length !== 0;
  }

  war(other) {
    while (this.hasShip && other.hasShip) {
      this.battle(other);
    }
    return this.hasShip;
  }

  battle(other) {
    const ourShip = this.ships.pop(0);
    const theirShip = other.ships.pop(0);
    if (ourShip.battle(theirShip)) {
      this.returnShip(ourShip);
    } else {
      other.returnShip(theirShip);
    }
  }

  get size() {
    return this.ships.length;
  }
}

module.exports = Armada;
