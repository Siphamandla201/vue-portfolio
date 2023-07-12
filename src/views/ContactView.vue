<template>
  <div class="contact">
        
      <div class="contact-info">
            <div class="h1">
              <h1> GET IN </h1>
              <h1 class="touch">TOUCH</h1>
            </div>
            <div class="contact-methods">
                  <ul>
                        <li> siphamandlamlanjana@gmail.com</li>
                        <li> 081 488 6388</li>
                        <li>Gugulethu, Cape Town, <br>
                            7750
                        </li>
                  </ul>
            </div>
      </div>
     
    <form class="container container-fluid" action="https://formspree.io/f/xpznogkz" method="post">         
           <div class="col mb-12">   
              <label for="fullName" class="form-label">Fullname</label>
              <input type="text" class="form-control" name="fullName" id="fullName" required>
          </div>
         <div class=" col mb-12">
              <label for="contact" class="form-label">Contact Number</label>
              <input type="number" class="form-control" name="contact" id="contact" required>
         </div>
        <div class=" col mb-12">
              <label for="email" class="form-label">Email Address</label>
              <input type="text" class="form-control" name="email" id="email" required>
        </div>
        <div class=" col mb-12">
              <label for="message" class="form-label">Message</label>
              <textarea type="text" class="form-control" id="message" rows="10"></textarea>
        </div> 
        <div class="row m-3">
          <div class="col mb-5">
            <input type="submit" class="btn btn-dark btn-block">
          </div>
      </div>
         </form>
  </div>

</template>

<script>

export default {
      name : "ContactView"
}

</script>

<style scoped>

.contact {
      display: flex;
}

.contact-info, form {
      width: 50%;
}

.contact-info {
      background-color: rgb(0, 78, 78);
      color: black;
}

h1 {
      font-size: 80px;
}

.h1 {
      margin: 100px 0px;
}

.h1 :nth-child(1) {
      margin-left: -300px;
}

.h1 :nth-child(2) {
      margin-left: -50px;
}


ul {
      list-style: none;
      text-align: justify;
      margin-left: 200px;
}

li {
      margin-bottom: 20px;
}

form {
      padding: 160px 120px;

}


.col {
      text-align: start;
      margin-bottom: 10px;
}

label {
      margin: 0px;
      color: rgb(0, 78, 78);
}

input {
      background-color: transparent;
      border: none;
      border-bottom: 2.5px rgb(0, 78, 78) solid;
      border-radius: 0%;
      height: 30px;
      padding: 0px 12px;
}

input:focus {
      background-color: transparent;
      outline: none !important;
      outline-style: none;
      border: none;
      border-bottom: 2.5px rgb(0, 78, 78) solid;

}


#message {
      border-radius: 0px;
      background-color: transparent;
      border: 2.5px rgb(0, 78, 78) solid;
      height: 100px;
      margin-top: 30px;
      
}

.btn {
      width: 150px;
      height: 50px;
      color: black;
      border: 0px;
      margin-left: 74%;
      background-color: rgb(0, 78, 78);
} 

</style>