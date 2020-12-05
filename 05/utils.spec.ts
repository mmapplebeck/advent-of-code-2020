import { findNum, getRowString, getColString, getSeatId } from "./utils";

describe("utils", () => {
  describe("getRowString", () => {
    it("should get the row", () => {
      const code = "BFFFBBFRRR";
      expect(getRowString(code)).toEqual("BFFFBBF");
    });
  });

  describe("getColString", () => {
    it("should get the col", () => {
      const code = "BFFFBBFRRR";
      expect(getColString(code)).toEqual("RRR");
    });
  });

  describe("findNum", () => {
    it("should get the correct row num", () => {
      const row = "BFFFBBF";
      const expected = 70;
      const actual = findNum(row, "B");

      expect(actual).toEqual(expected);
    });

    it("should get the correct col num", () => {
      const col = "RRR";
      const expected = 7;
      const actual = findNum(col, "R");

      expect(actual).toEqual(expected);
    });
  });

  describe("getSeatId", () => {
    it("should get the seat id", () => {
      expect(getSeatId(70, 7)).toEqual(567);
    });
  });
});
