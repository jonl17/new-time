<script>
  import Plus from "../plus/index.svelte";
  import Empty from "../empty/index.svelte";
  import Box from "../box/index.svelte";

  // effects
  import { flip } from "svelte/animate";
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";

  // import { tasks } from "../../store.js";

  import { firestore } from "../../service/firebase.js";
  import { collectionData } from "rxfire/firestore";
  import { startWith } from "rxjs/operators";

  // User ID passed from parent
  export let uid;

  const query = firestore
    .collection("tasks")
    .where("uid", "==", uid)
    .orderBy("created");

  const tasks = collectionData(query, "id").pipe(startWith([]));

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

<Plus {uid}></Plus>
{#if $tasks.length < 1}
<Empty></Empty>
{:else} {#each [...$tasks].reverse() as task (task.id)}
<div
  in:receive="{{key: task.id}}"
  out:send="{{key: task.id}}"
  animate:flip="{{duration: 400}}"
>
  <Box {uid} {...task}></Box>
</div>
{/each} {/if}
