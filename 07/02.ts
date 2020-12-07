import { INPUT, SHINY_GOLD } from "./consts";
import { getChildBagCountsByOuterBag } from "./utils";

function countBags(
  outerBag: string,
  childBagCountsByOuterBag: Record<string, Record<string, number>>,
  memo: Record<string, number> = {}
): number {
  if (memo[outerBag]) {
    return memo[outerBag];
  }

  const childBagCounts = childBagCountsByOuterBag[outerBag];

  memo[outerBag] =
    1 +
    Object.keys(childBagCounts).reduce((sum, bag) => {
      return (
        sum +
        childBagCounts[bag] * countBags(bag, childBagCountsByOuterBag, memo)
      );
    }, 0);

  return memo[outerBag];
}

function findAnswer(): number {
  const childBagCountsByOuterBag = getChildBagCountsByOuterBag(INPUT);

  return countBags(SHINY_GOLD, childBagCountsByOuterBag) - 1;
}

console.log(findAnswer());
