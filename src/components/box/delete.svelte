<script>
  import { tasks } from "../../store.js";
  export let taskId;

  const removeTask = id => {
    let newList = [];
    $tasks.forEach(task => {
      if (task.id !== taskId) {
        newList.push(task);
      }
    });
    tasks.set(newList);
  };
</script>

<i on:click="{removeTask(taskId)}" class="gg-trash"></i>

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
