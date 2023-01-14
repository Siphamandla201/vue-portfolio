<template>
    <div class="skills container-fluid">
        <div class="skills-box">
           <div class="skills-item d-flex justify-content-between">
             <div>
                 <i class="fa-brands fa-html5" style="font-size: 80px;"></i>
             </div>
             <div style="width: 80%;">
                 <p style="text-align: start;margin-bottom: 15px;">
                     HTML - 75%
                 </p>
                 <div  class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria- 
                      valuemin="0" aria-valuemax="100">
                     <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%;text-align: center; "></div>
                 </div>
             </div>
           </div>
           <div class="skills-item d-flex justify-content-between">
             <div>
                 <i class="fa-brands fa-css3" style="font-size: 80px;"></i>
             </div>
             <div style="width: 80%;">
                 <p style="text-align: start;margin-bottom: 15px;">
                     CSS - 80%
                 </p>
                 <div  class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="80" aria- 
                      valuemin="0" aria-valuemax="100">
                     <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 80%;text-align: center; "></div>
                 </div>
             </div>
           </div>
             <div class="skills-item d-flex justify-content-between">
             <div>
                 <i class="fa-brands fa-bootstrap" style="font-size: 80px;"></i>
             </div>
             <div style="width: 80%;">
                 <p style="text-align: start;margin-bottom: 15px;">
                     Bootstrap - 70%
                 </p>
                 <div  class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="70" aria- 
                      valuemin="0" aria-valuemax="100">
                     <div class="progress-bar progress-bar-striped progress-bar-animated " style="width: 70%;text-align: center; "></div>
                 </div>
             </div>
           </div>
           <div class="skills-item d-flex justify-content-between">
             <div>
                 <i class="fa-brands fa-js" style="font-size: 80px;"></i>
             </div>
             <div style="width: 80%;">
                 <p style="text-align: start;margin-bottom: 15px;">
                     Javascript - 65%
                 </p>
                 <div  class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="65" aria- 
                      valuemin="0" aria-valuemax="100">
                     <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 65%;text-align: center; "></div>
                 </div>
             </div>
           </div>  
             <div class="skills-item d-flex justify-content-between">
             <div>
                 <i class="fa-brands fa-vuejs" style="font-size: 80px;"></i>
             </div>
             <div class="progress-info" style="width: 80%;">
                 <p style="text-align: start;margin-bottom: 15px;">
                     Vue.js - 85%
                 </p>
                 <div  class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="85" aria- 
                      valuemin="0" aria-valuemax="100">
                     <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 75%;text-align: center; "></div>
                 </div>
             </div>
           </div> 
        </div>
        <div class="skills-title  my-5">
            <h2>
                Skills
            </h2>
        </div>
    </div>
        
   
</template>
<script>
export default {
    name : 'Skills',
}
</script>
<style scoped>
.skills {
    padding: 0% 5%;
    height: 110vh;
    display: flex;
}

.skills-title {
    width: 40%;
    padding-top: 15%;
    padding-left: 10%;
    
}


.skills-box{
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 50%;
}

.skills-box > .skills-item {
    padding: 20px 30px;
    margin: 0px;
    width: 100%;
}

@media screen and (max-width: 1100px) {
    .skills-box > .skills-item {
    padding: 15px;
    margin: 0px;
    }

    .progress-info {
        width: 50%;
    }

    
}

@media screen and (max-width: 720px) {
    .skills {
        flex-direction: column;
    }
    .skills-title{
        display: none;
    }

    .skills-box{
        width: 90%;
    }

    .skills-box > .skills-item {
    padding: 15px;
    margin: 0px;
    width: 80%;
    }

    .skills-item {
        width: 100% !important;

    }

    .fa-brands {
        margin-right: 10px;
    }

    .progress {
        width: 100%;
        transform: scaleY(0.8);
    }

    progress-bar {
        width: 100%;
    }

    
}

@media screen and (max-width: 400px) {

    .skills-box > .skills-item {
    padding: 5px;
    margin: 0px;
    width: 80%;
    }

    .skills-item {
        width: 100% !important;
        margin: 15px;

    }

    .fa-brands {
        margin-right: 10px;
        font-size: xx-small;
    }

    .progress-info {
        width: 100%;
        height: 80%;
    }

    p {
        margin-bottom: 4px !important;
        font-size: smaller;

    }

    .progress {
        width: 100%;
        transform: scaleY(0.6);
    }

    progress-bar {
        width: 100%;
    }

    
}
    
</style>