import { INPUT } from "./consts";
import { getNums } from "./utils";

function findAnswer() {
  let oneCount = 0;
  let threeCount = 0;
  const nums = getNums(INPUT);

  for (let i = 0; i < nums.length; i++) {
    const diff = nums[i] - (nums[i - 1] || 0);
    if (diff === 1) {
      oneCount++;
    } else if (diff === 3) {
      threeCount++;
    }
  }

  threeCount++;

  return oneCount * threeCount;
}

console.log(findAnswer());
