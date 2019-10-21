"use strict";

import { Instrument } from "./Instrument";
export abstract class StringedInstrument extends Instrument {
  private numberOfStrings: number;
  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }
  public abstract sound(): string;
  public play(): void {
    // tslint:disable-next-line: no-console
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }
}
