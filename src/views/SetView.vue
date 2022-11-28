<script setup>
import { ref, onBeforeMount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import SidebarComponent from '../components/SidebarComponent.vue'
import SliderCardComponent from '../components/SliderCardComponent.vue'
import axios from 'axios'
const schedules = ref()

onBeforeMount(async () => {
    const response = await axios.get('http://localhost:3000/schedules/today');
    schedules.value = response.data.schedules
    console.log(response.data.schedules)
})
</script>
<template>
    <SidebarComponent>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 my-auto">
                    <h4>Set Appointment</h4>
                    <form action="" method="post">
                        <div class="row">
                            <div class="col-md">

                                <div class="form-group">
                                    <label for="id number">ID Number</label>
                                    <input type="text" name="id number" id="id number" class="form-control">
                                </div>
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


                        <label for="appointment time">Service (swipe for more)</label>
                        <Swiper :slides-per-view="3" :space-between="10">
                            <SwiperSlide v-for="schedule in schedules">
                                <SliderCardComponent :title="schedule.service_type" :time="schedule.time" :date="schedule.date" :specialist="schedule.specialist.first_name+' '+schedule.specialist.last_name" />
                            </SwiperSlide>
                        </Swiper>




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