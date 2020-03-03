<script>
  import { firestore } from "../../service/firebase.js";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  function updateName() {
    firestore
      .collection("tasks")
      .doc(id)
      .update({ name: name });
  }

  export let id;
  export let name;
</script>

<input
  on:change="{updateName}"
  placeholder="Project name"
  type="text"
  name="name"
  bind:value="{name}"
/>

<style>
  ::placeholder {
    color: #edf7fa;
  }
  input {
    background: none;
    border: none;
    width: 100%;
    color: #edf7fa;
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
  }
  input:focus {
    outline: none;
  }
</style>
