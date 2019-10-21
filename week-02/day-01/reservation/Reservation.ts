"use strict";

import IPrintable from "../printable/IPrintable";

interface IReservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

const DOW = [
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
  "SUN",
];

export default class Reservation implements IReservationy, IPrintable {
  private dow: string;
  private code: string;

  constructor() {
    this.dow = this.getDowBooking();
    this.code = this.getCodeBooking();
  }
  public getDowBooking(): string {
    const randDow = Math.floor(Math.random() * DOW.length);
    return DOW[randDow];
  }
  public getCodeBooking(): string {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  }

  public printAllFields(): void {
    console.log(`Booking# ${this.code} for ${this.dow}`);
  }
}

const reservations = new Array<Reservation>();
for (let i = 0; i < 10; i++) {
  reservations.push(new Reservation());
}

reservations.forEach((reservation) => reservation.printAllFields());
