export default class SudokuAction {
  public row: number;
  public col: number;
  public val: number;
  constructor(row: number, col: number, val: number) {
    this.row = row;
    this.col = col;
    this.val = val;
  }
  public toString(): string {
    return `(${this.row}, ${this.col}) ${this.val}`;
  }
}
