<script lang="ts">
</script>

<main>
  <div class="calculator">
    <div class="window-title">
      <img src="images/windowIcons.svg" alt="" />
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
    width: 23vw;
    min-width: 280px;
    min-height: 385px;
    aspect-ratio: 8 / 11;
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
</style>
