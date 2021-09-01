import { isNumber } from "./isNumber";
import { CalculatorState, Operator } from "./types";

export const operate = (
  operand0: string | undefined,
  operand1: string | undefined,
  operator: Operator
): number => {
  const num0 = parseFloat(operand0 || "0");
  const num1 = parseFloat(
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
    case "%": {
      return num0 % num1;
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

  if (key === "=" && calculatorState.operator) {
    console.log(calculatorState);
    const operationResult = operate(
      calculatorState.prevOperand,
      calculatorState.currOperand,
      calculatorState.operator
    ).toString();
    return {
      currOperand: operationResult,
      operator: undefined,
      prevOperand: undefined,
    };
  }

  if (isNumber(key)) {
    return {
      ...calculatorState,
      currOperand:
        calculatorState.currOperand === "0"
          ? key
          : (calculatorState.currOperand || "") + key,
    };
  }

  // then key is operator
  if (calculatorState.currOperand || calculatorState.prevOperand) {
    // if there isn't already a operator,
    // update operator and move curr operand to prev operand
    if (!calculatorState.operator) {
      return {
        operator: key as Operator,
        currOperand: undefined,
        prevOperand: calculatorState.currOperand,
      };
    } else {
      // if the user wants to change the operator before entering the next operand
      return {
        ...calculatorState,
        operator: key as Operator,
      };
    }
  } else {
    return calculatorState;
  }
};
