import { getGrid, getTreeCount } from "./utils";

function findAnswer() {
  return getTreeCount(getGrid(), { rowChange: 1, colChange: 3 });
}

console.log(findAnswer());
