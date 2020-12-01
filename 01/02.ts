import { INPUT, TARGET } from "./consts";
import { getNumbers } from "./utils";

function findAnswer(input: string, target: number): number | null {
  const sortedNumbers = getNumbers(input).sort((a, b) => a - b);

  for (let i = 0; i < sortedNumbers.length - 2; i++) {
    if (sortedNumbers[i] === sortedNumbers[i + 1]) {
      continue;
    }

    let l = i + 1;
    let r = sortedNumbers.length - 1;

    while (l < r) {
      const sum = sortedNumbers[i] + sortedNumbers[l] + sortedNumbers[r];

      if (sum === target) {
        return sortedNumbers[i] * sortedNumbers[l] * sortedNumbers[r];
      } else if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      }
    }
  }

  return null;
}

console.log(findAnswer(INPUT, TARGET));
