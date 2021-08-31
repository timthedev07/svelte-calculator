export type Operator = "+" | "-" | "*" | "/" | "%";

export interface CalculatorState {
  result?: string;
  currentOperand?: string;
  operator?: Operator;
}
