<script>
  import Name from "./name.svelte";
  import Time from "./time.svelte";
  import Delete from "./delete.svelte";

  import { flip } from "svelte/animate";

  import { firestore } from "../../service/firebase.js";

  const removeTask = event => {
    const { id } = event.detail;
    firestore
      .collection("tasks")
      .doc(id)
      .delete();
  };

  export let uid;
  export let id;
  export let name;
  export let color;
  export let time;
</script>

<div style="--color:{color}">
  <Delete on:remove="{removeTask}" {id}></Delete>
  <Name {id} {name}></Name>
  <Time {id} {time}></Time>
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
