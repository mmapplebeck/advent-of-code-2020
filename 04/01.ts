import { INPUT } from "./consts";
import { getPassports, countValid, hasAllRequiredKeys } from "./utils";

function findAnswer(): number {
  return getPassports(INPUT).map(hasAllRequiredKeys).reduce(countValid, 0);
}

console.log(findAnswer());
