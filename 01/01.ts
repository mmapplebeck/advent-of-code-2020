import { INPUT, TARGET } from "./consts";
import { getNumbers } from "./utils";

function findAnswer(input: string, target: number): number | null {
  const numbers = getNumbers(INPUT);
  const seen = new Set();

  for (const num of numbers) {
    const delta = target - num;

    if (seen.has(delta)) {
      return num * delta;
    }

    seen.add(num);
  }

  return null;
}

console.log(findAnswer(INPUT, TARGET));
