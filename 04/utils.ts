import { REQUIRED_KEYS, PATTERNS } from "./consts";
import { Field } from "./models";

export function getKeyValues(passport: string): string[][] {
  return passport.split(" ").map((field) => field.split(":"));
}

export function getKeys(passport: string): string[] {
  return getKeyValues(passport).map(([key]) => key);
}

export function hasAllRequiredKeys(passport: string): boolean {
  const keySet = new Set(getKeys(passport));
  return REQUIRED_KEYS.every((requiredKey) => keySet.has(requiredKey));
}

export function hasValidValues(passport: string): boolean {
  return getKeyValues(passport).every(
    ([key, value]: [Field, string]) => value.match(PATTERNS[key]) !== null
  );
}

export function getPassports(input: string): string[] {
  return input
    .split("\n\n")
    .map((multilinePassport) => multilinePassport.split("\n").join(" "));
}

export function countValid(count: number, isValid: boolean): number {
  return count + (isValid ? 1 : 0);
}
