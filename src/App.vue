<template>
   <Navbar/>
   <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
export default {
  components : {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: antiquewhite;
}

body {
  background-image: url(https://i.postimg.cc/6qxDRgLP/bg-5.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}


</style>
