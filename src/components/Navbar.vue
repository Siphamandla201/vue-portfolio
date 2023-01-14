<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link to="/resume">Resume</router-link> 
      <router-link to="/testimonials">Testimonials</router-link> 
      <router-link to="/projects">Projects</router-link> 
      <router-link to="/contact">Contact</router-link> 
    </nav>
    <router-view/> 
  </div>
</template>
<script>
export default {
    name : 'Navbar'
    
}
</script>
<style>


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: antiquewhite;
  margin-left: 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #2c3e50;
  text-decoration: dashed;
}
    
</style>