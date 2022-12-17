<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import { useUserStore } from '@/stores/user'
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'
import ModalComponent from '../components/ModalComponent.vue';
import RatingModalComponent from '../components/RatingModalComponent.vue';

const userStore = useUserStore().authUser
const appointments = ref({})
const getAppointments = async () => {
  const response = await axios.post('http://localhost:3000/appointments/my-appointments', {
    "userId": userStore.id
  });
  appointments.value = response.data.appointments
  console.log(response.data.appointments)

  
}

const rating = ref({})
const addAppointmentRating = async () => {
  const response = await axios.post('http://localhost:3000/appointments/add-rating', {
    "userId": userStore.id
  });
  rating.value = response.data.rating
  console.log(response.data.rating)

  
}


onBeforeMount(async () => {
  await getAppointments()
})

const appointmentModalData = ref({})
const scheduleModalData = ref({})
const setAppointmentInModal = (appointment) => {
  appointmentModalData.value = appointment
  scheduleModalData.value = appointment.schedule
}


onBeforeMount(async () => {
  await addAppointmentRating()
})

const appointmentRatingModalData = ref({})
const appointmentCommentModalData = ref({})
const setRatingInModal = (rating) => {
  appointmentRatingModalData.value = rating
  appointmentCommentModalData.value = rating.comment
}


</script>



<template>
  <SidebarComponent>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 my-auto">

          <h3>Appointment History</h3>
          <table class="table ">
            <thead>
              <tr>
                <th scope="col">Appointment Title</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="appointment in appointments">
                <td>{{ appointment.schedule.service_type }}</td>
                <td>{{ appointment.schedule.date }}</td>
                <td>{{ appointment.schedule.time }}</td>
                <td>{{ appointment.status }}</td>
                <td>
                  <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" @click="setAppointmentInModal(appointment)">
                    View Details
                  </button>
                  <ModalComponent :appointment="appointmentModalData" :schedule="scheduleModalData" />
                </td>
                <td>
                  <Button type="button" v-if="appointment.status=='approved'" class="btn btn-outline-secondary" data-bs-toggle="modal"
                  data-bs-target="#exampleModal1" @click="setRatingInModal(rating)">
                    Give Rating
                    
                </Button>
                  
                <RatingModalComponent :rating="appointmentRatingModalData" :comment="appointmentCommentModalData"/>
  
                </td>
              
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </SidebarComponent>
</template>