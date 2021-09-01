export type Operator = "+" | "-" | "*" | "/" | "%";

export interface CalculatorState {
  prevOperand?: string;
  currOperand?: string;
  operator?: Operator;
}
