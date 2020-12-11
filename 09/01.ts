import { INPUT } from "./consts";

function checkValid(i: number, nums: number[]): boolean {
  for (let j = i - 25; j < i - 1; j++) {
    for (let k = j + 1; k < i; k++) {
      if (nums[j] + nums[k] === nums[i] && nums[j] !== nums[k]) {
        return true;
      }
    }
  }
  return false;
}

export function findAnswer(): number | null {
  const nums = INPUT.split("\n").map((n) => parseInt(n, 10));
  for (let i = 25; i < nums.length; i++) {
    if (!checkValid(i, nums)) {
      return nums[i];
    }
  }
  return null;
}

console.log(findAnswer());
