export type Action = "N" | "S" | "E" | "W" | "L" | "R" | "F";

export type CardinalPoint = "N" | "S" | "E" | "W";

export type TurnDirection = "L" | "R";

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Instruction {
  action: Action;
  value: number;
}
