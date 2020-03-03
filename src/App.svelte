<script>
  import Wrap from "./components/wrap/index.svelte";
  import Box from "./components/box/index.svelte";
  import Plus from "./components/plus/index.svelte";
  import Empty from "./components/empty/index.svelte";

  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";

  import { tasks } from "./store.js";

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
      };
    }
  });
</script>

<h1>My tasks</h1>
<Wrap>
  <Plus></Plus>
  {#if $tasks.length < 1}
  <Empty></Empty>
  {:else} {#each [...$tasks].reverse() as task (task.id)}
  <div
    in:receive="{{key: task.id}}"
    out:send="{{key: task.id}}"
    animate:flip="{{duration: 400}}"
  >
    <Box class="box" box="{task}"></Box>
  </div>
  {/each} {/if}
</Wrap>

<style>
  h1 {
    text-align: center;
    text-transform: uppercase;
  }
  .box {
    background-color: #edf7fa;
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 1rem;
    margin: 0 auto;
  }
</style>
