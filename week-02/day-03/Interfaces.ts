"use strict";

export interface ILinkedList<T> {
  head: INode<T>;
  tail: INode<T>;
  add(value: T, index?: number): void;
  get(index: number): T;
  removeItem(value: T): void;
  remove(index: number): T;
  size(): number;
}

export interface INode<T> {
  value: T;
  next: INode<T>;
}

export interface IBinaryTreeNode<T> {
  value: T;
  left: IBinaryTreeNode<T>;
  right: IBinaryTreeNode<T>;
  add(value: T): boolean;
}

export interface IStack<T> {
  empty(): boolean;
  peek(): T;
  push(value: T): void;
  pop(): T;
}
export interface IQueue<T> {
  empty(): boolean;
  peek(): T;
  add(value: T): void;
  remove(): T;
}
export interface ITree<T> {
  empty(): boolean;
  add(value: T): void;
  remove(value: T): void;
  search(value: T): boolean;
}
