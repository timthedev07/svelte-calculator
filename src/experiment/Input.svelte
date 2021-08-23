<script lang="ts">
  let name: string = "";
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
