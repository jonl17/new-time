<script>
  import { auth, googleProvider } from "../../service/firebase.js";
  import { authState } from "rxfire/auth";
  import { user as storeUser } from "../../store.js";

  let user;

  const unsubscribe = authState(auth).subscribe(u => (user = u));

  const login = () => {
    auth.signInWithPopup(googleProvider);
    storeUser.set(user);
  };
</script>

<button on:click="{login}"></button>
