<script setup>
import Sidebar from '../components/SidebarComponent.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>

<template>
  <Sidebar>
    <div class="row justify-content-center" style="margin: 0 0">
      <div class="col-md-3 my-auto p-2 p-md-4 ">
        
        <h3>
          Welcome, <label for="first_name">{{ authUser.first_name }}</label>
        </h3>
      </div>
    </div>
  </Sidebar>

</template>