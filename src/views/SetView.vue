<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import SidebarComponent from '../components/SidebarComponent.vue'
</script>
<template>
    <SidebarComponent>
    <div class="container">
        <div class="row justify-content-center" style="height:80vh">
            <div class="col-md-8 my-auto">
                <h4>Set Appointment</h4>
                <form action="" method="post">
                    <div class="row">
                        <div class="col-md">

                            <div class="form-group">
                                <label for="id number">ID Number</label>
                                <input type="text" name="id number" id="id number" class="form-control">
                            </div>
                            <div class="row gap-1">
                                <div class="form-group col-md">
                                    <label for="first">First Name</label>
                                    <input type="text" name="first name" id="first name" class="form-control">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="middle name">Middle Name</label>
                                    <input type="text" name="middle name" id="middle name" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="last name">Last Name</label>
                                <input type="text" name="last name" id="last name" class="form-control">
                            </div>
                            
                           
                            <label for="appointment time">Service Time(swipe for more)</label>
                            <Swiper :slides-per-view="3" :space-between="10">
        <SwiperSlide>
            <div class="card p-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <h6 class="form-check-label" for="flexRadioDefault1">
    Provision of OTC Medicine
  </h6>
  <div class="d-flex gap-3">
    <span>
        12-25-2022
    </span>
    <span>
        9:00-10:00
    </span>

  </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card p-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <h6 class="form-check-label" for="flexRadioDefault1">
    Physical Assessment
</h6>
<div class="d-flex gap-3">
    <span>
        11-30-2022
    </span>
        10:00-11:00
    <span>

    </span>

</div>
   
  
</div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card p-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <h6 class="form-check-label" for="flexRadioDefault1">
    Consultation
</h6>
<div class="d-flex gap-3">
    <span>
        11-30-2022
    </span>
        8:00-10:00
    <span>

    </span>

</div>
</div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card p-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <h6 class="form-check-label" for="flexRadioDefault1">
    Wound Dressing
</h6>
<div class="d-flex gap-3">
    <span>
        11-30-2022
    </span>
        8:00 - 11:00
    <span>

    </span>

</div>
</div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card p-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <h6 class="form-check-label" for="flexRadioDefault1">
    Medical-Health Certificate/Referral
</h6>
<div class="d-flex gap-3">
    <span>
        11-30-2022
    </span>
        11:00-12:00
    <span>

    </span>

</div>
</div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="card p-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" text="asasa">
  <h6 class="form-check-label" for="flexRadioDefault1">
    Blood Pressure Taking
</h6>
<div class="d-flex gap-3">
    <span>
        12-8-2022
    </span>
        8:00-10:00
    <span>

    </span>

</div>
</div>
        </SwiperSlide>
 
        </Swiper>
        </div>
        
        
                       
                        <div class="col-md">
                            <div class="form-group">
                                <label for="contact number">Contact Number</label>
                                <input type="text" name="contact number" id="contact number" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="email address">Email Address</label>
                                <input type="text" name="email address" id="email address" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="gender">Gender</label>
                                <select name="gender" id="gender" class="form-select">
                                    <option value="">Select one</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                          
                        </div>
                        
                    </div>
                    <div class="row justify-content-center">
                        <div class="col me-auto">
                            <button type="submit" class="btn btn-primary gap-2 mt-2">Set Now</button>
                            
                        </div>
                        
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
    </SidebarComponent>
</template>