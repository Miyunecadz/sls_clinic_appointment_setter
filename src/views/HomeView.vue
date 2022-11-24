<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <NavBar/>
  <div class="bg-image" style="background-image:url('../Homepage.jpg');">
  <div class="container">
    <div class="d-flex justify-content-center" style="height: 80vh;">
      <div class="me-auto my-auto p-2 p-md-4" style="max-width:540px;">
        <h1 class="text-light">SLSU Medical Clinic
           Appointment Setter</h1>
        <h6 class="text-blue">Students' healthcare will always be our priority.</h6>
        <div class="d-flex gap-2">
          <!-- TODO: Change this to link in the future -->
          
          <RouterLink class="btn btn-primary" to="/login">Get Acquinted Now</RouterLink>
         
          <!-- TODO: Change this to link in the future -->
          <RouterLink class="btn btn-secondary" to="/learnmore">Learn More</RouterLink>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
