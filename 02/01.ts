import { INPUT } from "./consts";

function getAnswer(input: string) {
  return input.split("\n").reduce((count, line) => {
    const [rules, password] = line.split(":").map((part) => part.trim());
    const [counts, targetLetter] = rules.split(" ");
    const [lowerBound, upperBound] = counts
      .split("-")
      .map((count) => parseInt(count, 10));
    let targetLetterCount = 0;

    for (let i = 0; i < password.length; i++) {
      if (password[i] === targetLetter) {
        targetLetterCount++;
      }
    }

    return targetLetterCount >= lowerBound && targetLetterCount <= upperBound
      ? count + 1
      : count;
  }, 0);
}

console.log(getAnswer(INPUT));
