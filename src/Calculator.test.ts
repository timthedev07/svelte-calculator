import { describe, test, expect } from "@jest/globals";
import { handleAction } from "./Calculator";
import { CalculatorState } from "./types";

const initialState = {
  currOperand: undefined,
  operator: undefined,
  prevOperand: undefined,
  result: undefined,
} as CalculatorState;

describe("Calculator action handler", () => {
  test("correctly clears everything on AC", () => {
    expect(
      handleAction(
        {
          currOperand: "3",
          operator: "+",
          prevOperand: "200",
          result: undefined,
        },
        "AC"
      )
    ).toEqual(initialState);
  });

  test("correctly deletes a digit or . on DEL", () => {
    expect(
      handleAction(
        {
          ...initialState,
          currOperand: "19239",
        },
        "DEL"
      )
    ).toEqual({
      ...initialState,
      currOperand: "1923",
    });
    expect(
      handleAction(
        {
          ...initialState,
          currOperand: "192.",
        },
        "DEL"
      )
    ).toEqual({
      ...initialState,
      currOperand: "192",
    });
  });

  describe("correctly performs arithmetic operations", () => {
    test("sums two numbers up", () => {
      expect(
        handleAction(
          {
            currOperand: "10",
            operator: "+",
            prevOperand: "400",
            result: undefined,
          },
          "="
        )
      ).toEqual({
        ...initialState,
        prevOperand: "410",
        result: "410",
      });
    });

    test("subtracts a number from another", () => {
      expect(
        handleAction(
          {
            currOperand: "1000",
            operator: "-",
            prevOperand: "200",
            result: undefined,
          },
          "="
        )
      ).toEqual({
        ...initialState,
        prevOperand: "800",
        result: "800",
      });
    });

    test("multiply two numbers", () => {
      expect(
        handleAction(
          {
            currOperand: "175",
            operator: "*",
            prevOperand: "10",
            result: undefined,
          },
          "="
        )
      ).toEqual({
        ...initialState,
        prevOperand: "1750",
        result: "1750",
      });
    });
  });
});
