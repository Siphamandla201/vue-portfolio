<template>
  <div class="about">
    <div class="about-content">
      <div class="about-profile">
        <div class="profile-frame"></div>
        <img src="https://i.postimg.cc/xTCNZ3JX/picture.jpg" alt="profile image">
      </div>
      <div class="about-text">
        <br>
        <p>
          My name is Siphamandla Mlanjana, a passionate young Xhosa developer from South Africa. My love for coding started at a young age, as I was fascinated by how machines communicate and operate. As a result, I decided to pursue a career in programming, with the goal of becoming the best developer I can be. I am highly motivated and committed to achieving excellence in my work, and I am constantly expanding my skillset to stay current with the latest trends and technologies. My ultimate objective is to use my knowledge and expertise to develop innovative and effective solutions that can make a positive impact on the world.
        </p>
      </div>
    </div>
    <div>
      <Education></Education>
    </div>
  </div>
</template>

<script>
import Education from '@/components/Education.vue';

export default {
  name : "AboutView",
  components: {
    Education,
  } 

}

</script>

<style scoped>
.about {
   height: auto;

}

.about-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  word-wrap: none;
  word-break: keep-all;
  position: relative;
  height: 400px;
  margin-bottom: 50px;
}

.about-profile, .about-text {
  flex: 50%;
}

.about-text {
  text-align: justify;
}

.about-text > p {
  font-size: large;
  margin-right: 30px;
  height: 300px;
  width: 550px;
}

.about-profile {
  width: 100%;
  margin: auto auto;

}

.about-profile > .profile-frame {
  width: 280px;
  height: 280px;
  margin: auto auto;
  border: 5px  rgb(222, 161, 48)  solid;
  z-index: 1;
  position: absolute;
  top: 0px;
  left: 200px;

}

.about-profile > img {
  width: 280px;
  margin: 30px auto;
  position: absolute;
  top: 70px;
  left: 300px;
  z-index: 0;

}


@media screen and (max-width: 1030px) {
  .about-profile {
  flex: 50%;
 } 

 .about-profile > img {
  width: 280px;
  margin: 30px auto;
  position: absolute;
  border: 5px  rgb(222, 161, 48)  solid;
  top: -10px;
  left: 120px;
  z-index: 0;

}

.about-profile > .profile-frame {
   display: none;
}

  
  .about-text {
  flex: 50%;
 }

 .about-text > p {
  font-size: medium;
  margin-right: 0px !important;
  height: 300px;
  width: 450px;
}

}

@media screen and (max-width: 780px) {
  
  about-content {
    display: flex;
  }

  .about-profile, .about-text {
  flex: 50%;
 }

 .about-text > p {
  font-size: small;
  margin-left: 350px ;
  padding: 10px;
  width: 400px;
 }
  
}

@media screen and (max-width: 600px) {

  .more-info {
  font-size: small;
 }

 .about-text {
  padding: 10px;
 }

 .about-text > p {
  font-size: small;
 }

 h3 {
  display: none;
 }
  
}

</style>
