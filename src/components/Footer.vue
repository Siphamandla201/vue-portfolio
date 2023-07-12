<template>
    <footer>
      <div class="copyright">
         <p>Copyright <i class="fa-regular fa-copyright"></i> 2023 by Siphamandla Mlanjana</p>
      </div>
    </footer>
</template>
<script>
export default {
    name : 'Footer' 
}
</script>
<style scoped>
 footer {
     background-color: #2c3e50;
     height: 70px;
     padding-top: 20px;
     text-align: center;
 }

footer > .copyright {
    display: flex;
    justify-content: center;
    height: 20px;
}


@media screen  and (max-width: 600px) { 

    footer > .copyright {
    height: 20px;
    margin: 0px 20px;
}
    footer > .copyright > p {
        font-size: xx-small;
 }

}

    
</style>