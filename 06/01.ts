import sum from "lodash/sum";

import { INPUT } from "./consts";

function countUniqueAnswers(answers: string[]) {
  const seen = new Set<string>();

  answers.forEach((answer) =>
    answer.split("").forEach((letter) => seen.add(letter))
  );

  return seen.size;
}

function findAnswer() {
  return sum(
    INPUT.split("\n\n")
      .map((group) => group.split("\n"))
      .map(countUniqueAnswers)
  );
}

console.log(findAnswer());
