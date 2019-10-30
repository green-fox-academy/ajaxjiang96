import { IBinaryTreeNode } from "./Interfaces";

export default class MyBinaryTreeNode<T> implements IBinaryTreeNode<T> {
  public value: T;
  public left: IBinaryTreeNode<T>;
  public right: IBinaryTreeNode<T>;
  constructor(value: T) {
    this.value = value;
  }
  public add(value: T): boolean {
    if (this.left && this.right) {
      return false;
    } else if (this.left) {
      this.right = new MyBinaryTreeNode(value);
      return true;
    } else {
      this.left = new MyBinaryTreeNode(value);
      return true;
    }
  }
}
