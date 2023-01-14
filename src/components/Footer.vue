<template>
    <footer>
        <div class="footer">
            <div class="contact">
         <h4 style="color: antiquewhite;">Contact Us</h4>
         <p><strong>Phone:</strong> 081 488 6388</p>
         <p><strong>Email:</strong> siphamandlamlanjana@gmail.com</p>
         <div class="socials">
              <h4 style="color: antiquewhite;">Follow Us</h4>
              <p class="icon"><a href="https://twitter.com/SiphamandlaMl16"><i class="fa-brands fa-twitter"></i></a></p>
              <p class="icon"><a href="https://app.slack.com/client/T04421845PC/C048L8U081L"><i class="fa-brands fa-slack"></i></a></p>
         </div>
    </div>
      <div class="pages">
        <h4 style="color: antiquewhite;">pages</h4>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/resume">Resume</router-link></li>
            <li><router-link to="/testimonials">Testimonials</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>

        </ul>
      </div>
        </div>
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
     height: 350px;
 }
 
 .footer {
    display: flex;
    justify-content: center;
 }

 .footer > .contact {
    color: black;
    width: 50%;
    padding: 25px;
    text-align: justify;
    position: relative;
 }

 .footer > h4 {
     color: antiquewhite;
     font-size: 20px;
 }

 .footer > p {
    font-size: 15px;
}

.footer > .contact > .socials > .icon {
    margin-bottom: 5px;
}

footer > .copyright {
    height: 20px;
    margin: 0px 200px;
}

 .footer > .pages {
    width: 50%;
    padding: 25px 25px;
    text-align: justify;
}

.footer > .pages > ul {
    list-style: none;
    padding-left : 0px;
}

.footer > .pages > ul > li {
    margin-bottom: 15px;

}

.footer > .pages > ul > li > a {
    color: black;
    text-decoration: none;
}

@media screen  and (max-width: 600px) { 
    .footer {
    flex-direction: column;
    justify-content: center;
 }

    .footer > .contact {
    width: 80%;
    padding: 5px;
    text-align: justify;
    position: relative;
    flex-direction: column;
 }  
     .footer > .contact > p {
        font-size: x-small;
     }

   .footer > .pages {
    width: 80%;
    padding: 5px 5px;
    text-align: justify;
 }
    .footer > .pages > h4 {
        color: antiquewhite;
        font-size: 15px;
    }
   .footer > .pages > ul > li {
    margin-bottom: 3px;
    font-size: x-small;

 }


    .footer >  .contact > h4 {
     font-size: 15px;
 }

 
    .footer > .contact > .socials > h4 {
     font-size: 15px;
 }


    footer > .copyright {
    height: 20px;
    margin: 0px 20px;
}
    footer > .copyright > p {
        font-size: xx-small;
 }


}

    
</style>