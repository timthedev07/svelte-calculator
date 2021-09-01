<script lang="ts">
  import { handleAction } from "./Calculator";

  import type { CalculatorState } from "./types";

  let calculatorState: CalculatorState = {};

  const handleClick: svelte.JSX.MouseEventHandler<HTMLButtonElement> = (e) => {
    calculatorState = handleAction(calculatorState, e.currentTarget.name);
  };
</script>

<main>
  <div class="calculator">
    <div class="window-title">
      <img src="images/windowIcons.svg" alt="" />
    </div>
    <div class="output">
      <div class="prev-operand">{calculatorState.prevOperand || ""}</div>
      <div class="curr-operand">
        {calculatorState.currOperand || ""}
      </div>
    </div>
    <div class="calculator-grid">
      <button on:click={handleClick} name="AC">AC</button>
      <button on:click={handleClick} name="DEL">DEL</button>
      <button on:click={handleClick} name="%">%</button>
      <button on:click={handleClick} name="/" class="operator">÷</button>
      <button on:click={handleClick} name="7">7</button>
      <button on:click={handleClick} name="8">8</button>
      <button on:click={handleClick} name="9">9</button>
      <button on:click={handleClick} name="*" class="operator">x</button>
      <button on:click={handleClick} name="4">4</button>
      <button on:click={handleClick} name="5">5</button>
      <button on:click={handleClick} name="6">6</button>
      <button on:click={handleClick} name="-" class="operator">-</button>
      <button on:click={handleClick} name="1">1</button>
      <button on:click={handleClick} name="2">2</button>
      <button on:click={handleClick} name="3">3</button>
      <button on:click={handleClick} name="+" class="operator">+</button>
      <button on:click={handleClick} name="0" class="double-width">0</button>
      <button on:click={handleClick} name=".">.</button>
      <button on:click={handleClick} name="=" class="operator">=</button>
    </div>
  </div>
</main>

<style>
  main {
    background-color: #303030;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .calculator {
    background-color: rgb(45, 46, 53);
    width: 280px;
    height: 480px;
    border-radius: 7px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.849);
  }
  .window-title {
    padding-left: 10px;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .calculator-grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 70px);
    grid-template-rows: minmax(70px, auto) repeat(5, 70px);
  }

  .calculator-grid button {
    border: 1px black solid;
    border-radius: 0;
    outline: none;
    color: white;
    background-color: #5c5c5cce;
    font-size: 1.2rem;
  }

  .calculator-grid button:hover {
    background-color: #757575ce;
  }

  .double-width {
    grid-column: span 2;
  }

  .output {
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    padding: 10px;
  }

  .output * {
    color: white;
    overflow: auto;
    width: 100%;
    text-align: right;
  }

  .prev-operand {
    font-size: 0.5rem;
  }

  .curr-operand {
    font-size: 1.6rem;
    height: 50px;
  }

  .operator {
    background-color: rgb(221, 144, 0) !important;
  }
  .operator:hover {
    background-color: rgb(224, 180, 98) !important;
  }
</style>
