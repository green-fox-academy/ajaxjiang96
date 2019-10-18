class Plant {
  constructor(color, targetWaterLevel = 100, coefficient = 1.0) {
    this.color = color;
    this.targetWaterLevel = targetWaterLevel;
    this.coefficient = coefficient;
    this.currentWaterLevel = 0;
    this.name = 'Plant';
  }

  get needsWater() {
    return this.currentWaterLevel < this.targetWaterLevel;
  }

  water(amount) {
    // console.log(`The ${this.color} ${this.name} is getting ${amount} water`);
    this.currentWaterLevel = Math.min(
      this.coefficient * amount + this.currentWaterLevel,
      this.targetWaterLevel,
    );
  }

  checkWaterLevel() {
    console.log(
      this.needsWater
        ? `The ${this.color} ${this.name} needs water`
        : `The ${this.color} ${this.name} doesnt need water`,
    );
  }
}

module.exports = Plant;
