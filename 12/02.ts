import { INPUT } from "./consts";
import {
  Action,
  Instruction,
  CardinalPoint,
  TurnDirection,
  Coordinates,
} from "./models";

function getWaywardOffsetAfterRotating(
  direction: TurnDirection,
  degrees: number,
  waywardOffset: Coordinates
): Coordinates {
  let newOffset: Coordinates = {
    latitude: waywardOffset.longitude * (direction === "L" ? 1 : -1),
    longitude: waywardOffset.latitude * (direction === "L" ? -1 : 1),
  };
  return degrees === 90
    ? newOffset
    : getWaywardOffsetAfterRotating(direction, degrees - 90, newOffset);
}

function getCoordinatesAfterMoving(
  value: number,
  coordinates: Coordinates,
  waywardOffset: Coordinates
): Coordinates {
  return {
    latitude: coordinates.latitude + value * waywardOffset.latitude,
    longitude: coordinates.longitude + value * waywardOffset.longitude,
  };
}

function getWaywardOffsetAfterMoving(
  action: CardinalPoint,
  value: number,
  waywardOffset: Coordinates
): Coordinates {
  switch (action) {
    case "N":
      return {
        ...waywardOffset,
        latitude: waywardOffset.latitude + value,
      };
    case "S":
      return {
        ...waywardOffset,
        latitude: waywardOffset.latitude - value,
      };
    case "E":
      return {
        ...waywardOffset,
        longitude: waywardOffset.longitude + value,
      };
    case "W":
      return {
        ...waywardOffset,
        longitude: waywardOffset.longitude - value,
      };
    default:
      return waywardOffset;
  }
}

function getManhattanDistance(coordinates: Coordinates): number {
  return Math.abs(coordinates.latitude) + Math.abs(coordinates.longitude);
}

function findAnswer() {
  const instructions: Instruction[] = INPUT.split("\n").map((i) => ({
    action: i[0] as Action,
    value: parseInt(i.slice(1)),
  }));
  let coordinates: Coordinates = {
    latitude: 0,
    longitude: 0,
  };
  let waywardOffset: Coordinates = {
    latitude: 1,
    longitude: 10,
  };

  for (let i = 0; i < instructions.length; i++) {
    const { action, value } = instructions[i];

    if (action === "L" || action === "R") {
      waywardOffset = getWaywardOffsetAfterRotating(
        action as TurnDirection,
        value,
        waywardOffset
      );
    } else if (action === "F") {
      coordinates = getCoordinatesAfterMoving(
        value,
        coordinates,
        waywardOffset
      );
    } else {
      waywardOffset = getWaywardOffsetAfterMoving(action, value, waywardOffset);
    }
  }

  return getManhattanDistance(coordinates);
}

console.log(findAnswer());
