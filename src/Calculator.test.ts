import { describe, test, expect } from "@jest/globals";
import { handleAction } from "./Calculator";
import { CalculatorState } from "./types";

const initialState = {
  currOperand: undefined,
  operator: undefined,
  prevOperand: undefined,
} as CalculatorState;

describe("Calculator action handler", () => {
  test("correctly clears everything on AC", () => {
    expect(
      handleAction(
        {
          currOperand: "3",
          operator: "+",
          prevOperand: "200",
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

  test("correctly appends digit to the current operand", () => {
    expect(
      handleAction(
        {
          ...initialState,
          currOperand: "1234",
        },
        "5"
      )
    ).toEqual({
      ...initialState,
      currOperand: "12345",
    });
  });

  test("correctly handles operator click", () => {
    expect(
      handleAction(
        {
          ...initialState,
          currOperand: "30",
          operator: undefined,
        },
        "+"
      )
    ).toEqual({
      prevOperand: "30",
      currOperand: undefined,
      operator: "+",
    });
  });

  describe("correctly performs arithmetic operations", () => {
    test("addition", () => {
      expect(
        handleAction(
          {
            currOperand: "10",
            operator: "+",
            prevOperand: "400",
          },
          "="
        )
      ).toEqual({
        ...initialState,
        currOperand: "410",
      });
    });

    test("subtraction", () => {
      expect(
        handleAction(
          {
            currOperand: "200",
            operator: "-",
            prevOperand: "1000",
          },
          "="
        )
      ).toEqual({
        ...initialState,
        currOperand: "800",
      });
    });

    test("multiplication", () => {
      expect(
        handleAction(
          {
            prevOperand: "175",
            currOperand: "10",
            operator: "*",
          },
          "="
        )
      ).toEqual({
        ...initialState,
        currOperand: "1750",
      });
    });

    test("division", () => {
      expect(
        handleAction(
          {
            prevOperand: "175",
            currOperand: "10",
            operator: "/",
          },
          "="
        )
      ).toEqual({
        ...initialState,
        currOperand: "17.5",
      });
    });

    test("modulo", () => {
      expect(
        handleAction(
          {
            prevOperand: "175",
            currOperand: "10",
            operator: "%",
          },
          "="
        )
      ).toEqual({
        ...initialState,
        currOperand: "5",
      });
    });
  });
});
