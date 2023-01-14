<template>
  <div class="about">
    <div class="about-content">
      <div class="about-profile">
        <img src="https://i.postimg.cc/xTCNZ3JX/picture.jpg" alt="profile image">
      </div>
      <div class="about-text">
        <h3>
          About Me
        </h3>
        <br>
        <p>

          Hi my name is Siphamandla Mlanjana and I'm a young Xhosa man from South Africa, who fell in love with coding at a very young age. Growing up i was always glued to the tv 
          screen, wondering how machines work and how they communicated. When i found out that people could do that 
          through code i wanted nothing else besides that. So now that I have the 
          opportunity to do that, i intend to be the best developer i can be. 
        </p>
      </div>
    </div>
    <div class="more-info">
      <p style="color: #2c3e50;"> 
        D.O.B: 09/06/2001 <br>
        Country: South Africa <br>
        Location: Cape Town <br>
        E-mail: mlannjanasiphamandla@gmail.com <br>
        Phone: + (27) 81 488 6388 <br>
        <b>Freelance: Available</b>
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
   height: 100vh;

}

.about-content {
  display: flex;
  justify-content: space-between;
}

.about-profile, .about-text {
  flex: 50%;
}

.about-text {
  padding: 20px;
  text-align: justify;
}

.about-text > p {
  font-size: large;
}

.about-profile {
  width: 100%;
  margin: auto auto;

}

.about-profile > img {
  width: 50%;
  margin: 30px auto;

}

.more-info {
  font-size: x-large;
}

@media screen and (max-width: 800px) {
  .about-profile, .about-text {
  flex: 40%;
 }
  .about-content {
    flex-direction: column;
 }

  .more-info {
  font-size: small;
 }

 h3 {
  font-size: medium;
  margin: 0px;
  text-align: start;
 }

 .about-text > p {
  font-size: large;
  margin: 0px;
  padding: 10px;
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
