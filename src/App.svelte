<script>
  import Wrap from "./components/wrap/index.svelte";
  import Login from "./components/login/index.svelte";
  import Profile from "./components/profile/index.svelte";
  import Boxes from "./components/boxes/index.svelte";

  import { auth, googleProvider } from "./service/firebase.js";
  import { authState } from "rxfire/auth";

  let user;

  const unsubscribe = authState(auth).subscribe(u => (user = u));

  const login = () => {
    auth.signInWithPopup(googleProvider);
  };
</script>

<main>
  {#if user}
  <Profile {...user}></Profile>
  <Wrap>
    <Boxes uid="{user.uid}"></Boxes>
  </Wrap>
  {:else}
  <button on:click="{login}"></button>
  {/if}
</main>

<style>
  h1 {
    text-align: center;
  }
</style>
