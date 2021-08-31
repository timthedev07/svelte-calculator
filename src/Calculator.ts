export const operate = (
  a: number | null,
  b: number | null,
  operator: Operator
): number => {
  const num0 = a || 0;
  const num1 = b || (operator === "/" || operator === "*" ? 1 : 0);

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
      if (b === 0) {
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
