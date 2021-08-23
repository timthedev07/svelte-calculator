<script lang="ts">
  let loggedIn = false;

  const handleClick = () => {
    loggedIn = !loggedIn;
  };
</script>

<button on:click={handleClick}>
  {#if loggedIn} Logout {:else} Login {/if}
</button>
