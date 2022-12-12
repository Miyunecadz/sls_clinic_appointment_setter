<script setup>
import AdminSidebar from '../components/AdminSidebarComponent.vue'
import {useUserStore} from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>

<template>
    <AdminSidebar> 
       
        <div class="row justify-content-center">
      <div class="col-md-3 my-auto p-2 p-md-4 ">
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="search" aria-label="search" aria-describedby="button-addon2">
  <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
</div>
        <div class="card">
            
  <h5 class="card-header">List of Specialist </h5>
  <div class="card-body">
    <h5 class="card-title">Specialist 1</h5>
    <p class="card-text">Specialist 1 - Name</p>
    <h5 class="card-title">Specialist 2</h5>
    <p class="card-text">Specialist 2 - Name</p>
    <RouterLink class="btn btn-success" to="/adminaddspecialist">Add Specialist</RouterLink>
  </div>
</div>
       
    
       </div>
       </div>
    </AdminSidebar>

</template>