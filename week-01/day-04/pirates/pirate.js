module.exports = class Pirate {
  constructor() {
    this.drinks = 0;
    this.passedOut = false;
    this.dead = false;
  }

  drinkSomeRum() {
    if (this.dead) {
      console.log('he\'s dead');
    } else {
      this.drinks += 1;
    }
  }

  howsItGoingMate() {
    if (this.dead) {
      console.log('he\'s dead');
    } else if (this.drinks <= 4) {
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
    this.dead = true;
  }

  brawl(x) {
    if (!this.dead) {
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
    return !this.dead;
  }

  get state() {
    if (this.dead) return 'dead';
    if (this.passedOut) return 'passed out';
    return 'alive and awake';
  }
};
