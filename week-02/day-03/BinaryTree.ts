import MyBinaryTreeNode from "./BinaryTreeNode";
import { IBinaryTreeNode, ITree } from "./Interfaces";
import MyQueue from "./Queue";

export default class MyBinaryTree<T> implements ITree<T> {
  public root: IBinaryTreeNode<T>;
  private lastParentNode: IBinaryTreeNode<T>;
  public empty(): boolean {
    return !this.root;
  }
  public add(value: T): void {
    if (this.empty()) {
      this.root = new MyBinaryTreeNode<T>(value);
      return;
    }
    const traverseQueue = new MyQueue<MyBinaryTreeNode<T>>();
    traverseQueue.add(this.root);
    while (!traverseQueue.empty()) {
      const curr = traverseQueue.remove();
      const added = curr && curr.add(value);
      if (!added) {
        if (curr.left) { traverseQueue.add(curr.left); }
        if (curr.right) { traverseQueue.add(curr.right); }
      } else {
        this.lastParentNode = curr;
        return;
      }
    }
  }
  public remove(value: T): void {
    if (this.empty()) {
      return;
    }
    const traverseQueue = new MyQueue<MyBinaryTreeNode<T>>();
    traverseQueue.add(this.root);
    let parent: MyBinaryTreeNode<T> = null;
    while (!traverseQueue.empty()) {
      const curr = traverseQueue.remove();
      if (curr.value === value) {
        let lastLeaf: IBinaryTreeNode<T>;
        if (this.lastParentNode.right) {
          lastLeaf = this.lastParentNode.right;
          this.lastParentNode.right = undefined;
        } else {
          lastLeaf = this.lastParentNode.left;
          this.lastParentNode.left = undefined;
        }
        lastLeaf.left = curr.left;
        lastLeaf.right = curr.right;
        if (!parent) {
          this.root = lastLeaf;
        } else {
          if (parent.left.value === value) {
            parent.left = lastLeaf;
          } else {
            parent.right = lastLeaf;
          }
        }
      } else {
        if (curr.left) { traverseQueue.add(curr.left); }
        if (curr.right) { traverseQueue.add(curr.right); }
        parent = curr;
      }
    }
  }
  public search(value: T): boolean {
    throw new Error("Method not implemented.");
  }

}
