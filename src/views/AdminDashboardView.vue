<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
const authUser = userStore.authUser;
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
            <li class="list-group-item">Number of Students:</li>
            <li class="list-group-item">Appointments Set:</li>
            <li class="list-group-item">Available Sechdules:</li>
          </ul>
        </div>
      </div>
    </div>
  </SidebarComponent>
</template>
