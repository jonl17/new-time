<script>
  import { tasks } from "../../store.js";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let id;

  const remove = () => {
    dispatch("remove", { id });
  };
</script>

<i on:click="{remove}" class="gg-trash"></i>

<link href="https://css.gg/trash.css" rel="stylesheet" />
<style>
  i {
    position: absolute;
    bottom: 2rem;
    right: 3rem;
    margin: 0;
  }
  i:hover {
    cursor: pointer;
  }
</style>
