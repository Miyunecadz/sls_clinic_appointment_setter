<script setup>
import AdminSidebar from '../components/AdminSidebarComponent.vue'
import {useUserStore} from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>

<template>
    <AdminSidebar> 
       
        <div class="row justify-content-center">
      <div class="col-md-4 my-4">
        <h4>
        Welcome, Admin! 
    
       </h4>
        
        <div class="card col-md-4 my-4 card text-bg-success mb-3" style="width: 21rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Number of Students:</li>
    <li class="list-group-item">Appointments Set:</li>
    <li class="list-group-item">Available Sechdules:</li>
  </ul>
  <div class="card-footer">
    Summary
  </div>
</div>
       
    
       </div>
       </div>
    </AdminSidebar>

</template>