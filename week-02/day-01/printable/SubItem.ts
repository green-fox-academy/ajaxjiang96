import IPrintable from "./IPrintable";

export default class SubItem implements IPrintable {
  private item: string;
  constructor(item: string) {
    this.item = item;
  }
  public printAllFields(): void {
    console.log(`\t- ${this.item}`);
  }
}
