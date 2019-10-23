"use strict";

import { IStack } from "./Interfaces";

class MyStack<T> implements IStack<T> {
  public data: T[];
  constructor() {
    this.data = [];
  }
  public empty(): boolean {
    return this.data.length === 0;
  }
  public peek(): T {
    return this.empty() ? null : this.data[0];
  }
  public push(value: T): void {
    this.data.unshift(value);
  }
  public pop(): T {
    return this.data.shift();
  }
}

export default MyStack;
