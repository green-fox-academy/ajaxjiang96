'use strict';

module.exports = class Pirate {
  constructor() {
    this.consumedBottles = 0;
    this.passedOut = false;
    this.isDead = false;
  }

  drinkSomeRum() {
    if (this.isDead) {
      console.log('he\'s dead');
    } else {
      this.consumedBottles += 1;
    }
  }

  howsItGoingMate() {
    if (this.isDead) {
      console.log('he\'s dead');
    } else if (this.consumedBottles <= 4) {
      console.log('Pour me anudder!');
    } else {
      console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
      this.passOut();
    }
  }

  passOut() {
    this.passedOut = true;
  }

  die() {
    this.isDead = true;
  }

  brawl(x) {
    if (!this.isDead) {
      const chance = Math.random();
      if (chance <= 1 / 3) {
        this.die();
      } else if (chance <= 2 / 3) {
        x.die();
      } else {
        this.passOut();
        x.passOut();
      }
    } else {
      console.log('He\'s dead');
    }
  }

  get alive() {
    return !this.isDead;
  }

  get state() {
    if (this.isDead) return 'dead';
    if (this.passedOut) return 'passed out';
    return 'alive and awake';
  }
};
