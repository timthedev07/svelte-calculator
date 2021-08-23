<script lang="ts">
  let count = 0;

  // the variable doubled is a reactive value it changes whenever count changes
  // so count is a dependency
  $: doubled = count * 2;

  // reactive if statement
  // the condition gets evaluated whenever the count changes
  $: if (count > 10) alert("Stop clicking!");
</script>

<main>
  <h4>Count: {count} & Doubled Count: {doubled}</h4>
  <button
    on:click={() => {
      // this is like set state but you are literally mutating the state
      count++;
    }}
  >
    Increment
  </button>

  <button
    on:click={() => {
      count--;
    }}
  >
    Decrement
  </button>
</main>

<style>
</style>
