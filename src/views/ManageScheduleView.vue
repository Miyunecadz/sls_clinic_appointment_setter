<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import { useUserStore } from "@/stores/user";
import axios from "axios";
import { ref, onBeforeMount } from "vue";

const userStore = useUserStore();
const authUser = userStore.authUser;
const schedules = ref([]);
const keywords = ref("");
const onLoadingState = ref(false);

const getSchedules = async () => {
  const specialistId = authUser.id;
  const response = await axios.get(
    "http://localhost:3000/schedules/" + specialistId
  );
  schedules.value = response.data.schedules;
};

const searchSchedules = async () => {
  const specialistId = authUser.id;
  onLoadingState.value = true;
  const url = "http://localhost:3000/schedules/" + specialistId;
  const response = await axios.post(url, {
    keywords: keywords.value,
  });
  onLoadingState.value = false;
  schedules.value = await response.data.schedules;
};

onBeforeMount(() => {
  getSchedules();
});
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
              placeholder="Search keyword"
              aria-label="search"
              aria-describedby="button-addon2"
              v-model="keywords"
            />
            <button
              @click.prevent="searchSchedules"
              class="btn btn-outline-primary"
              type="button"
              id="button-addon2"
              :class="onLoadingState ? 'disabled' : ''"
            >
              <div
                v-if="onLoadingState"
                class="spinner-border text-light"
                role="status"
                style="max-height: 20px; max-width: 20px"
              >
                <span class="visually-hidden">...</span>
              </div>
              {{ onLoadingState ? "Searching..." : "Search" }}
            </button>
          </div>
          <div class="d-flex me-auto mt-4">
            <h3>Schedule List</h3>
            <RouterLink
              to="/specialist-setschedule"
              class="btn btn-success ms-auto"
              >Set New Schedule</RouterLink
            >
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Service Type</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="schedule in schedules" :key="schedule.id">
                <td>{{ schedule.date }}</td>
                <td>{{ schedule.time }}</td>
                <td>{{ schedule.service_type }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </SidebarComponent>
</template>
