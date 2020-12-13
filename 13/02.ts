import { INPUT } from "./consts";

function findAnswer() {
  let [firstBus, ...buses] = INPUT.split("\n")[1]
    .split(",")
    .map((bus, i) => ({
      id: parseInt(bus, 10),
      offset: i,
    }))
    .filter((bus) => Number.isInteger(bus.id));

  let multiplier = firstBus.id;
  let time = 0;

  buses.forEach(({ id, offset }) => {
    while (true) {
      if ((time + offset) % id === 0) {
        multiplier *= id;
        break;
      }
      time += multiplier;
    }
  });

  return time;
}

console.log(findAnswer());
