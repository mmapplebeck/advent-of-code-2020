import { INPUT } from "./consts";
import {
  getPassports,
  hasValidValues,
  countValid,
  hasAllRequiredKeys,
} from "./utils";

function findAnswer(): number {
  return getPassports(INPUT)
    .map((passport) => hasAllRequiredKeys(passport) && hasValidValues(passport))
    .reduce(countValid, 0);
}

console.log(findAnswer());
