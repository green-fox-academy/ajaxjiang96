'use strict';

const Flower = require('./flower');
const Tree = require('./tree');

class Garden {
  constructor() {
    this.plants = [];
  }

  main() {
    this.plants.push(new Flower('yellow'));
    this.plants.push(new Flower('blue'));
    this.plants.push(new Tree('purple'));
    this.plants.push(new Tree('orange'));
    this.checkPlants();
    this.water(40);
    this.checkPlants();
    this.water(70);
    this.checkPlants();
  }

  water(amount) {
    console.log(`Watering with ${amount}`);
    const thirstyPlantNum = this.plants.filter((plant) => plant.needsWater).length;
    const avgWaterAmount = amount / thirstyPlantNum;
    this.plants.forEach((plant) => (plant.needsWater ? plant.water(avgWaterAmount) : null));
  }

  checkPlants() {
    this.plants.forEach((plant) => plant.checkWaterLevel());
    console.log();
  }
}

const garden = new Garden();
garden.main();
