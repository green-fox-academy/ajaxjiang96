"use strict";

import { StringedInstrument } from "./StringedInstrument";
export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings = 6) {
    super("Electric Guitar", numberOfStrings);
  }
  public sound(): string {
    return "Twang";
  }
}
