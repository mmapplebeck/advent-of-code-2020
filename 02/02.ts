import { INPUT } from "./consts";

function getAnswer(input: string) {
  return input.split("\n").reduce((count, line) => {
    const [rules, password] = line.split(":").map((part) => part.trim());
    const [counts, targetLetter] = rules.split(" ");
    const [i, j] = counts.split("-").map((count) => parseInt(count, 10) - 1);

    return (password[i] === targetLetter && password[j] !== targetLetter) ||
      (password[i] !== targetLetter && password[j] === targetLetter)
      ? count + 1
      : count;
  }, 0);
}

console.log(getAnswer(INPUT));
