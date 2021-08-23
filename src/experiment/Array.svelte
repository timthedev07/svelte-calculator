<script lang="ts">
  let nums = [0, 1, 2, 3, 4];

  $: sum = nums.reduce((val, total) => val + total);
</script>

<h4>Numbers and sum</h4>
<pre>
    sum({JSON.stringify(nums)}) = {sum}
  </pre>
<button
  on:click={() => {
    nums = [...nums, nums.length];
  }}
>
  Add item
</button>
