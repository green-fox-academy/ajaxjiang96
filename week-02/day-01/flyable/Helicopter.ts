"use strict";

import IFlyable from "./Flyable";
import Vehicle from "./Vehicle";

export default class Helicopter extends Vehicle implements IFlyable {
  private altitude: number;
  private distance: number;
  constructor() {
    super(100, 5);
    this.altitude = 0;
    this.distance = 0;
  }
  public land(): void {
    this.altitude = 0;
  }
  public fly(): void {
    if (this.fuelAmount > 0) {
      this.distance++;
      this.fuelAmount--;
    }
  }

  public get landed(): boolean {
    return this.altitude === 0;
  }

  public takeOff(): void {
    if (this.landed) {
      this.altitude++;
    }
  }
}
