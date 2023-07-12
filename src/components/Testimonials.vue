<template>
  <div class="testimonials">
    <div v-for="testimonial in testimonial" :key="testimonial" class="card">
      <div class="card-inner">
        <div class="card-profile">
          <img :src="testimonial.Image"/>
        </div>
        <div class="card-body">
          <p class="testimonial">
             <strong>"</strong>
             <br>
               {{ testimonial.Testimony }} 
              <br>
              <strong class="second-quote">"</strong>
          </p>
          <div class="test-info">
             <div class="info">
               <div class="hr"></div><h5 >{{ testimonial.Name }}</h5><div class="hr"></div> 
             </div>
             <div class="info">
              <div class="hr"></div><h5>{{ testimonial.Job }}</h5><div class="hr"></div>
             </div>
        </div>
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
          id : 2,
          Image : "https://i.postimg.cc/hvKXbkN5/DSC-3626.jpg",
          Name : "Asandile",
          Job : "Colleague",
          Testimony : "Siphamandla is a wonderful guy who likes to be in a welcoming environment. He loves team building activities and he is hard working, once he gets an idea on his mind he chase it to the end"
        },
        {
          id : 4, 
          Image : "https://i.postimg.cc/26845bCV/DSC-3517.jpg",
          Name : "Lindokuhle Mgoqi",
          Job : "Colleague",
          Testimony : "Siphamandla is a courageous individual who is always willing to learn and a huge team player"
        },
        {
          id : 6, 
          Image : "https://i.postimg.cc/4dkNWJ64/C11-1.jpg",
          Name : "Timothy Jennike",
          Job : "Colleague",
          Testimony : "Siphamandla is a dedicated and driven individual who has demonstrated personal growth and a strong desire to continue learning and improving. He puts maximum effort into achieving his objectives."
        },
        {
          id : 3,
          Image : "https://i.postimg.cc/GpWM8pTr/Joel-Profile-1.jpg",
          Name : "Joel Makunye",
          Job : "Lecturer",
          Testimony : "Siphamandla is a collaborative and imaginative student who excels in group projects. He has gain a large amount of experience in Bootstrap 5 and web development."
        },
      ]
    }
  }
};
</script>
<style scoped>
.testimonials {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* margin-top: 0px; */
  gap: 30px;
}
.card {
 width: 500px;
 height: 300px;
 background-color: transparent;
 border: none;
 
}

.card-inner {
  display: flex;
  gap: 10px;
}



.card-profile {
  width: 120px;
  height : 135px;
  padding-top: 5px;
}

img {
  width: 100%;
  height: 110%;
  object-fit: cover;
  border-radius: 40%; 
}

.card-body {
  text-align: justify;
  color: antiquewhite;
  padding: 0px;
  width: 300px;
}

.testimonial {
  padding: 0px ;
  width: 330px;
  margin: 0px 0px 0px;
}

strong { 
  font-size: 25px;
  color: rgb(0, 78, 78);
}

.second-quote {
  text-align: end;
  margin-left: 280px;
}

.test-info {
  margin-left: 25px;
}

.info {
  display: flex;
  width: max-content;
  height: 30px;
  align-items: center;
  gap: 5px;
}

h5 {
  margin: 0px;
  color: rgb(222, 161, 48);
}

.hr {
  width: 10px;
  height: 2px;
  /* border: 2px rgb(222, 161, 48) solid; */
  background-color: rgb(222, 161, 48);
  margin-bottom: 0px;
  display: flex;
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
