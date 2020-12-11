import {findAnswer} from './01';
import {INPUT} from './consts'

interface Result {
    found: boolean;
    min?: number;
    max?: number;
}

function containsCont(target: number, i: number, nums: number[]): Result {
    
    let sum = nums[i];
    let min = sum;
    let max = sum;

    while (sum < target) {
        sum += nums[++i];
        min = Math.min(min, nums[i])
        max = Math.max(max, nums[i])
        if (sum === target) {
            return {
                found: true,
                min,
                max,
            }
        }
    }

    return {
        found: false,
    }
}

function findAnswer2(): number | null{
    const nums = INPUT.split("\n").map((n) => parseInt(n, 10));
    const target = findAnswer();
    for (let i = 0; i < nums.length; i++) {
        const result = containsCont(target, i, nums);
        if (result.found) {
            return result.min + result.max;
        }
    }
    return null;
}

console.log(findAnswer2())
    