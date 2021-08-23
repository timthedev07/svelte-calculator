<script lang="ts">
  let name: string = "";
  let newToSvelte: boolean = true;
</script>

<!--
  react equivalent:

  const [name, setName] = useState<string>("");
  <input
    value={name}
    onChange={(e) => {
      setName(e.target.value);
    }}
  />
 -->
<h2>Just in case your forgot, your name is {name}</h2>
<input bind:value={name} />

<label>
  <input type="checkbox" bind:checked={newToSvelte} />
  New to svelte?
</label>

{#if newToSvelte}
  <div>Learn it!</div>
{:else}
  <div>Learn React!</div>
{/if}
