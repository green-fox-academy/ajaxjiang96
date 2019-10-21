"use strict";

import Animal from "./Animal";

export default class Bird extends Animal {
  constructor(name: string) {
    super(name, "laying eggs");
  }
}
