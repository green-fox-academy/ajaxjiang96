import MyBinaryTreeNode from "./BinaryTreeNode";
import { ITree } from "./Interfaces";
import MyQueue from "./Queue";
import MyStack from "./Stack";

export default class MyBinaryTree<T> implements ITree<T> {
  public value: T;
  public left: MyBinaryTree<T>;
  public right: MyBinaryTree<T>;

  constructor(value?: T) {
    this.value = value;
  }
  public empty(): boolean {
    return !this.value;
  }
  public add(value: T): void {
    if (this.value === undefined) { this.value = value; return; }
    const traverseQueue = new MyQueue<MyBinaryTree<T>>();
    traverseQueue.add(this);
    while (!traverseQueue.empty()) {
      const curr = traverseQueue.remove();
      if (!curr.left) {
        curr.left = new MyBinaryTree(value); break;
      } else {
        traverseQueue.add(curr.left);
      }
      if (!curr.right) {
        curr.right = new MyBinaryTree(value); break;
      } else {
        traverseQueue.add(curr.right);
      }
    }
  }

  public remove(value: T): void {
    if (this.value === undefined) { return; }
    const traverseStack = new MyStack<MyBinaryTree<T>>();
    traverseStack.push(this);
    let parent: MyBinaryTree<T> = null;
    while (!traverseStack.empty()) {
      const curr = traverseStack.pop();
      if (curr.value === value) {
        if (!curr.left && !curr.right) {
          if (!parent) {
            this.value = undefined;
          } else {
            if (parent.right && parent.right.value === value) {
              parent.right = undefined;
            } else {
              parent.left = undefined;
            }
          }
        }
      } else {
        parent = curr;
        if (parent.left) { traverseStack.push(parent.left); }
        if (parent.right) { traverseStack.push(parent.right); }
      }
    }
  }
  public search(value: T): boolean {
    throw new Error("Method not implemented.");
  }

  public inorder(): string {
    if (this.value === undefined) {
      return;
    }
    let line = "";
    if (this.left) { line += this.left.inorder(); }
    line += " " + this.value + " ";
    if (this.right) { line += this.right.inorder(); }
    line += "\n";
    return line;
  }
}
