<template>
  <div>
    <nav>
      <button class="closeBtn" @click="closeNav()">
        <i class="fa-sharp fa-solid fa-xmark"></i>
      </button>
      <a  href="#home" >Home</a> 
      <a  href="#about" >Resume</a> 
      <a  href="#projects" >Projects</a> 
      <a  href="#testimonial" >Testimonials</a> 
      <a  href="#contact" >Contact</a> 
    </nav>
    <i class="fa-sharp fa-solid fa-bars openBtn" @click="openNav()"></i>
  </div>
</template>
<script>
import { classProperty } from '@babel/types';

export default {
    name : 'Navbar',
    methods : {
      openNav() {
        let navBar = document.querySelector('nav');
        let openBtn = document.querySelector('.openBtn')
        if(!navBar.classList.contains('open')){
          navBar.classList.add('open')
          navBar.classList.remove('close') 
          openBtn.style.display = 'none'
        }else {
          navBar.classList.remove('open')
          openBtn.style.display = 'block'
        }
      },
      closeNav() {
        let navBar = document.querySelector('nav');
        let openBtn = document.querySelector('.openBtn');
        if( openBtn.style.display = 'none') {
          navBar.classList.add('close')
          navBar.classList.remove('open')
          openBtn.style.display = 'block'
        } else {
          openBtn.style.display = 'none'
        }
        
      },
    }
}
</script>
<style scoped>

div {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: black;
  width: 100vw;
  height: 100px;
  transition: background-color 0.3s ease-out;
  position: fixed;
  z-index: 2;
}

/* .logo {
  display: flex;
  width: 60px;
  height: 60px;
  left: 90%;
  top: 20px;
  align-items: center;
  justify-content: center;
  background-color:  rgb(222, 161, 48);
  border-radius: 50%;
} */


nav {
  padding: 30px;
  width:650px;
  z-index: 2;
  left: 0%;
  display: flex;
  justify-content: space-around;
  padding-left: 70px;
}


.closeBtn {
  display: none;
}

nav a {
  font-weight: bold;
  color: antiquewhite;
  /* margin-right: 50px; */
  text-decoration: none;
}

nav a:hover {
  color:  rgb(222, 161, 48);
}

.activeLink {
    color: #FFF;
    border-bottom: 2px solid #FFF;
  }

.openBtn {
  display: none;
}

@media screen and (max-width: 780px) {
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    background-color: rgb(0, 0, 0);
    width: 100%;
    height: 100vh;
    top: 0px;
    left: 770px;
    padding-left: 10px;
  }
  
  .open {
    animation:open 1s linear forwards;
  }
  
  .close {
    animation:close 1s linear forwards;
  }

  .closeBtn {
    display: block;
    position: absolute;
    top: 20px;
    left: 30px;
    font-size: 50px;
    background-color: transparent;
    color: rgb(222, 161, 48);
    border: none;
  }

  nav a {
  margin-top: 15px;
  margin-bottom: 40px;
  font-size: xx-large;
  }

  .openBtn {
    display: block;
    font-size: 35px;
    margin-top: 30px;
    margin-left: 30px;
    color: rgb(222, 161, 48);
  }

  @keyframes close {
    0% {
      left: 270px;
    }
    100% {
      left: 800px;
    }
    
  }

  @keyframes open {
    0% {
      left: 800px;
    }
    100% {
      left: 0px;
    }    
  }

}


@media screen and (max-width: 435px) {
  nav {
    height: 80vh;
    top: 0px;
    left: 770px;
  }
  .closeBtn {
    top: 20px;
    left: 30px;
    font-size: 30px;
  }

  nav a {
  margin-bottom: 20px;
  font-size: large;
  }


}
    
</style>