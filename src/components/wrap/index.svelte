<div>
  <slot></slot>
</div>

<style>
  div {
    position: relative;
    padding: 0 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17.5em, 17.5rem));
    grid-auto-rows: 17.5rem;
    grid-gap: 0.5rem;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    div {
      justify-content: center;
    }
  }
</style>
