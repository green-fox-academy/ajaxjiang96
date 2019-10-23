"use strict";

import { INode } from "./Interfaces";

export default class MyNode<T> implements INode<T> {
  public value: T;
  public next: INode<T>;
  constructor(value: T) {
    this.value = value;
  }
}
