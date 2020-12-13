import { INPUT } from "./consts";

function findAnswer() {
  const parts = INPUT.split("\n");
  const departTime: number = parseInt(parts[0], 10);
  const buses: number[] = parts[1]
    .split(",")
    .filter((bus) => bus !== "x")
    .map((bus) => parseInt(bus, 10));

  let bestBusId: number;
  let bestWaitTime: number;

  buses.forEach((bus) => {
    const waitTime = Math.ceil(departTime / bus) * bus - departTime;
    if (bestWaitTime === undefined || waitTime < bestWaitTime) {
      bestWaitTime = waitTime;
      bestBusId = bus;
    }
  });

  return bestBusId * bestWaitTime;
}

console.log(findAnswer());
