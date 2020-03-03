<script>
  import { tasks, colors, colorIndex, id } from "../../store.js";
  import { firestore } from "../../service/firebase.js";

  export let uid;

  let counter = 1;

  const addNewTask = color => {
    tasks.set([...$tasks, { id: $id, color: $colors[$colorIndex] }]);
    if ($colorIndex === $colors.length - 1) {
      $colorIndex = 0;
    } else {
      $colorIndex += 1;
    }
    $id += 1;
    if ($id % 2 === 0) {
      document.getElementById("plus").style.transform = "rotate(0deg)";
    } else {
      document.getElementById("plus").style.transform = "rotate(90deg)";
    }
  };

  const addGoogleTask = () => {
    firestore.collection("tasks").add({
      uid,
      name: "Untitled",
      created: Date.now(),
      time: 0,
      color: $colors[$colorIndex]
    });
    if ($colorIndex === $colors.length - 1) {
      $colorIndex = 0;
    } else {
      $colorIndex += 1;
    }
    if (counter % 2 === 0) {
      document.getElementById("plus").style.transform = "rotate(90deg)";
    } else {
      document.getElementById("plus").style.transform = "rotate(0deg)";
    }
    counter += 1;
  };
</script>

<div on:click="{addGoogleTask}" id="wrap">
  <div id="plus">
    <span id="one"></span>
    <span id="two"></span>
  </div>
</div>

<style>
  #wrap {
    box-sizing: border-box;
    padding: 6rem;
  }
  #plus {
    position: relative;
    height: 100%;
    width: 100%;
    transition: 0.2s;
  }
  #plus:hover {
    cursor: pointer;
  }
  span {
    width: 100%;
    border-bottom: 8px solid;
    position: absolute;
    height: 4px;
    top: 50%;
    margin-top: -4px;
  }
  #one {
    transform: rotate(90deg);
  }
</style>
