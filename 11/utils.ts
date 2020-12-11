import { ADJACENT_POSITIONS, EMPTY, OCCUPIED } from "./consts";
import flatten from "lodash/flatten";

function findVisibleOccupiedCount(
  readGrid: string[][],
  row: number,
  col: number
): number {
  let count = 0;

  for (let i = 0; i < ADJACENT_POSITIONS.length; i++) {
    let adjacentRow = row + ADJACENT_POSITIONS[i][0];
    let adjacentCol = col + ADJACENT_POSITIONS[i][1];

    while (readGrid[adjacentRow] && readGrid[adjacentRow][adjacentCol]) {
      if (readGrid[adjacentRow][adjacentCol] === EMPTY) {
        break;
      }
      if (readGrid[adjacentRow][adjacentCol] === OCCUPIED) {
        count++;
        break;
      }
      adjacentRow += ADJACENT_POSITIONS[i][0];
      adjacentCol += ADJACENT_POSITIONS[i][1];
    }
  }

  return count;
}

function findAdjacentOccupiedCount(
  readGrid: string[][],
  row: number,
  col: number
): number {
  let count = 0;

  for (let i = 0; i < ADJACENT_POSITIONS.length; i++) {
    const adjacentRow = row + ADJACENT_POSITIONS[i][0];
    const adjacentCol = col + ADJACENT_POSITIONS[i][1];

    if (
      readGrid[adjacentRow] &&
      readGrid[adjacentRow][adjacentCol] === OCCUPIED
    ) {
      count++;
    }
  }

  return count;
}

function findOccupiedCount(
  readGrid: string[][],
  row: number,
  col: number,
  countVisible: boolean
): number {
  return countVisible
    ? findVisibleOccupiedCount(readGrid, row, col)
    : findAdjacentOccupiedCount(readGrid, row, col);
}

function updateAdjacentOfEmpty(
  readGrid: string[][],
  writeGrid: string[][],
  row: number,
  col: number,
  countVisible: boolean
): boolean {
  const occupiedCount = findOccupiedCount(readGrid, row, col, countVisible);

  if (occupiedCount === 0) {
    writeGrid[row][col] = OCCUPIED;
    return true;
  }

  return false;
}

function updateAdjacentOfOccupied(
  readGrid: string[][],
  writeGrid: string[][],
  row: number,
  col: number,
  occupiedToEmptyThreshold: number,
  countVisible: boolean
): boolean {
  const occupiedCount = findOccupiedCount(readGrid, row, col, countVisible);

  if (occupiedCount >= occupiedToEmptyThreshold) {
    writeGrid[row][col] = EMPTY;
    return true;
  }

  return false;
}

function updateGrid(
  readGrid: string[][],
  writeGrid: string[][],
  row: number,
  col: number,
  occupiedToEmptyThreshold: number,
  countVisible: boolean
): boolean {
  if (readGrid[row][col] === EMPTY) {
    return updateAdjacentOfEmpty(readGrid, writeGrid, row, col, countVisible);
  }
  if (readGrid[row][col] === OCCUPIED) {
    return updateAdjacentOfOccupied(
      readGrid,
      writeGrid,
      row,
      col,
      occupiedToEmptyThreshold,
      countVisible
    );
  }
  return false;
}

export function findAnswer(
  input: string,
  occupiedToEmptyThreshold: number,
  countVisible: boolean
): number {
  const writeGrid: string[][] = input.split("\n").map((row) => row.split(""));
  let changeCount: number;

  do {
    changeCount = 0;
    const readGrid: string[][] = [...writeGrid].map((row) => [...row]);

    for (let row = 0; row < readGrid.length; row++) {
      for (let col = 0; col < readGrid[row].length; col++) {
        changeCount += updateGrid(
          readGrid,
          writeGrid,
          row,
          col,
          occupiedToEmptyThreshold,
          countVisible
        )
          ? 1
          : 0;
      }
    }
  } while (changeCount > 0);

  return flatten(writeGrid).filter((value) => value === OCCUPIED).length;
}
