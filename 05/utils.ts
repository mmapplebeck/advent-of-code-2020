import { ROW_SIZE, ROW_MULTIPLIER, ROW_GREATER, COL_GREATER } from "./consts";

export function getIds(input: string): number[] {
  return input.split("\n").map((code) => findId(code));
}

export function getSeatId(row: number, col: number): number {
  return row * ROW_MULTIPLIER + col;
}

export function findNum(str: string, greaterIndicator: string): number {
  return str
    .split("")
    .reduce(
      (id, character, i) =>
        character === greaterIndicator ? id | (2 ** (str.length - i) / 2) : id,
      0
    );
}

export function getRowString(code: string): string {
  return code.slice(0, ROW_SIZE);
}

export function getColString(code: string): string {
  return code.slice(ROW_SIZE);
}

export function findId(code: string): number {
  const row = findNum(getRowString(code), ROW_GREATER);
  const col = findNum(getColString(code), COL_GREATER);

  return getSeatId(row, col);
}
