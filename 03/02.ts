import { getGrid, getTreeCount } from "./utils";
import { Directions } from "./models";

function findAnswer() {
  const grid = getGrid();

  return [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1],
  ]
    .map(
      ([rowChange, colChange]): Directions => ({
        rowChange,
        colChange,
      })
    )
    .map((directions) => getTreeCount(grid, directions))
    .reduce((product, treeCount) => product * treeCount, 1);
}

console.log(findAnswer());
