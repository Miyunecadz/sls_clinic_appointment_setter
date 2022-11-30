<script setup>
import Sidebar from '../components/SidebarComponent.vue'
</script>

<template>
  <Sidebar>

  <div class="container">
        <div class="row justify-content-center" style="height:80vh">
            <div class="col-md-8 my-auto">
                <h4>Update Profile</h4>
                <form action="" method="post">
                    <div class="row">
                        <div class="col-md">

                            <div class="form-group">
                                <label for="id number">ID Number</label>
                                <input type="text" name="id number" id="id number" class="form-control">
                            </div>
                            <div class="row gap-1">
                                <div class="form-group col-md">
                                    <label for="first">First Name</label>
                                    <input type="text" name="first name" id="first name" class="form-control">
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="middle name">Middle Name</label>
                                    <input type="text" name="middle name" id="middle name" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="last name">Last Name</label>
                                <input type="text" name="last name" id="last name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="gender">Gender</label>
                                <select name="gender" id="gender" class="form-select">
                                    <option value="">Select one</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="address">Address</label>
                                <textarea name="address" id="address" class="form-control" cols="10"
                                    rows="5"></textarea>
                            </div>
                        </div>
                        <div class="col-md">
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
                        </div>
                        
                    </div>
                    <div class="row justify-content-center">
                        <div class="col me-auto">
                            <button type="submit" class="btn btn-success mt-2">Update</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </Sidebar>
</template>