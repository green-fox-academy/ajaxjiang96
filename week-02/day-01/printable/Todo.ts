"use strict";

import IPrintable from "./IPrintable";
import SubItem from "./SubItem";

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

// let todoText = ' - Buy milk\n';
// todoText = `My todo:\n${todoText}`;
// todoText += ' - Download games\n';
// todoText += '\t- Diablo';

// console.log(todoText);

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
