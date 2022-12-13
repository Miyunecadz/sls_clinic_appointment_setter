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
            <form class="d-flex" role="search">
      <input class="form-control me-2 my-auto p-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
</div>
        <div class="card">
            
  <h5 class="card-header">List of Specialist </h5>
  <div class="card-body">
    <h5 class="card-title">Specialist 1</h5>
    <p class="card-text">Specialist 1 - Name</p>
    <h5 class="card-title">Specialist 2</h5>
    <p class="card-text">Specialist 2 - Name</p>
    <RouterLink class="btn btn-success" to="/admin-add-specialist">Add Specialist</RouterLink>
  </div>
</div>
       
    
       </div>
       </div>
    </AdminSidebar>

</template>