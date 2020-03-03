<div id="outer-wrap">
  <div id="inner-wrap">
    <i class="gg-toolbox"></i>
    <p>
      Get to work!
    </p>
  </div>
</div>
<link href="https://css.gg/toolbox.css" rel="stylesheet" />

<style>
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  #outer-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    animation: appear 2s ease 1s forwards infinite alternate;
  }
  #inner-wrap {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  i {
    color: gray;
  }
  p {
    color: gray;
    padding-left: 1rem;
  }
</style>
