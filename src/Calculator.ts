import { isNumber } from "./isNumber";
import { CalculatorState, Operator } from "./types";

export const operate = (
  operand0: string | undefined,
  operand1: string | undefined,
  operator: Operator
): number => {
  const num0 = parseInt(operand0 || "0");
  const num1 = parseInt(
    operand1 || (operator === "/" || operator === "*" ? "1" : "0")
  );

  switch (operator) {
    case "+": {
      return num0 + num1;
    }
    case "-": {
      return num0 - num1;
    }
    case "*": {
      return num0 * num1;
    }
    case "/": {
      if (operand1 === "0") {
        alert("Invalid 0 division.");
        return 0;
      } else {
        return num0 / num1;
      }
    }
    default: {
      throw Error(`Unknown operator '${operator}'`);
    }
  }
};

export const handleAction = (
  calculatorState: CalculatorState,
  key: string
): CalculatorState => {
  if (key === "AC")
    return {
      currOperand: undefined,
      result: undefined,
      operator: undefined,
      prevOperand: undefined,
    };

  if (key === "DEL")
    return {
      ...calculatorState,
      currOperand: calculatorState.currOperand
        ? calculatorState.currOperand.slice(0, -1)
        : undefined,
    };

  if (key === "=" && calculatorState.operator)
    return {
      currOperand: undefined,
      result: operate(
        calculatorState.currOperand,
        calculatorState.prevOperand,
        calculatorState.operator
      ).toString(),
      operator: undefined,
      prevOperand: calculatorState.currOperand,
    };

  if (isNumber(key)) {
    return {
      ...calculatorState,
      currOperand: (calculatorState.currOperand || "") + key,
    };
  }

  // then key is operator
  return {
    operator: key as Operator,
    currOperand: undefined,
    prevOperand: calculatorState.currOperand,
    result: undefined,
  };
};
