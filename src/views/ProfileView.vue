<script setup>
import Sidebar from '../components/sidebar.vue'
</script>
<template>
    <Sidebar />
    <div class="row justify-content-center">
    <div class="col-md-3 my-auto p-2 p-md-4 bordered">
      <form action="">
          <h6 class="text-center">Your Profile</h6>
          <div class="form-group my-3">
            <label for="id number">ID Number</label>
            
          </div>
          <div class="form-group my-3">
            <label for="firstname">First Name</label>

          </div>
          <div class="form-group my-3">
            <label for="middle name">Middle Name</label>
          </div>
          <div class="form-group my-3">
            <label for="last name">Last Name</label>
          </div>
          <div class="form-group my-3">
            <label for="gender">Gender</label>
          </div>
          <div class="form-group my-3">
            <label for="address">Address</label>
          </div>
          <div class="form-group my-3">
            <label for="contact number">Contact Number</label>
          </div>
          <div class="form-group my-3">
            <label for="email">Email</label>
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
</template>
  