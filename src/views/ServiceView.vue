<script setup>
import NavBar from '../components/NavBar.vue'

</script>
<template>
    <NavBar/>


    
 
    <div id="carouselExampleIndicators" class="carousel slide"  data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/p_a.jpg" class="d-block w-10" alt="Physical Assessment">
    </div>
    <div class="carousel-item">
      <img src="../assets/consultation.jpg" class="d-block w-100" alt="Consultation">
    </div>
    <div class="carousel-item">
      <img src="../assets/wd.jpg" class="d-block w-100" alt="Wound Dressing">
    </div>
    <div class="carousel-item">
      <img src="../assets/bp.png" class="d-block w-100" alt="Blood Pressure Taking">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

