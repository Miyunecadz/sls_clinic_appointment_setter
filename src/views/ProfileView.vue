<script setup>
import Sidebar from '../components/SidebarComponent.vue'
import {useUserStore} from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>
<template>
  <Sidebar>
    <div class="row justify-content-center">
      <div class="col-md-3 my-auto p-2 p-md-4 bordered">
        <form action="">
          <h6 class="text-center">Your Profile</h6>
          <div class="form-group my-3">
            <label for="id number">ID Number: {{authUser.id_number}}</label>

          </div>
          <div class="form-group my-3">
            <label for="Status:">Status: {{authUser.status}}</label>

          </div>
          <div class="form-group my-3">
            <label for="firstname">First Name: {{authUser.first_name}}</label>

          </div>
          <div class="form-group my-3">
            <label for="middle name">Middle Name: {{authUser.middle_name}}</label>
          </div>
          <div class="form-group my-3">
            <label for="last name">Last Name: {{authUser.last_name}}</label>
          </div>
          <div class="form-group my-3">
            <label for="gender">Gender: {{authUser.gender}}</label>
          </div>
          <div class="form-group my-3">
            <label for="address">Address: {{authUser.address}}</label>
          </div>
          <div class="form-group my-3">
            <label for="contact number">Contact Number: {{authUser.contact_number}}</label>
          </div>
          <div class="form-group my-3">
            <label for="email">Email: {{authUser.email}}</label>
          </div>

          <div class="form-group my-3 d-grid">

            <RouterLink class="btn btn-success" to="/updateprofile">Update Profile</RouterLink>
          </div>
          <div class="form-group my-3 d-grid">

            <button type="submit" class="btn btn-danger" to="/set">Delete Profile</button>
          </div>


        </form>
      </div>
    </div>
  </Sidebar>
</template>
  