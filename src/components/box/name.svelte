<script>
  let name;
</script>

<input placeholder="Project name" type="text" name="name" bind:value="{name}" />

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
