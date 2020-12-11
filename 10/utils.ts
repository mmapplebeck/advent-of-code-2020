export function getNums(input: string) {
  return input
    .split("\n")
    .map((line) => parseInt(line, 10))
    .sort((a, b) => a - b);
}
