<template>
    <div class="project">
     <div class="card container my-4">
               <div class="card-inner">
                  <div class="card-head">
                    <p class="card-title">Project Title: Personal Portfolio</p>
                    <img src="https://i.postimg.cc/F1tQfC2p/Screenshot-2022-11-05-124509.png">
                  </div>
                  <div class="card-body">
                    <p class="overview">
                      Overview
                    </p>
                    <p class="overview-info">
                      I built a personal portfolio website using HTML, CSS, and Bootstrap on Visual Studio Code. This was my first project as a developer, and while it didn't come out exactly as I planned, it was a valuable learning experience.
                    </p>
                    <p>Tools and Technologies</p>
                    <div class="icons">
                      <div>
                        <i class="fa-brands fa-bootstrap"></i>
                      </div>
                      <div>
                        <i class="fa-brands fa-html5"></i>
                      </div>
                      <div>
                        <i class="fa-brands fa-css3-alt"></i>
                      </div>
                    </div>
                    <button class="button" @click="showInfo()">More Info</button>
                  </div>
                  <!-- <div class="buttons d-flex" >
                      <button type="button" class="btn btn-outline-secondary w-75"><a href="https://spontaneous-gumdrop-907cc0.netlify.app/" class="btn">netlify</a></button>
                      <button type="button" class="btn btn-outline-secondary"><a href="https://github.com/Siphamandla201/MY-PORTFOLIO.git" class="btn">git</a></button>
                  </div> -->
               </div>
               <div class="more-info">
                  <button class="close-btn" @click="closeInfo()"><i class="fa-solid fa-xmark"></i></button>
                  <div class="more-content">
                    <div class="info-item">
                      <p class="overview">
                        Challenges:
                    </p>
                    <p class="overview-info">
                      The biggest challenge I faced was trying to create a responsive layout that looked good on all screen sizes. I also struggled with some of the finer details, such as getting the font and colors to look just right.
                    </p>
                    </div>
                    <div class="info-item">
                      <p class="overview">
                        Approach:
                    </p>
                    <p class="overview-info">
                      I started by sketching out some rough ideas for the layout and content of the website. I then used HTML and CSS to create the basic structure and styling. I also incorporated Bootstrap to help with the responsive design.
                    </p>
                    </div>
                    <div class="info-item">
                      <p class="overview">
                        My Role:
                    </p>
                    <p class="overview-info">
                      I worked on this project alone, which gave me a chance to practice my coding skills and learn more about web development. I also gained experience in project planning and time management.
                    </p>
                    </div>
                    <div class="infoo-item">
                      <p class="overview">
                        Results:
                    </p>
                    <p class="overview-info">
                      While the website didn't turn out exactly as I had envisioned, I was still proud of the final product. I received positive feedback from friends and family who saw the website, and it helped me land my first job as a developer.
                    </p>
                    </div>
                  </div>
                  <div class="links">
                    <hr>
                    <div class="buttons d-flex" >
                        <button class="btn "><a href="https://spontaneous-gumdrop-907cc0.netlify.app/">netlify</a></button>
                        <button class="btn "><a href="https://github.com/Siphamandla201/MY-PORTFOLIO.git" >git</a></button>
                    </div> 
                  </div>
                </div>
     </div>
     <div class="card container my-4">
               <div class="card-inner">
                  <div class="card-head">
                    <p class="card-title">Project Title: Calculator</p>
                    <img src="https://i.postimg.cc/7P3cJqzz/calculator.png">
                  </div>
                  <div class="card-body">
                    <p class="overview">
                      Overview
                    </p>
                    <p class="overview-info">
                      I built a personal portfolio website using HTML, CSS, and Bootstrap on Visual Studio Code. This was my first project as a developer, and while it didn't come out exactly as I planned, it was a valuable learning experience.
                    </p>
                    <p>Tools and Technologies</p>
                    <div class="icons">
                      <div>
                        <i class="fa-brands fa-bootstrap"></i>
                      </div>
                      <div>
                        <i class="fa-brands fa-html5"></i>
                      </div>
                      <div>
                        <i class="fa-brands fa-css3-alt"></i>
                      </div>
                    </div>
                    <button class="button" @click="showInfo1()">More Info</button>
                  </div>
               </div>
               <div class="more-info more-1">
                  <button class="close-btn" @click="closeInfo()"><i class="fa-solid fa-xmark"></i></button>
                  <div class="more-content">
                    <div class="info-item">
                      <p class="overview">
                        Challenges:
                      </p>
                    <p class="overview-info">
                      The biggest challenge I faced was getting the decimal point (comma) button to work correctly. At first, the button could be pressed multiple times in the same instance, causing incorrect calculations. However, I was eventually able to fix that bug with  try and catch.
                    </p>
                    </div>
                    <div class="info-item">
                      <p class="overview">
                        Approach:
                      </p>
                    <p class="overview-info">
                      I started by creating a basic layout for the calculator using HTML and CSS. I then used JavaScript to create the functionality for the buttons, including addition, subtraction, multiplication, division, and decimal points.
                    </p>
                    </div>
                    <div class="info-item">
                      <p class="overview">
                        My Role
                      </p>
                      <p class="overview-info">
                        I worked on this project alone, which gave me a chance to practice my coding skills and learn more about JavaScript. I also gained experience in debugging and problem-solving.
                     </p>
                    </div>
                    <div class="infoo-item">
                      <p class="overview">
                        Results
                    </p>
                    <p class="overview-info">
                      While the calculator didn't turn out exactly as I had envisioned, I was still proud of the final product. I received positive feedback from friends and family who tried out the calculator, and it helped me gain confidence in my JavaScript skills.
                    </p>
                    </div>
                  </div>
                  <div class="links">
                    <hr>
                    <div class="buttons d-flex" >
                        <button class="btn "><a href="https://spontaneous-gumdrop-907cc0.netlify.app/">netlify</a></button>
                        <button class="btn "><a href="https://github.com/Siphamandla201/MY-PORTFOLIO.git" >git</a></button>
                    </div> 
                  </div>
                </div>
     </div>
     <div class="card container my-4">
               <div class="card-inner">
                  <div class="card-head">
                    <p class="card-title">Project Title: E-Commerce Site</p>
                    <img class="ecom" src="https://i.postimg.cc/3wjS4B4T/My-project-1-2.png">
                  </div>
                  <div class="card-body">
                    <p class="overview">
                      Overview
                    </p>
                    <p class="overview-info">
                      I built a personal portfolio website using HTML, CSS, and Bootstrap on Visual Studio Code. This was my first project as a developer, and while it didn't come out exactly as I planned, it was a valuable learning experience.
                    </p>
                    <p style="color: rgba(166,123,44,255);">Tools and Technologies</p>
                    <div class="icons">
                      <div>
                        <i class="fa-brands fa-bootstrap"></i>
                      </div>
                      <div>
                        <i class="fa-brands fa-html5"></i>
                      </div>
                      <div>
                        <i class="fa-brands fa-css3-alt"></i>
                      </div>
                    </div>
                    <button class="button" @click="showInfo2()">More Info</button>
                  </div>
                </div>
                
                <div class="more-info more-2">
                  <button class="close-btn" @click="closeInfo()"><i class="fa-solid fa-xmark"></i></button>
                  <div class="more-content">
                    <div class="info-item">
                      <p class="overview">
                      hedaer
                    </p>
                    <p class="overview-info">
                      I built a personal portfolio website using HTML, CSS, and Bootstrap on Visual Studio Code. This was my first project as a developer, and while it didn't come out exactly as I planned, it was a valuable learning experience.
                    </p>
                    </div>
                    <div class="info-item">
                      <p class="overview">
                      Overview
                    </p>
                    <p class="overview-info">
                      I built a personal portfolio website using HTML, CSS, and Bootstrap on Visual Studio Code. This was my first project as a developer, and while it didn't come out exactly as I planned, it was a valuable learning experience.
                    </p>
                    </div>
                    <div class="info-item">
                      <p class="overview">
                      Overview
                    </p>
                    <p class="overview-info">
                      I built a personal portfolio website using HTML, CSS, and Bootstrap on Visual Studio Code. This was my first project as a developer, and while it didn't come out exactly as I planned, it was a valuable learning experience.
                    </p>
                    </div>
                    <div class="infoo-item">
                      <p class="overview">
                      Overview
                    </p>
                    <p class="overview-info">
                      I built a personal portfolio website using HTML, CSS, and Bootstrap on Visual Studio Code. This was my first project as a developer, and while it didn't come out exactly as I planned, it was a valuable learning experience.
                    </p>
                    </div>
                  </div>
                  <div class="links">
                    <hr>
                    <div class="buttons d-flex" >
                        <button class="btn "><a href="https://spontaneous-gumdrop-907cc0.netlify.app/">netlify</a></button>
                        <button class="btn "><a href="https://github.com/Siphamandla201/MY-PORTFOLIO.git" >git</a></button>
                    </div> 
                  </div>
                </div>
     </div>
    </div>
  </template>
  <script>
  
  export default {
    name: "Projects",
    methods : {
     modalDisplay(className) {
       let element = document.querySelector(className);
       if (element.style.display === 'none') {
         element.style.display = 'block';
        } else {
          element.style.display = 'none';
        }
      },

      showInfo() {
        this.modalDisplay('.more-info')
      },
      showInfo1 () {
        this.modalDisplay('.more-1')
      },
      showInfo2() {
        this.modalDisplay('.more-2')
      },

      // showInfo() {
      //   let moreInfo = document.querySelector('.more-info');
      //   if (moreInfo.style.display === 'none') {
      //     moreInfo.style.display = 'block';
      //   } else {
      //     moreInfo.style.display = 'none';
      //   }
      // },
      // showInfo1() {
      //   let more1 = document.querySelector('.more-1');
      //   if (more1.style.display === 'none') {
      //     more1.style.display = 'block';
      //   } else {
      //     more1.style.display = 'none';
      //   }
      // },
      // showInfo2() {
      //   let more2 = document.querySelector('.more-2');
      //   if (more2.style.display === 'none') {
      //     more2.style.display = 'block';
      //   } else {
      //     more2.style.display = 'none';
      //   }
      // },
 
      closeInfo () {
        let info = document.querySelectorAll('.more-info', '.more-1', '.more-2');
        info.forEach(info => {
          if (info.style.display = 'block') {
            info.style.display = 'none'
          }else {
            info.style.display = 'block'
          }
        })
      }
      
      // closeInfo() {
      //   document.querySelectorAll('.more-info, .more-1, .more-2')
      //   .forEach(element => element.style.display = 'none');
      // },

      // closeInfo () {
      //   let moreInfo = document.querySelector('.more-info');
      //   let more1 = document.querySelector('.more-1');
      //   let more2 = document.querySelector('.more-2');
      //   if (moreInfo.style.display === 'block' || more1.style.display === 'block' || more2.style.display === 'block') {
      //     moreInfo.style.display = 'none';
      //     more1.style.display === 'none';
      //     more2.style.display === 'none';
      //   } else {
      //     moreInfo.style.display = 'none';
      //     more1.style.display === 'none';
      //     more2.style.display === 'none';
      //   }
      // }
    }
  };
