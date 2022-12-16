<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import { useUserStore } from "@/stores/user";
import { onBeforeMount, ref } from "vue";
import axios from "axios";
const userStore = useUserStore();
const authUser = userStore.authUser;
const appointments = ref([]);
const approveLoadingState = ref(false);
const rejectLoadingState = ref(false);
const searchLoadingState = ref(false);
const keyword = ref("")

const getAppointments = async (data = []) => {
  const specialistId = authUser.id;
  const url = "http://localhost:3000/appointments/" + specialistId;
  if(data.length == 0) {
    let response = await axios.get(url);
    appointments.value = await response.data.appointments;
    return;
  }

  appointments.value = data.appointments;
};

onBeforeMount(async () => {
  await getAppointments();
});

async function approve(id) {
  approveLoadingState.value = true;
  const url = "http://localhost:3000/appointments/approve";
  let response = await axios.post(url, {
    appointmentId: id,
  });
  response = await response.data;
  approveLoadingState.value = false;
  if (!response.result) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: response.message,
    });
  }
  await getAppointments();
}

async function reject(id) {
  rejectLoadingState.value = true;
  const url = "http://localhost:3000/appointments/reject";
  let response = await axios.post(url, {
    appointmentId: id,
  });
  response = await response.data;
  rejectLoadingState.value = false;
  if (!response.result) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: response.message,
    });
  }
  await getAppointments();
}

const search = async() => {
  searchLoadingState.value = true
  const url = "http://localhost:3000/appointments/search-keyword"
  console.log(keyword, authUser.id)
  let response = await axios.post(url, {
    keyword: keyword,
    specialist_id: authUser.id
  })
  response = await response.data
  searchLoadingState.value = true
  if (!response.result) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: response.message,
    });
  }
  await getAppointments(response)
}
</script>

<template>
  <SidebarComponent>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md my-4">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="search"
              aria-describedby="button-addon2"
              v-model="keyword"
            />
            <button
              @click.prevent="search"
              class="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              :class="searchLoadingState ? 'disabled' : ''"
            >
            <div
              v-if="searchLoadingState"
              class="spinner-border text-light"
              role="status"
              style="max-height: 20px; max-width: 20px"
            >
              <span class="visually-hidden">...</span>
            </div>
              <span>{{searchLoadingState ? "Searching..." : "Search"}}</span>
            </button>
          </div>
          <h3>Appointments</h3>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Appointment Title</th>
                <th scope="col">Patient</th>
                <th scope="col">Schedule</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="appointment in appointments" :key="appointment.id">
                <td>{{ appointment.schedule.service_type }}</td>
                <td>
                  {{ appointment.last_name }}, {{ appointment.first_name }}
                </td>
                <td>
                  {{ appointment.schedule.date }} |
                  {{ appointment.schedule.time }}
                </td>
                <td>{{ appointment.status }}</td>
                <td>
                  <div
                    class="d-flex gap-2"
                    v-if="appointment.status == 'pending'"
                  >
                    <button
                      type="button"
                      :class="approveLoadingState ? 'disabled' : ''"
                      class="btn btn-success"
                      @click="approve(appointment.id)"
                    >
                      <div
                        v-if="approveLoadingState"
                        class="spinner-border text-light"
                        role="status"
                        style="max-height: 20px; max-width: 20px"
                      >
                        <span class="visually-hidden">...</span>
                      </div>
                      <span>{{
                        approveLoadingState ? "Approving..." : "Approve"
                      }}</span>
                    </button>

                    <button
                      type="button"
                      :class="rejectLoadingState ? 'disabled' : ''"
                      class="btn btn-danger"
                      @click="reject(appointment.id)"
                    >
                      <div
                        v-if="rejectLoadingState"
                        class="spinner-border text-light"
                        role="status"
                        style="max-height: 20px; max-width: 20px"
                      >
                        <span class="visually-hidden">...</span>
                      </div>
                      <span>{{
                        rejectLoadingState ? "Rejecting..." : "Reject"
                      }}</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </SidebarComponent>
</template>
