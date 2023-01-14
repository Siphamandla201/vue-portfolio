<template>
  <div class="testimonials">
    <div v-for="testimonial in testimonial" :key="testimonial" class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="testimonial.Image" style="width: 80%;height: 70%;padding: 5px; margin-bottom: 15px;"/>
          <h5 style="margin: 0px">{{ testimonial.Name }}</h5>
          <p>{{ testimonial.Job }}</p>
        </div>
        <div class="flip-card-back">
          <p style="padding: 20px;font-size: small;">{{ testimonial.Testimony }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Testimonials",
  data () {
    return {
      testimonial : [
        {
          id : 1,
          Image : "https://i.postimg.cc/wvvwsTbt/Gift-Mahlangu.jpg",
          "Name" : "Gift Mahlangu",
          "Job" : "Colleague",
          "Testimony" : "Siphamandla is a determined and hard working person who is passionate about coding. he has great communication skills coupled with a great personality"
        },
        {
          id : 2,
          Image : "https://i.postimg.cc/hvKXbkN5/DSC-3626.jpg",
          Name : "Asandile",
          Job : "Colleague",
          Testimony : "Siphamandla is a wonderful guy who likes to be in a welcoming environment. He loves team building activities and he is hard working, once he gets an idea on his mind he chase it to the end"
        },
        {
          id : 3,
          Image : "https://i.postimg.cc/GpWM8pTr/Joel-Profile-1.jpg",
          Name : "Joel Makunye",
          Job : "Colleague",
          Testimony : "Siphamandla is a very creative student. He enjoys working with his classmates and works well on his projects.  He has gained knowledge of web development, including Bootstrap 5."
        },
        {
          id : 4, 
          Image : "https://i.postimg.cc/26845bCV/DSC-3517.jpg",
          Name : "Lindokuhle Mgoqi",
          Job : "Colleague",
          Testimony : "Siphamandla is a courageous individual who is always willing to learn and a huge team player"
        },
        {
          id : 5,
          Image : "https://i.postimg.cc/4yL9TCRv/DSC-3496.jpg",
          Name : "Luntu Sogeyana",
          Job : "Lecturer",
          Testimony : "Siphanmandla is a hardworking individual who isn't afraid to ask for help when he needs it. He is very assertive and creative, gives his all when doing a project, aims high, and does his best to achieve those goals, You will not regret having him in your team."
        },
        {
          id : 6, 
          Image : "https://i.postimg.cc/4dkNWJ64/C11-1.jpg",
          Name : "Timothy Jennike",
          Job : "Colleague",
          Testimony : "Siphamandla is a guy who gives his all to any project and goal that he sets out for himself. He has shown alot of growth over the period that I know him for and he is always eager to learn more and better himself and his craft."
        },
      ]
    }
  }
};
</script>
<style scoped>
.testimonials {
  height: 140vh;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  gap: 30px;
}
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  border: 1px solid #2c3e50;
  perspective: 1000px;
  margin: 30px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1.5s ease-in forward;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  color:  antiquewhite;
  /* z-index: 20; */
}

.flip-card-back {
  text-align: center;
  color: antiquewhite;
  transform: rotateY(180deg);
}

@media screen  and (max-width: 1200px) { 
  .testimonials {
    grid-template-columns: repeat(2, 1fr);
    padding: 0px;
    gap: 5px;
    height: 150vh;
  }

  .flip-card {
    margin: 10px auto;
  }
  
}


@media screen  and (max-width: 600px) { 
  .testimonials {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }

  .flip-card {
  background-color: transparent;
  width: 180px;
  height: 200px;
  margin: 10px auto;
}
  
}

@media screen  and (max-width: 400px) { 
  .testimonials {
    grid-template-columns: 1fr;
    gap: 5px;
    height: 200vh;
  }

  .flip-card {
  background-color: transparent;
  width: 180px;
  height: 200px;
  margin: 10px auto;
}
  
}



</style>
