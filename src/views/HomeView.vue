<template>
  <div class="home">
    <div class="landing-page" style="text-align: center;margin: 50px auto;">
      <p>
        Hi <br> My Name is
      </p>
      <h2>
        Siphamandla Mlanjana
      </h2>
      <h4>
        Aspiring Developer
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .home {
    height: 100vh;
  }
  .landing-page {
    width: 100%;
    position: absolute;
    overflow: hidden;
  }

  h2 {
    position: relative;
    animation: mymove 5s linear forwards;
  }

  h4 {
    position: relative;
    animation: move 5s linear forwards;
  }

  p {
    position: relative;
    animation: grow 4s forwards ;
  }

  @keyframes mymove {
  from {
    left: 600px;
  }
  to {
    left: 0px;
  }
 }

  @keyframes move {
  from {
    left: -600px;
  }
  to {
    left: 0px;
  }
 }

 @keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.5);
  }
 }

</style>