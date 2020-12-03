import { INPUT, TREE } from "./consts";
import { Grid, Directions } from "./models";

export function getGrid(): Grid {
  return INPUT.split("\n").map((row) => row.split(""));
}

export function getTreeCount(grid: Grid, directions: Directions) {
  let col = 0;
  let treeCount = 0;

  for (
    let row = directions.rowChange;
    row < grid.length;
    row += directions.rowChange
  ) {
    col += directions.colChange;
    col %= grid[row].length;

    if (grid[row][col] === TREE) {
      treeCount++;
    }
  }

  return treeCount;
}