</script>

<style scoped>

.project {
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
}

.card {
    width: 1100px;
    height: 400px;
    background-color:  rgba(10,10,10,255);
    border-radius: 0px;
}


.card-inner {
    width: 100%;
    height: 80%;
    display: flex;
    gap: 50px;
    padding: 20px;
}

.card-head {
  width: 350px;
  text-align: start;
}

.card-title {
  width: 350px;
  color: rgba(166,123,44,255);
}

img {
  width: 100%;
  height: 200px;
}

.ecom {
  width: 200px;
  margin-left: 50px;
}

.card-body {
  width: 400px;
  text-align: start;
  padding-top: 0px;
}

.overview {
  color: rgba(166,123,44,255);
}

.icons {
  width: 300px;
  height: 100px;
  display: flex;
  /* justify-content: start; */
  gap: 40px;
  margin-left: 10px;
}

.icons > div {
  width: 60px; 
  height: 60px;
  border: 3px rgba(166,123,44,255) solid;
  padding-left: 5px !important;
  padding-right: 5px !important;
  padding-bottom: 5px !important;
  padding-top: 10px !important;
  border-radius: 50px;
  text-align: center;
  padding-top: 5px;
  border: 2px rgba(166,123,44,255) solid;
} 


i {
  font-size: 35px;
  color: rgba(166,123,44,255);
}

