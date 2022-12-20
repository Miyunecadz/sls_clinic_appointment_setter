<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import { useUserStore } from "@/stores/user";
import { onMounted } from "vue";
import axios from "axios";
import {ref} from 'vue'

const userStore = useUserStore();
const authUser = userStore.authUser;
const patients = ref(0)
const appointments = ref(0)
const schedules = ref(0)
const getDashboard = async() => {
  const url = "http://localhost:3000/specialist/review"
  let response = await axios.get(url)
  response = response.data.data
  patients.value = response.patients
  appointments.value = response.appointments
  schedules.value = response.schedules
}

onMounted(async() => {
 await getDashboard()
})
</script>

<template>
  <SidebarComponent>
    <div class="row justify-content-center">
      <div class="col-md-4 my-4">
        <h4>Welcome, Admin!</h4>

        <div
          class="card col-md-4 my-4 card text-bg-success mb-3"
          style="width: 21rem"
        >
          <div class="card-header bg-transparent border-success">SUMMARY</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Number of Patients:</li>
            <li class="list-group-item">Appointments Set:</li>
            <li class="list-group-item">Available Sechdules:</li>
          </ul>
        </div>
      </div>
    </div>
  </SidebarComponent>
</template>
