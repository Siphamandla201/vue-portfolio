<template>
    <div class="skills container-fluid">
        <div class="skills-box">
           <div class="skills-item d-flex justify-content-between">
             <div>
                 <i class="fa-brands fa-html5" style="font-size: 80px;"></i>
             </div>
           </div>
           <div class="skills-item d-flex justify-content-between">
             <div>
                 <i class="fa-brands fa-css3" style="font-size: 80px;"></i>
             </div>
           </div>
             <div class="skills-item d-flex justify-content-between">
             <div>
                 <i class="fa-brands fa-bootstrap" style="font-size: 80px;"></i>
             </div>
           </div>
           <div class="skills-item d-flex justify-content-between">
             <div>
                 <i class="fa-brands fa-js" style="font-size: 80px;"></i>
             </div>
           </div>  
             <div class="skills-item d-flex justify-content-between">
             <div>
                 <i class="fa-brands fa-vuejs" style="font-size: 80px;"></i>
             </div>
             <div>
                <i class="fa-solid fa-database"></i>
             </div>
           </div> 
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

}


.skills-box{
    display: flex;
    padding: 20px;
    justify-content: center;
    width: 80%;
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