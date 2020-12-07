import { PATTERN, NO_OTHER } from "./consts";

export function getChildBagCountsByOuterBag(input: string) {
  return input
    .split("\n")
    .map((line) => line.split("contain"))
    .reduce((acc, [outer, inner]) => {
      acc[outer.trim().match(PATTERN)[2]] = inner
        .split(",")
        .reduce((acc, i) => {
          const match = i.trim().match(PATTERN);

          if (match[2] === NO_OTHER) {
              return acc;
          }

          acc[match[2]] = parseInt(match[1].trim(), 10);
          return acc;
        }, {});

      return acc;
    }, {});
}
