'use strict';

class Aircraft {
  constructor(maxAmmo = 0, baseDamage = 0, priority = false) {
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.ammo = 0;
    this.priority = priority;
  }

  get hasAmmo() {
    return this.ammo !== 0;
  }

  get totalDmg() {
    return this.ammo * this.baseDamage;
  }

  useAmmo() {
    const { ammo } = this;
    this.ammo = 0;
    return ammo;
  }

  fight() {
    return this.useAmmo() * this.baseDamage;
  }

  refill(amount) {
    const ammoNeeded = this.maxAmmo - this.ammo;
    const toBeLoaded = Math.min(ammoNeeded, amount);
    this.ammo += toBeLoaded;
    return amount - toBeLoaded;
  }

  getType() {
    return this.constructor.name;
  }

  isPriority() {
    return this.priority;
  }

  getStatus() {
    return `Type ${this.getType()}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.totalDmg}`;
  }
}

module.exports = Aircraft;
