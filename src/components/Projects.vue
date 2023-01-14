<template>
    <div class="project">
     <div v-for="project in projects" :key="project" class="card container my-4">
               <div class="card-inner">
                  <img :src="project.Image">
                  <p style="margin-top: 10px;">{{ project.Name }}</p>
                  <div class="buttons d-flex" >
                      <button type="button" class="btn btn-outline-secondary w-75"><a v-bind:href="project.Netlify" class="btn">netlify</a></button>
                      <button type="button" class="btn btn-outline-secondary"><a v-bind:href="project.Github" class="btn">git</a></button>
                  </div>
               </div>
       </div>
    </div>
  </template>
  <script>
  
  export default {
    name: "Projects",
    data () {
      return {
        projects: [
          {
            Image : "https://i.postimg.cc/zBcFTt4q/Screenshot-2022-11-05-124600.png",
            "Name" : "ANALOG CLOCK",
            "Netlify" : "https://neon-tapioca-348096.netlify.app",
            "Github" : "https://github.com/Siphamandla201/Exercise.git"
          },
          {
            Image : "https://i.postimg.cc/5NMngG6t/Screenshot-2022-11-05-124509.png",
            "Name" : " MY PORTFOLIO",
            "Netlify" : "https://spontaneous-gumdrop-907cc0.netlify.app/",
            "Github" : "https://github.com/Siphamandla201/MY-PORTFOLIO.git"
          },
          {
            Image : "https://i.postimg.cc/HnT8cQkT/Screenshot-2022-11-05-123332.png",
            "Name" : "WEB TEMPLATE",
            "Netlify" : "https://revisionweek2.netlify.app",
            "Github" : "https://github.com/Siphamandla201/revision.git"
          },
          {
            Image : "https://i.postimg.cc/m27LrcHb/Screenshot-20230114-022500.png",
            "Name" : "E-COM SITE",
            "Netlify" : "https://richardco.netlify.app",
            "Github" : "https://github.com/Siphamandla201/Richard-Co.git"
          },
          {
            Image : "https://i.postimg.cc/5ySzdf81/calculator.png",
            "Name" : "CALCULATOR",
            "Netlify" : "https://siphamandlamlanjanacalculator.netlify.app",
            "Github" : "https://github.com/Siphamandla201/Calculator.git"
          },
          {
            Image : "https://i.postimg.cc/mD2kz79x/flip.png",
            "Name" : "FLIP-CARD",
            "Netlify" : "https://enchanting-centaur-f82d52.netlify.app",
            "Github" : "https://github.com/Siphamandla201/Flipcard_task.git"
          },
        ]
      }
    }
  };
</script>

<style scoped>

.project {
  height: 100vh;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(1, 1fr); */
  gap:20px;
}

.card {
    width: 200px;
    height: 200px;
    background-color: transparent;
    border: 1px solid #2c3e50;
}

.card-inner {
    width: 80%;
    height: 70%;
}

img {
  width: 160px;
  margin: auto 5px;
  margin-top: 5px;
}

button {
  background-color: #2c3e50;
    width: 60px;
    margin-left: 10px;
    padding-top: 1px;
    padding-bottom: 15px;
    height: 40px;
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