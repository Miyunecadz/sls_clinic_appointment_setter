<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>
<template>
<div class="container">
    <div class="row justify-content-center" style="height:100vh">
      <div class="pt-5 mt-5">
        <h3>Services</h3>
        <p style="margin-bottom:-100px;">What we can offer</p>
      </div>
      <Swiper :slides-per-view="3" :space-between="10">
        <SwiperSlide>
          <div class="card my-3">
            <img src="../assets/otc.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Provision of OTC Medication</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="../assets/physical assessment.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Physical Assessment</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="../assets/consultations.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Consultation</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="../assets/wound.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Wound Dressing</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="../assets/medcert.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Medical/Health Certificate</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="../assets/bptaking.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Blood Pressure Taking</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="../assets/refer.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Referral</h6>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div class="card my-3">
            <img src="../assets/provosionofcare.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">Provision of Comfort</h6>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  </div>
</template>

<style>
.bg-image {
  height: 100vh;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>