<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>

<template>
  <SidebarComponent>
    <div class="row justify-content-center">
      <div class="col-md-3 my-auto p-2 p-md-4 ">
        <h3>
          Welcome, Doctor<label for="first_name">{{ authUser.first_name }}</label>
        </h3>
      </div>
    </div>
  </SidebarComponent>
</template>