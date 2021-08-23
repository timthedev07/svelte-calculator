<script lang="ts">
  import { onMount } from "svelte";

  let loggedIn = false;
  let apiResponse: Promise<any>;
  const people: Array<{ name: string; age: number }> = [
    {
      name: "Jason",
      age: 102,
    },
    {
      name: "Jonathan",
      age: 58,
    },
    {
      name: "Damon",
      age: 72,
    },
  ];

  const handleClick = () => {
    loggedIn = !loggedIn;
  };

  const randNum = async () => {
    const res = await fetch("https://svelte.dev/tutorial/random-number");
    const text = await res.text();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  };

  onMount(() => {
    apiResponse = randNum();
  });
</script>

<!-- Iterate over the people array, destructure each item, and get the current index as well -->
<!-- the `(name)` thing means we are using the name of the person as a key(like in react array.map)-->
{#each people as { name, age }, i (name)}
  <pre>
    Person #{i} {name} is {age} years old.
  </pre>
{/each}
<button on:click={handleClick}>
  {#if loggedIn} Logout {:else} Login {/if}
</button>

<!-- handling promises -->
<pre>
  {#await apiResponse}
    Fetching...
  {:then number}
    RandomNumber == {number}
  {:catch error}
	<p style="color: red">{error.message}</p>
  {/await}
</pre>
