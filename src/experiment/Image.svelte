<script lang="ts">
  const src = "images/favoritetechnologies.jpg";
</script>

<!-- when the variable and the prop name have the same name
     we can simplify `prop={prop}` to `{prop}` -->
<img {src} alt="" />

<style>
  img {
    width: 100%;
  }
</style>
