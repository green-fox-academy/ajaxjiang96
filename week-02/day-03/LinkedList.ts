"use strict";

import { ILinkedList, INode } from "./Interfaces";
import MyNode from "./Node";

class MyLinkedList<T> implements ILinkedList<T> {

  public head: INode<T>;
  public tail: INode<T>;
  constructor() {
    this.head = new MyNode<T>(null);
    this.tail = this.head;
  }
  public add(value: T, index?: number): void {
    if (index !== undefined) {
      let i = 0;
      let prev = this.head;
      let curr = this.head.next;
      while (i < index) {
        prev = curr;
        curr = curr.next;
        i++;
      }
      const newNode = new MyNode(value);
      newNode.next = curr;
      prev.next = newNode;
    } else {
      this.tail.next = new MyNode(value);
      this.tail = this.tail.next;
    }
  }

  public get(index: number): T {
    if (index >= this.size()) { return null; }
    if (index === -1) { return this.tail.value; }
    let i = 0;
    let curr = this.head;
    while (i <= index) {
      curr = curr.next;
      i++;
    }
    return curr.value;
  }
  public removeItem(value: T): void {
    let curr = this.head.next;
    let prev = this.head;
    while (curr) {
      if (curr.value === value) {
        prev.next = curr.next;
        if (!prev.next) {
          this.tail = prev;
        }
      }
      prev = curr;
      curr = curr.next;
    }
    console.log(this);
  }

  public remove(index: number): T {
    if (index >= this.size()) { return null; }
    let i = 0;
    let curr = this.head.next;
    let prev = this.head;

    while (i < index && curr) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    const value = curr.value;
    prev.next = curr.next;
    if (!prev.next) {
      this.tail = prev;
    }
    return value;
  }

  public size(): number {
    let count = 0;
    let curr = this.head;
    while (curr.next) {
      count++;
      curr = curr.next;
    }
    return count;
  }

  public toString(): string {
    let curr = this.head;
    let formattedLL = `${this.head.next ? this.head.next.value : ""} [`;
    while (curr.next) {
      curr = curr.next;
      formattedLL += `${curr.value} -> `;
    }
    formattedLL += `] ${this.tail.value}`;
    return formattedLL;
  }
}

export default MyLinkedList;
