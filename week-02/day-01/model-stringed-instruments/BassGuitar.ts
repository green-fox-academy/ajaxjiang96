"use strict";

import { StringedInstrument } from "./StringedInstrument";
export class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings = 4) {
    super("Bass Guitar", numberOfStrings);
  }
  public sound(): string {
    return "Duum-duum-duum";
  }
}
