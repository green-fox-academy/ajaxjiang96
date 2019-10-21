"use strict";

export default abstract class Vehicle {
  public fuelAmount: number;
  public seatCount: number;
  public passengerCount: number;

  constructor(fuelAmount: number, seatCount: number) {
    this.fuelAmount = fuelAmount;
    this.seatCount = seatCount;
  }
}
