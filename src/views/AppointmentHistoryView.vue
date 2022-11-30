<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import { useUserStore } from '@/stores/user'
import { ref, onBeforeMount } from 'vue'
import axios from 'axios'

const userStore = useUserStore().authUser
const appointments = ref({})
const getAppointments = async() => {
  const response = await axios.post('http://localhost:3000/appointments/my-appointments', {
    "userId": userStore.id
  });
  appointments.value = response.data.appointments
  console.log(response.data.appointments)
}

onBeforeMount(async () => {
  await getAppointments()
})
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
                <td>{{appointment.schedule.service_type}}</td>
                <td>{{appointment.schedule.date}}</td>
                <td>{{appointment.schedule.time}}</td>
                <td>{{appointment.status}}</td>
                <td>c</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </SidebarComponent>
</template>