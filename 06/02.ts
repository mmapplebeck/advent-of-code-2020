import sum from "lodash/sum";

import { INPUT } from "./consts";

function countCommonAnswers(answers: string[]) {
  const counts = {};
  answers.forEach((answer) =>
    answer.split("").forEach((letter) => {
      if (counts[letter]) {
        counts[letter]++;
      } else {
        counts[letter] = 1;
      }
    })
  );
  return Object.keys(counts).reduce(
    (commonCount, answerKey) =>
      counts[answerKey] === answers.length ? commonCount + 1 : commonCount,
    0
  );
}

function findAnswer() {
  return sum(
    INPUT.split("\n\n")
      .map((group) => group.split("\n"))
      .map(countCommonAnswers)
  );
}

console.log(findAnswer());
