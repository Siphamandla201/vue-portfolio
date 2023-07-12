<template>
    <Navbar/>
    <section>
       <HomeView id="home"/>
       <AboutView id="about" />
       <ProjectsVeiw id="projects"/>
       <TestimonialView id="testimonial"/>
       <ContactViewVue id="contact"/>
     </section>
     <Footer/>
 </template>

<script>
import Navbar from '../components/Navbar.vue';
import HomeView from './HomeView.vue';
import AboutView from './AboutView.vue';
import ProjectsVeiw from './ProjectsVeiw.vue';
import TestimonialView from './TestimonialView.vue';
import ContactViewVue from './ContactView.vue';
import Footer from '../components/Footer.vue';


export default {
  name : "MultipleView",
  components : {
    Navbar,
    HomeView,
    AboutView,
    ProjectsVeiw,
    TestimonialView,
    ContactViewVue,
    Footer
  }
}
</script>