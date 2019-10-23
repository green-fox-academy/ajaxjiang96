"use strict";

import { IQueue } from "./Interfaces";

class MyQueue<T> implements IQueue<T> {
  public data: T[];
  constructor() {
    this.data = [];
  }
  public empty(): boolean {
    return this.data.length === 0;
  }
  public peek() {
    return this.empty() ? null : this.data[0];
  }
  public add(value: T): void {
    this.data.push(value);
  }
  public remove() {
    return this.data.shift();
  }
}

export default MyQueue;
