export function getNumbers(input: string): number[] {
  return input.split("\n").map((str) => parseInt(str, 10));
}
