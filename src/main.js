import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    tasks: [{ id: 0 }]
  }
});

export default app;
