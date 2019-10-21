"use strict";

import IPrintable from "./IPrintable";
import SubItem from "./SubItem";

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

export default class Todo implements IPrintable {
  private item: string;
  private subItems: SubItem[];
  constructor(item: string, subItems: string[] = []) {
    this.item = item;
    this.subItems = new Array<SubItem>();
    subItems.forEach((itemName) => this.subItems.push(new SubItem(itemName)));
  }

  public toString(): string {
    return ` - ${this.item}`;
  }

  public addSubItem(name: string): void {
    this.subItems.push(new SubItem(name));
  }

  public printAllFields(): void {
    console.log(`${this.toString()}`);
    this.subItems.forEach((subItem) => subItem.printAllFields());
  }
}
