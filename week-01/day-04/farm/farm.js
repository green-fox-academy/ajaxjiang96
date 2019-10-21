'use strict';

const Animal = require('./animal');

/* Farm

Reuse your Animal class
Create a Farm class
it has list of Animals
it has slots which defines the number of free places for animals
breed() -> creates a new animal if there's place for it
slaughter() -> removes the least hungry animal
*/

class Farm {
  constructor(slots = 100) {
    this.animals = [];
    this.slots = slots;
  }

  breed() {
    if (this.slots) {
      this.slots -= 1;
      this.animals.push(new Animal());
    }
  }

  slaughter() {
    this.slots += 1;
    this.animals.sort((a, b) => b.hunger - a.hunger).pop();
  }
}
const farm = new Farm(3);

farm.breed();
farm.breed();
console.log(farm);
farm.breed();
console.log(farm);

farm.animals[1].play();
console.log(farm);
farm.slaughter();
console.log(farm);
farm.slaughter();
console.log(farm);
