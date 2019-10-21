import IFlyable from "./Flyable";

import Animal from "../zoo/Animal";

export default class Bird extends Animal implements IFlyable {
  private altitude: number;
  private distance: number;
  constructor() {
    super("Bird", "laying eggs");
    this.altitude = 0;
    this.distance = 0;
  }
  public land(): void {
    this.altitude = 0;
  }
  public fly(): void {
    this.distance++;
  }
  public takeOff(): void {
    this.altitude++;
  }
}
