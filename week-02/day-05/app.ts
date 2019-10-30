import * as path from "path";
import Sudoku, { errorHandler } from "./Sudoku";

function main(): void {
  if (process.argv.length > 3) { return errorHandler("To many arguments", process.argv.length); }
  if (process.argv.length < 3) { return errorHandler("To few arguments", process.argv.length); }
  const sudoku = new Sudoku(process.argv[2]);
  sudoku.loadTable().then(() => {
    // table loaded!
    console.table(sudoku.table);
    sudoku.solve();
  });
}

main();
