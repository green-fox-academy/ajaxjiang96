"use strict";

import IPrintable from "./IPrintable";

class Domino implements IPrintable {
  private values: number[];
  constructor(valueA: number, valueB: number) {
    this.values = [valueA, valueB];
  }

  public toString() {
    return `[${this.values[0]}|${this.values[1]}]`;
  }

  public printAllFields(): void {
    return console.log(this.toString());
  }
}

export default Domino;
