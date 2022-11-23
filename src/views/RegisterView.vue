<script setup>
import NavBar from '../components/NavBar.vue'
</script>
<template>
    <NavBar/>
    <div class="row justify-content-center">
      <div class="col-md-5 bordered">
          <h6>Register</h6>
          <form action="" method="post">
              <div class="form-group">
                  <label for="id number">ID Number</label>
                  <input type="text" name="id number" id="id number" class="form-control">
              </div>
              <div class="form-group">
                  <label for="first">First Name</label>
                  <input type="text" name="first name" id="first name" class="form-control">
              </div>
              <div class="form-group">
                  <label for="middle name">Middle Name</label>
                  <input type="text" name="middle name" id="middle name" class="form-control">
              </div>
              <div class="form-group">
                  <label for="last name">Last Name</label>
                  <input type="text" name="last name" id="last name" class="form-control">
              </div>
              <div class="form-group">
                  <label for="address">Address</label>
                  <input type="text" name="address" id="address" class="form-control">
              </div>
              <div class="form-group">
                  <label for="gender">Gender</label>
                  <input type="text" name="gender" id="gender" class="form-control">
              </div>
              <div class="form-group">
                  <label for="contact number">Contact Number</label>
                  <input type="text" name="contact number" id="contact number" class="form-control">
              </div>
              <div class="form-group">
                  <label for="email address">Email Address</label>
                  <input type="text" name="email address" id="email address" class="form-control">
              </div>
              <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" name="password" id="password" class="form-control">
              </div>
  
  
  
              <div class="d-grid gap-1 d-md-flex justify-content-md-left">
                <button type="submit" class="btn btn-primary mt-2">Sign up</button>
                <button type="submit" class="btn btn-outline-primary mt-2">Cancel</button>
</div>
            
  
          </form>
      </div>
    </div>
  </template>
  