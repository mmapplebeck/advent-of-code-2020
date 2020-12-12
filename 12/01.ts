import { INPUT } from "./consts";
import {
  Action,
  Instruction,
  CardinalPoint,
  TurnDirection,
  Coordinates,
} from "./models";

function getNewFacingAfterTurning(
  direction: TurnDirection,
  degrees: number,
  currentlyFacing: CardinalPoint
): CardinalPoint {
  let newFacing: CardinalPoint;

  if (currentlyFacing === "N") {
    newFacing = direction === "L" ? "W" : "E";
  } else if (currentlyFacing === "S") {
    newFacing = direction === "L" ? "E" : "W";
  } else if (currentlyFacing === "E") {
    newFacing = direction === "L" ? "N" : "S";
  } else if (currentlyFacing === "W") {
    newFacing = direction === "L" ? "S" : "N";
  }

  return degrees === 90
    ? newFacing
    : getNewFacingAfterTurning(direction, degrees - 90, newFacing);
}

function getNewCoordinatesAfterMoving(
  action: CardinalPoint,
  value: number,
  coordinates: Coordinates
): Coordinates {
  switch (action) {
    case "N":
      return {
        ...coordinates,
        latitude: coordinates.latitude + value,
      };
    case "S":
      return {
        ...coordinates,
        latitude: coordinates.latitude - value,
      };
    case "E":
      return {
        ...coordinates,
        longitude: coordinates.longitude + value,
      };
    case "W":
      return {
        ...coordinates,
        longitude: coordinates.longitude - value,
      };
    default:
      return coordinates;
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
  let currentlyFacing: CardinalPoint = "E";

  for (let i = 0; i < instructions.length; i++) {
    const { action, value } = instructions[i];

    if (action === "L" || action === "R") {
      currentlyFacing = getNewFacingAfterTurning(
        action,
        value,
        currentlyFacing
      );
    } else {
      coordinates = getNewCoordinatesAfterMoving(
        action === "F" ? currentlyFacing : (action as CardinalPoint),
        value,
        coordinates
      );
    }
  }

  return getManhattanDistance(coordinates);
}

console.log(findAnswer());
