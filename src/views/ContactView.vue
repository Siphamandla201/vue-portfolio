<template>
     
    <form class="container container-fluid" action="https://formspree.io/f/xpznogkz" method="post">
          <h2>Contact Me</h2>
           <div class="col mb-12 ">
              <label for="exampleFormControlInput1" class="form-label "></label>Name
              <input type="P-number" class="form-control" name="name" id="exampleFormControlInput1" placeholder="John"  style="background-color: #2c3e50; color: antiquewhite;" required>
          </div>         
           <div class="col mb-12">   
              <label for="exampleFormControlInput1" class="form-label">Surname</label>
              <input type="P-number" class="form-control" name="surname" id="exampleFormControlInput1" placeholder="Doe" style="background-color: #2c3e50; color: antiquewhite;" required>
          </div>
         <div class=" col mb-12">
              <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
              <input type="P-number" class="form-control" name="phone" id="exampleFormControlInput1" placeholder="081 488 6388" style="background-color: #2c3e50; color: antiquewhite;" required>
         </div>
        <div class=" col mb-12">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com" style="background-color: #2c3e50; color: antiquewhite;" required>
        </div>
        <div class=" col mb-12">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" style="background-color: #2c3e50; color: antiquewhite;"></textarea>
        </div> 
        <div class="row m-3">
          <div class="col mb-5">
            <input type="submit" class="btn btn-dark btn-block">
          </div>
      </div>
         </form>

</template>

<style scoped>
</style>