<script lang="ts">
</script>

<main>
  <div class="calculator">
    <div class="window-title">
      <img src="images/windowIcons.svg" alt="" />
    </div>
    <div class="output">
      <div class="prev-operand">123</div>
      <div class="curr-operand">8347347924728947239843</div>
    </div>
    <div class="calculator-grid">
      <button>AC</button>
      <button>DEL</button>
      <button>%</button>
      <button class="operator">÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="operator">x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button class="operator">-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="operator">+</button>
      <button class="double-width">0</button>
      <button>.</button>
      <button class="operator">=</button>
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
    /* aspect-ratio: 14 / 25; */
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
