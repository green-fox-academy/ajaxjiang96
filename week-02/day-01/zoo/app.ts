"use strict";

import Bird from "./Bird";
import Mammal from "./Mammal";
import Reptile from "./Reptile";

const reptile = new Reptile("Crocodile");
const mammal = new Mammal("Koala");
const bird = new Bird("Parrot");

// tslint:disable-next-block: no-console
console.log("How do you breed?");
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}.`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}.`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}.`);
