export type Operator = "+" | "-" | "*" | "/" | "%";

export interface CalculatorState {
  result?: number;
  currentOperand?: number;
  operator?: Operator;
}
