<script>
  import Name from "./name.svelte";
  import Time from "./time.svelte";
  import Delete from "./delete.svelte";

  import { flip } from "svelte/animate";

  export let box;
</script>

<div style="--color:{box.color}">
  <Delete taskId="{box.id}"></Delete>
  <Name></Name>
  <Time></Time>
</div>

<style>
  div {
    background-color: var(--color);
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
</style>