.button {
    background-color: rgba(166,123,44,255);
    border: 2px rgba(166,123,44,255) solid;
    width: 250px;
    margin-left: 120px;
    padding-top: 5px;
    padding-bottom: 15px;
    height: 40px;

  }
  
.button:hover {
  background-color: transparent;
  font-weight: bold;
  color: rgba(166,123,44,255);
}

.more-info {
  width: 1200px;
  height: 450px;
  background-color:   rgba(10,10,10,255);
  position: absolute;
  top: -30px;
  left: -50px;
  display: none; 
}


.close-btn {
  margin-top: 15px;
  position: relative;
  left: 565px;
  background-color: transparent;
  border: none;
}

.more-content {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  justify-content: center;
  gap: 20px;
  text-align: start;

}

.links {
  padding: 10px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.links a {
  color: rgb(0,0,0);
  text-decoration: none;
}

.links a:hover {
  color: rgb(166,123,44);
  text-decoration: none;
}

hr {
  height: 5px;
  border: 0px;
  width: 1100px;
  background-color: rgb(166,123,44);
  margin-right: 20px;
}

.btn {
  background-color: rgb(166,123,44);
  color: rgb(0,0,0);
  width: 100px;
  margin-right: 10px;
}

.btn:hover {
  border: 2px rgb(166,123,44) solid;
  width: 100px;
  margin-right: 10px;
}

@media screen and (max-width: 720px) {
  .project {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    height: 140vh;
  } 
}

@media screen and (max-width: 420px) {
  .project {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    height: 75vh;
  }
  
  .card {
    width: 100px;
    height: 100px;
 }

 
  img {
  width: 60px;
  margin: auto 5px;
  margin-top: 5px;
 }

 .card-body {
   width: 400px;
   position: absolute;
   top: 0px;
 }

 p {
  font-size: x-small;
  margin: 0%;
  text-align: center;
 }

 button {
    width: 30px;
    margin-left: 1px;
    padding-top: 1px;
    padding-bottom: 5px;
    height: 14px;
 }

 
 button > a {
  font-size: xx-small;
  text-align: center;
  line-height: 0%;
  position: relative;
  top: -8px;
  left: -15px;
 }
}


</style>