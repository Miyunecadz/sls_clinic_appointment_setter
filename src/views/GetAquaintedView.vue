<script setup>
import NavBar from '../components/NavBar.vue'
</script>
<template>
<NavBar/>
<!--

<div class="bg-image" style="background-image:url('../doctor.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 me-auto my-auto p-2 p-md-4">
          <div class="card p-2 text-center">
            Dr. Edmundon Villa, Physician - University Doctor
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-image" style="background-image:url('../nurse.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 me-auto my-auto p-2 p-md-4">
          <div class="card p-2 text-center">
            Maria Emelee Bascug, RN, MAN - Nurse II
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-image" style="image:url('../nurse attendant.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 me-auto my-auto p-2 p-md-4">
          <div class="card p-2 text-center">
            Hadassah Sablayan, RN - Nursing Attendant
          </div>
        </div>
      </div>
    </div>
  </div>
-->

<div class="container">
    <div class="row justify-content-center" style="height: 100vh;">
      <div class="col-md-5 me-md-auto ms-auto p-2 p-md-4">
        <h3 class="text-center">Our Medical Staff</h3>
          <div id="carouselExampleFade" class="carousel slide p-2 border border-2 rounded" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/doctor.jpg" class="d-block" style="max-width:780px; height:480px;" alt="">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="text-dark">Dr. Edmundo Villa, Physician  University Doctor</h5>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/nurse.jpg" class="d-block" style="max-width:580px; height:480px;" alt="">
                <div class="carousel-caption d-none d-md-block">
                  <h4 class="text-dark">Maria Emelee Bascug, RN, MAN - Nurse II</h4>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/nurse_attendant.jpg" class="d-block" style="max-width:580px; height:480px;" alt="">
                <div class="carousel-caption d-none d-md-block">
                  <h5 class="text-dark">Hadassah Sablayan, RN - Nursing Attendant</h5>
                </div>
              </div>
              
             
            </div>
            <button class="carousel-control-prev text-dark" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
      </div> 
    </div>
  </div> 


</template>