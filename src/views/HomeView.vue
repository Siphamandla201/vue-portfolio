<template>
  <div class="home">
    <div class="background">
    <div class="landing-page" style="text-align: start;padding-left: 100px;">
      <div class="name">
       <h1>
         Mlanjana
        </h1> 
        <h2>
          Siphamandla
        </h2>
      </div>
      <h5>
        Web Developer
      </h5>
    </div>
    <div class="banner">
      <div class="conners" id="conner-1"></div>
      <div class="statement">
        <h2>
          Transforming your vision into reality
        </h2>
        <p>
          Hi, I am an entry-level web developer who is dedicated to bringing your vision to life through custom web development solutions that meet your unique needs and requirements.
        </p>
      </div>
      <div class="conners" id="conner-2"></div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name : "HomeView"
  
}
</script>
<style scoped>
  .home {
    height: 100vh;
    background-image: url('https://i.postimg.cc/KvjYfWSs/background-21.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    margin-bottom: 35px;
  }

  .name {
    margin-top: 200px;
  }
  .landing-page {
    width: 100%;
    position: absolute;
    overflow: hidden;
  }

  h1 {
    position: relative;
    font-weight:600;
    font-size: 35px;
    margin: 0px;
  }

  .name > h2 {
    position: relative;
    font-weight:600;
    font-size: 60px;
  }

  h5 {
    position: relative;
    color: rgb(0, 78, 78);
  }

  p {
    position: relative;
    width: 400px;
  }

  .conners {
    width: 100px;
    height: 100px;
    margin: 50px;
  }

  .banner {
    position: absolute;
    top: 430px;
    height: 400px;
  }


  .statement {
    width: 450px;
    height: 300px;
    text-align: justify;
    position: relative;
    left: 950px;

  }

  .statement > h2 {
    color: rgb(0, 78, 78);
    font-weight: bold;
  }

  #conner-1 {
    position: absolute;
    top: 90px;
    left: 1300px;
    border-right: 5px rgb(222, 161, 48) solid;
    border-bottom: 5px rgb(222, 161, 48) solid;
  }

  #conner-2 {
    position: absolute;
    top: -85px;
    left: 910px;
    border-left: 5px rgb(222, 161, 48) solid;
    border-top: 5px rgb(222, 161, 48) solid;
  }


  @media screen and (max-width: 1440px) {

    .banner {
    top: 415px;
  }

    .statement {
    left: 900px;

  }

  #conner-1 {
    top: 40px;
    left: 1230px;
  }

  #conner-2 {
    top: -75px;
    left: 810px;
  }

  }

  @media screen and (max-width: 1025px) {
    .home {
    background-image: url('https://i.postimg.cc/1Xq9bZPR/Black-Design-Iphone-Wallpapers-Iphone-Wallpapers-DC3.jpg');
    background-blend-mode: overlay;
  }

  .name {
    margin-top: 150px;
  }

  h1 {
    font-weight:500;
    font-size: 25px;
  }

  .name > h2 {
    font-size: 40px;
  }

  h5 {
    font-size: 20px;
  }

  
  .conners {
    width: 80px;
    height: 80px;
    margin: 30px;
  }
  
  .banner {
    top: 330px;
    height: 250px;
  }
  
  
  .statement {
    width: 450px;
    height: 250px;
    left: 530px;
    text-align: justify;
    
  }
  
  .statement > h2 {
    font-weight: bold;
    scale: 0.8;
    width: 80%;
  }
  
  p {
    scale: 0.8;
    width: 80%;
  }
  #conner-1 {
    scale: 0.8;
    top: 90px;
    left: 800px;
  }

  #conner-2 {
    scale: 0.8;
    top: -60px;
    left: 480px;
  }

  }

  @media screen and (max-width: 770px) {

  .home {
    height: 630px;
    margin: 0px !important;
  }
    
  .statement {
    left: 380px; 
    top : -20px;   
  }
  
  #conner-1 {
    left: 630px;
    top : 60px

  }

  #conner-2 {
    left:350px;
  }

  }

  @media screen and (max-width: 435px){

    .home {
    background-image: url('https://i.postimg.cc/1Xq9bZPR/Black-Design-Iphone-Wallpapers-Iphone-Wallpapers-DC3.jpg');
    background-size: auto;
    height: 500px;
  }

    .banner {
      display: none;
    }

    .landing-page {
      padding-top: 50px;
      text-align: center !important;
      padding-left: 0px !important;
    }
    
  }




</style>