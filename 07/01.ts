import { INPUT, SHINY_GOLD } from "./consts";
import { getChildBagCountsByOuterBag } from "./utils";

function canContainShinyGold(
  outerBag: string,
  childBagCountsByOuterBag: Record<string, Record<string, number>>,
  memo: Record<string, boolean> = {}
): boolean {
  if (memo[outerBag] !== undefined) {
    return memo[outerBag];
  }

  const childBags = Object.keys(childBagCountsByOuterBag[outerBag]);

  if (childBags.length === 0) {
    memo[outerBag] = false;
  } else if (childBags.includes(SHINY_GOLD)) {
    memo[outerBag] = true;
  } else {
    memo[outerBag] = childBags.some((bag) =>
      canContainShinyGold(bag, childBagCountsByOuterBag, memo)
    );
  }

  return memo[outerBag];
}

function findAnswer(): number {
  const childBagCountsByOuterBag = getChildBagCountsByOuterBag(INPUT);

  return Object.keys(childBagCountsByOuterBag).reduce(
    (total, outerBag) =>
      canContainShinyGold(outerBag, childBagCountsByOuterBag)
        ? total + 1
        : total,
    0
  );
}

console.log(findAnswer());
