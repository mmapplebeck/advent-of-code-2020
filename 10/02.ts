import { INPUT } from "./consts";
import { getNums } from "./utils";

function getCounts(nums: number[]): Record<number, number[]> {
  const counts = {};

  for (let i = 0; i < nums.length - 1; i++) {
    counts[nums[i]] = [];
    for (let j = i + 1; j < nums.length && j < i + 4; j++) {
      if (nums[j] <= nums[i] + 3) {
        counts[nums[i]].push(nums[j]);
      }
    }
  }

  return counts;
}

function findAnswer() {
  const nums = getNums(INPUT);

  nums.unshift(0);

  return findWays(getCounts(nums), nums[0]);
}

function findWays(counts, num, cache = {}) {
  if (!counts[num]) {
    return 1;
  }

  if (cache[num]) {
    return cache[num];
  }

  cache[num] = 0;

  for (let i = 0; i < counts[num].length; i++) {
    cache[num] += findWays(counts, counts[num][i], cache);
  }

  return cache[num];
}

console.log(findAnswer());
