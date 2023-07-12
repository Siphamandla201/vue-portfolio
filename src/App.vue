<template>
  <section>
     <MultipleView/>
  </section>
</template>

<script>
import MultipleView from './views/MultipleView.vue';



export default {
  components : {
    MultipleView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color:  rgb(0, 0, 0);
  color: rgb(250, 250, 250);
  overflow-x: hidden;
}

</style>
