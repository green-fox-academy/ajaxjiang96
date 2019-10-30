import * as fs from "fs";
import * as path from "path";
import SudokuAction from "./SudokuAction";

class Sudoku {
  public table: number[][];
  public candidates: number[][][];
  private fileName: string;
  private toBeX: SudokuAction[];
  private Xed: SudokuAction[];
  private candidateTracker: number[][];
  constructor(fileName: string) {
    this.fileName = path.join("./", fileName);
    this.toBeX = new Array<SudokuAction>();
    this.Xed = new Array<SudokuAction>();
    // this.errorHandler = errorHandler;
    this.candidateTracker = Array(9)
      .fill(1)
      .map(() =>
        Array(9)
          .fill(1)
          .map(() => 0),
      );
  }
  public createCandidatesRow(): number[][] {
    return Array(9)
      .fill(1)
      .map(() =>
        Array(9)
          .fill(1)
          .map((_, i) => i + 1),
      );
  }
  public createCandidatesCube(): number[][][] {
    return Array(9)
      .fill(1)
      .map(() => this.createCandidatesRow());
  }

  public async loadTable(): Promise<number[][]> {
    return new Promise((resolve, reject) => {
      fs.readFile(this.fileName, "utf8", (error, data) => {
        // ...
        if (error) {
          reject(error);
        }
        const parsed = data
          .trim()
          .split("\n")
          .map((row) =>
            row.split(" ").map((cell) => parseInt(cell.replace("_", "0"), 10)),
          );
        this.table = parsed;
        resolve(parsed);
      });
    });
  }

  public getRow(row: number): number[] {
    return this.table[row];
  }

  public getCol(col: number): number[] {
    // console.log(this.table.map((row) => row[col]));
    return this.table.map((row) => row[col]);
  }

  public getArea(x: number, y: number): number[] {
    return Array.prototype.concat(
      ...this.table
        .slice(3 * y, 3 * y + 3)
        .map((row) => row.slice(3 * x, 3 * x + 3)),
    );
  }
  public getDiag(back = false): number[] {
    const coefficient = back ? 1 : 0;
    return this.table.map(
      (row, i) => row[coefficient * 8 + (coefficient ? -1 : 1) * i],
    );
  }

  public getAllAreas(): number[][] {
    return Array.prototype.concat(
      ...[...Array(3)].map((_, x) =>
        [...Array(3)].map((__, y) => this.getArea(y, x)),
      ),
    );
  }

  public getAllConstraints(): number[][] {
    const rows = this.table;
    const cols = [...Array(9)].map((_, i) => this.getCol(i));
    // console.log(cols);
    const areas = this.getAllAreas();
    const diags = [this.getDiag(), this.getDiag(true)];
    return [...rows, ...cols, ...areas, ...diags];
  }

  public allListsDistinct(lists: number[][]) {
    console.log(lists);
    return lists.map(this.allDistinct).every((x) => x);
  }

  public validGameState = () => {
    return this.allListsDistinct(this.getAllConstraints());
  };
  public allDistinct = (vals: number[]) => {
    // console.log(vals);
    const filtered = vals.filter((x) => typeof x === "number" && x > 0);
    const result = new Set(filtered).size === filtered.length;
    return result;
  };
  public solve(): void {
    this.candidates = this.createCandidatesCube();
    this.updateCandidates();
    while (this.toBeX.length) {
      const nextStep = this.toBeX.pop();
      console.log(nextStep);
      this.execute(nextStep);
      this.updateCandidates();
      if (this.candidates.every((row) => row.every((cell) => !cell.length))) {
        if (this.validGameState()) {
          return;
        } else {
          this.revert(this.Xed.pop());
        }
      }
      console.table(this.table);
    }
  }

  private execute(action: SudokuAction): void {
    this.table[action.row][action.col] = action.val;
    this.Xed.push(action);
  }

  private revert(action: SudokuAction): void {
    const { row, col, val } = action;
    this.table[row][col] = 0;
    this.candidates[row][col].push(val);
    // this.toBeX.push(action);
  }

  private updateCandidates(): void {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        this.candidates[row][col] = this.candidates[row][col].filter(
          (candidate) =>
            !this.table[row][col] &&
            !(
              this.getRow(row).includes(candidate) ||
              this.getCol(col).includes(candidate) ||
              this.getArea(Math.ceil(col / 3), Math.ceil(row / 3)).includes(
                candidate,
              ) ||
              (col === row && this.getDiag().includes(candidate)) ||
              (col === 9 - row - 1 && this.getDiag(true).includes(candidate))
            ),
        );
        if (this.candidates[row][col].length === 1) {
          if (
            this.candidateTracker[row][col] === this.candidates[row][col].length
          ) {
            this.candidateTracker[row][col] = 0;
            this.table[row][col] = 0;
          }
          this.toBeX.push(
            new SudokuAction(
              row,
              col,
              this.candidates[row][col][this.candidateTracker[row][col]],
            ),
          );
          this.candidateTracker[row][col] += 1;
        }
        // console.log(this.candidates[row][col]);
      }
      // console.table(this.candidates);
    }
    if (!this.toBeX.length) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (this.candidates[row][col].length) {
            if (
              this.candidateTracker[row][col] ===
              this.candidates[row][col].length
            ) {
              this.candidateTracker[row][col] = 0;
              this.table[row][col] = 0;
            }
            this.toBeX.push(
              new SudokuAction(
                row,
                col,
                this.candidates[row][col][this.candidateTracker[row][col]],
              ),
            );
          }
        }
      }
    }
  }
}

export default Sudoku;
export function errorHandler(...message): void {
  console.error(`Error: ${message.join("\t")}`);
}
