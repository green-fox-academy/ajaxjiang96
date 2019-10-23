import { INode, IStack } from "./Interfaces";
import MyLinkedList from "./LinkedList";
// import MyNode from "./Node";

export default class MyLinkedStack<T> extends MyLinkedList<T> implements IStack<T> {
  public head: INode<T>;
  public tail: INode<T>;
  constructor() {
    super();
    // this.head = new MyNode<T>(null);
    // this.tail = this.head;
  }

  public empty(): boolean {
    return this.head.next === undefined || this.head.next === null;
  }
  public peek(): T {
    return this.tail.value ? this.tail.value : null;
  }
  public push(value: T): void {
    this.add(value);
  }
  public pop(): T {
    return this.remove(Math.max(this.size() - 1, 0));
  }
}
