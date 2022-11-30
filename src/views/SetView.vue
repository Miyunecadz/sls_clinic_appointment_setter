<script setup>
import { ref, onBeforeMount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import SidebarComponent from '../components/SidebarComponent.vue'
import SliderCardComponent from '../components/SliderCardComponent.vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'
const schedules = ref("")
const count = ref(0);
const inputData = ref({
    first_name: '',
    middle_name: '',
    last_name: '',
    service_id: '',
    contact_number: '',
    email: '',
    gender: '',
})
const userStore = useUserStore().authUser

const getSchedules = async () => {
    const response = await axios.get('http://localhost:3000/schedules/today');
    schedules.value = response.data.schedules
    count.value = schedules.value.length
}
onBeforeMount(async () => {    
    await getSchedules()
})

const setAppointment = async () => {
    const request = {
        patient_id: userStore.id,
        first_name: inputData.value.first_name,
        middle_name: inputData.value.middle_name,
        last_name: inputData.value.last_name,
        schedule_id: inputData.value.service_id,
        contact_number: inputData.value.contact_number,
        email: inputData.value.email,
        gender: inputData.value.gender,
    }

    if (
        !inputData.value.first_name ||
        !inputData.value.last_name ||
        !inputData.value.service_id ||
        !inputData.value.contact_number ||
        !inputData.value.email ||
        !inputData.value.gender
        
    ) {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill up the required fields',
        })
    }
    let response = await axios.post('http://localhost:3000/appointments', request);
    response = await response.data
    if (!response.result) {
        return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: response.message,
        })
    }

    inputData.value = {
        first_name: '',
        middle_name: '',
        last_name: '',
        service_id: '',
        contact_number: '',
        email: '',
        gender: '',
    }

    getSchedules()

    return Swal.fire({
        icon: 'success',
        title: 'Great!',
        text: response.message,
    })
}
</script>
<template>
    <SidebarComponent>
        <div class="row justify-content-center"
            style="margin-left:0px;margin-right:0px;margin-top:10px;margin-bottom:10px;">
            <div class="col-md-8 my-auto">
                <h4>Set Appointment</h4>
                <form action="" method="post">
                    <div class="row">
                        <div class="col-md">
                            <div>
                                <label for="first">First Name <span
                                            class="text-danger">*</span></label>
                                <input v-model="inputData.first_name" type="text" name="first name" id="first name"
                                    class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="middle name">Middle Name</label>
                                <input v-model="inputData.middle_name" type="text" name="middle name" id="middle name"
                                    class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="last name">Last Name <span
                                            class="text-danger">*</span></label>
                                <input v-model="inputData.last_name" type="text" name="last name" id="last name"
                                    class="form-control">
                            </div>

                            <label for="appointment time">Service<span
                                            class="text-danger">*</span> (swipe for more)</label>
                            <Swiper :slides-per-view="3" :space-between="10">
                                <SwiperSlide v-for="schedule in schedules">
                                    <SliderCardComponent :active="true" v-model:service="inputData.service_id" :value="schedule.id"
                                        :title="schedule.service_type" :time="schedule.time" :date="schedule.date"
                                        :specialist="schedule.specialist.first_name + ' ' + schedule.specialist.last_name" />
                                </SwiperSlide>

                                
                                <SwiperSlide v-if="count == 0">
                                    <SliderCardComponent title="No Available Schedules" active="false" />
                                </SwiperSlide>
                            </Swiper>

                            <div class="form-group">
                                <label for="contact number">Contact Number <span
                                            class="text-danger">*</span></label>
                                <input v-model="inputData.contact_number" type="text" name="contact number"
                                    id="contact number" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="email address">Email Address <span
                                            class="text-danger">*</span></label>
                                <input v-model="inputData.email" type="text" name="email address" id="email address"
                                    class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="gender">Gender <span
                                            class="text-danger">*</span></label>
                                <select name="gender" id="gender" class="form-select" v-model="inputData.gender">
                                    <option value="">Select one</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div class="row justify-content-center">
                                <div class="col me-auto">
                                    <button @click.prevent="setAppointment" type="submit"
                                        class="btn btn-primary gap-2 mt-2">Set Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </SidebarComponent>
</template>