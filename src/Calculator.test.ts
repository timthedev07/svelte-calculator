import { describe, test, expect } from "@jest/globals";
import { handleAction } from "./Calculator";
import { CalculatorState } from "./types";

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
    ).toEqual({
      currOperand: undefined,
      operator: undefined,
      prevOperand: undefined,
      result: undefined,
    } as CalculatorState);
  });
});
