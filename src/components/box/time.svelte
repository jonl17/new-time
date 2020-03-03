<script>
  import { onDestroy } from "svelte";
  import { secondsToHms } from "../../functions";

  let on = false;

  const interval = setInterval(() => (on ? (time += 1) : null), 1000);

  function triggerTimer() {
    on ? (on = false) : (on = true);
  }

  export let id;
  export let time;
</script>

<p>{time === 0 ? "0s" : secondsToHms(time)}</p>

<button style="--border:{on ? 'solid' : 'none'}" on:click="{triggerTimer}">
  {on ? "Stop" : "Start"}
</button>

<style>
  p {
    color: #edf7fa;
    font-size: 2rem;
  }
  button {
    border: var(--border) green;
    transition: border 0.2s;
    padding: 1rem;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
  }
  button:active {
    background: #edf7fa;
  }
  button:hover {
    cursor: pointer;
  }
</style>
