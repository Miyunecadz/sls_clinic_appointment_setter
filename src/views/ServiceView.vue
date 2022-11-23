<script setup>
import NavBar from '../components/NavBar.vue'

</script>
<template>
    <NavBar/>

  <!-- Must change the image to high quality images -->
  <div class="bg-image" style="background-image:url('../src/assets/p_a.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 ms-auto my-auto p-2 p-md-4">
          <div class="card p-2">
            dasdsa
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- Must change the image to high quality images -->
  <div class="bg-image" style="background-image:url('../src/assets/consultation.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 me-auto my-auto p-2 p-md-4">
          <div class="card p-2">
            dasdsa
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="container">
    <div class="row justify-content-center" style="height: 80vh;">
      <div class="col-md-5 ms-md-auto my-auto p-2 p-md-4">
        <h3 class="text-center">Services</h3>
          <div id="carouselExampleFade" class="carousel slide p-2 border border-2 rounded" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/p_a.jpg" class="d-block" style="max-width:480px; height:280px;" alt="Physical Assessment">
                <div class="carousel-caption d-none d-md-block">
                  <h6>Physical Assessment</h6>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/consultation.jpg" class="d-block" style="max-width:440px; height:280px;" alt="Consultation">
                <div class="carousel-caption d-none d-md-block">
                  <h6>Consultation</h6>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/wd.jpg" class="d-block" style="max-width:440px; height:280px;" alt="Wound Dressing">
                <div class="carousel-caption d-none d-md-block">
                  <h6>Wound Dressing</h6>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/bp.png" class="d-block" style="max-width:440px; height:280px;" alt="Blood Pressure Taking">
                <div class="carousel-caption d-none d-md-block">
                  <h6>Blood Pressure Taking</h6>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
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
  </div> -->

</template>

<style>
.bg-image {
  height:100vh;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>