"use strict";

import { StringedInstrument } from "./StringedInstrument";
export class Violin extends StringedInstrument {
  constructor(numberOfStrings = 4) {
    super("Violin", numberOfStrings);
  }
  public sound(): string {
    return "Screech";
  }
}
