import max from "lodash/max";

import { INPUT } from "./consts";
import { getIds } from "./utils";

function findAnswer() {
  return max(getIds(INPUT));
}

console.log(findAnswer());
