<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>
<template>
<div class="container">
    <div class="row justify-content-center" style="height:100vh">
      <div class="pt-5 mt-5">
        <h3>Services</h3>
        <p style="margin-bottom:-100px;">Sample we can offer</p>
      </div>
      <Swiper :slides-per-view="3" :space-between="10">
        <SwiperSlide>
          <div class="card my-3">
            <img src="@assets/images/otc.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Provision of OTC Medication</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="@assets/images/physical assessment.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Image 2</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="@assets/images/otc.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Image 3</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="@assets/images/otc.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Image 4</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="@assets/images/otc.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Image 4</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="@assets/images/otc.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Image 4</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="@assets/images/otc.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Image 4</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="@assets/images/otc.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Image 4</h6>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  </div>

  <!--   
  <div class="bg-image" style="background-image:url('../otc.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 me-auto my-auto p-2 p-md-4">
          <div class="text-center">
            <h1> Provision of OTC Medicine</h1>
           
          </div>
        </div>
      </div>
    </div>

  </div>


  
  <div class="bg-image" style="background-image:url('../physical assessment.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 me-auto my-auto p-2 p-md-4">
          <div class="text-center">
           <h1>Physical Assessment</h1> 
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-image" style="background-image:url('../consultations.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 ms-auto my-auto p-2 p-md-4">
          <div class="text-center">
            <h1>Consultation</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-image" style="background-image:url('../wound2.jpeg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 ms-auto my-auto p-2 p-md-4">
          <div class="text-center">
            <h1>Wound Dressing</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-image" style="background-image:url('../medcert.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 ms-auto my-auto p-2 p-md-4">
          <div class="text-center">
           <h1>Medical/Health Certificate</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-image" style="background-image:url('../bptaking.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 me-auto my-auto p-2 p-md-4">
          <div class="text-center">
            <h1>Blood Pressure Taking</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-image" style="background-image:url('../refer.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 me-auto my-auto p-2 p-md-4">
          <div class="text-center">
            <h1>Referral</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-image" style="background-image:url('../caring.jpg');">
    <div class="container">
      <div class="row justify-content-center" style="height:100vh">
        <div class="col-md-5 me-auto my-auto p-2 p-md-4">
          <div class="text-center">
           <h1>Provision of Care</h1>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<style>
.bg-image {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>