<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <NavBar/>
  <div class="container">
    <div class="d-flex justify-content-center" style="height: 80vh;">
      <div class="ms-auto my-auto p-2 p-md-4" style="max-width:540px;">
        <h2>SLSU Medical Clinic Appointment Setter</h2>
        <p>Students' healthcare will always be our priority.</p>
        <div class="d-flex gap-2">
          <!-- TODO: Change this to link in the future -->
          <button class="btn btn-primary">Get Acquinted Now</button>
          <!-- TODO: Change this to link in the future -->
          <button class="btn btn-outline-secondary">Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>
