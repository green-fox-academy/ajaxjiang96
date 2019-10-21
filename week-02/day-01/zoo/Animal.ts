"use strict";

export default abstract class Animal {
  private name: string;
  private age: number;
  private gender: "male" | "female";
  private hp: number;
  private wayOfBreeding: string;
  constructor(name: string, wayOfBreeding: string) {
    this.name = name;
    this.wayOfBreeding = wayOfBreeding;

  }

  public breed(): string {
    return this.wayOfBreeding;
  }

  public getName(): string {
    return this.name;
  }
}
