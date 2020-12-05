import max from "lodash/max";
import findIndex from "lodash/findIndex";

import { INPUT } from "./consts";
import { getIds } from "./utils";

function findAnswer() {
  const ids = getIds(INPUT);
  const maxId = max(ids);
  const idSet: Set<number> = new Set(ids);

  return findIndex(
    Array(maxId),
    (_, i) => !idSet.has(i) && idSet.has(i - 1) && idSet.has(i + 1)
  );
}

console.log(findAnswer());
