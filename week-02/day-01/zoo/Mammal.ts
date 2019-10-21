"use strict";

import Animal from "./Animal";

export default class Mammal extends Animal {
  constructor(name: string) {
    super(name, "pushing miniature versions out");
  }
}
