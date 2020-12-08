import { getInstructions, getExecution } from "./utils";

function findAnswer(): number {
  return getExecution(getInstructions()).acc;
}

console.log(findAnswer());
