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
              <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
        <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 View Details
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Appointment Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="form-group my-3">
            <label for="id number">First Name: </label>

          </div>
          <div class="form-group my-3">
            <label for="Status:">Middle Name: </label>

          </div>
          <div class="form-group my-3">
            <label for="Status:">Last Name: </label>

          </div>
          <div class="form-group my-3">
            <label for="Status:">Service Type: </label>

          </div>
          <div class="form-group my-3">
            <label for="Status:">Service Date: </label>

          </div>
          <div class="form-group my-3">
            <label for="Status:">Service Time: </label>

          </div>
          <div class="form-group my-3">
            <label for="Status:">Contact Number: </label>

          </div>
          <div class="form-group my-3">
            <label for="Status:">Email: </label>

          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    
      </div>
    </div>
  </div>
</div>

      </td>
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