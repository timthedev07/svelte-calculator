export type Operator = "+" | "-" | "*" | "/" | "%";

export interface CalculatorState {
  result?: string;
  prevOperand?: string;
  currOperand?: string;
  operator?: Operator;
}
