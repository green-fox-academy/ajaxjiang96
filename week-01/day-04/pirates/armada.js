const Ship = require('./ship');

class Armada {
  constructor() {
    this.ships = [];
  }

  fillShips() {
    this.ships = [...Array(Math.ceil(Math.random() * 50))]
      .map(() => new Ship());
    this.ships.forEach((ship) => ship.fillShip());
  }

  get hasShip() {
    return this.ships.length !== 0;
  }

  war(other) {
    while (this.hasShip && other.hasShip) {
      this.battle(other);
    }

    if (this.hasShip) {
      return true;
    }
    return false;
  }

  battle(other) {
    const ourShip = this.ships.pop(0);
    const theirShip = other.ships.pop(0);
    if (ourShip.battle(theirShip)) {
      this.ships.push(ourShip);
    } else {
      other.ships.push(theirShip);
    }
  }

  get size() {
    return this.ships.length;
  }
}

module.exports = Armada;
