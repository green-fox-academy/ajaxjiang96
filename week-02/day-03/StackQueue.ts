import { IQueue, IStack } from "./Interfaces";
import MyLinkedStack from "./LinkedStack";
import MyStack from "./Stack";

export default class MyStackQueue<T> implements IQueue<T> {
  public inStack: IStack<T>;
  public outStack: IStack<T>;
  constructor() {
    this.inStack = new MyStack<T>();
    this.outStack = new MyLinkedStack<T>();
  }
  public empty(): boolean {
    return this.inStack.empty() && this.outStack.empty();
  }
  public peek(): T {
    let curr = this.inStack.pop();
    while (curr) {
      this.outStack.push(curr);
      curr = this.inStack.pop();
    }
    return this.outStack.peek();
  }
  public add(value: T): void {
    this.inStack.push(value);
  }
  public remove(): T {
    let curr = this.inStack.pop();
    while (curr) {
      this.outStack.push(curr);
      curr = this.inStack.pop();
    }
    return this.outStack.pop();
  }

}
