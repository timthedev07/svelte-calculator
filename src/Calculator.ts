import { Operator } from "./types";

export const operate = (
  operand0: number | null,
  operand1: number | null,
  operator: Operator
): number => {
  const num0 = operand0 || 0;
  const num1 = operand1 || (operator === "/" || operator === "*" ? 1 : 0);

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
      if (operand1 === 0) {
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
