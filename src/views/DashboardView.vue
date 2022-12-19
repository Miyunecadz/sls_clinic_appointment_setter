<script setup>
import Sidebar from "../components/SidebarComponent.vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const authUser = userStore.authUser;
</script>

<template>
  <Sidebar>
    <div class="row justify-content-center" style="margin: 0 0">
      <div class="col-md my-auto p-2 p-md-4">
        <h3 class="text-center">
          Welcome back, <label for="first_name">{{ authUser.first_name }}</label>
        </h3>

        <div class="wrapper d-flex justify-content-center gap-4 my-5" v-if="authUser.account_type == 1">
          <div class="card p-2">
            <h2 class="text-center">0</h2>
            <h6 class="mt-2">Number of Students</h6>
          </div>
          <div class="card p-2">
            <h2 class="text-center">0</h2>
            <h6 class="mt-2">Appointments Set</h6>
          </div>
          <div class="card p-2">
            <h2 class="text-center">0</h2>
            <h6 class="mt-2">Available Schedules</h6>
          </div>
        </div>
      </div>
    </div>
  </Sidebar>
</template>
