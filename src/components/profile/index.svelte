<script>
  export let displayName;
  export let photoURL;
  // export let uid;
</script>

<div id="wrap">
  <div id="inner-wrap">
    <h2>Ahoy, {displayName}!</h2>
    <img src="{photoURL}" alt="display-pic" />
  </div>
</div>

<style>
  #wrap {
    height: 5rem;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  img {
    height: 100%;
    object-fit: contain;
  }
  h2 {
    margin: 0.5rem;
  }
</style>
