<script lang="ts">
</script>

<main>
  <div class="calculator">
    <div class="window-title">
      <img src="images/windowIcons.svg" alt="" />
    </div>
    <div class="calculator-grid">
      <div class="output">
        <div class="prev-operand" />
        <div class="curr-operand" />
      </div>
      <button>AC</button>
      <button>DEL</button>
      <button>%</button>
      <button>÷</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>x</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>+</button>
      <button class="double-width">0</button>
      <button>.</button>
      <button>=</button>
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
    height: 385px;
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
    background-color: rgb(32, 32, 36);
  }

  .calculator-grid {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 65px);
    grid-template-rows: minmax(65px, auto) repeat(5, 69px);
  }
</style>
