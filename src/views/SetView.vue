<script setup>
import NavBar from '../components/NavBar.vue'
</script>
<template>
    <NavBar/>
    <div class="row justify-content-center">
    <div class="col-md-3 bordered">
        <h6>Set Appointment</h6>
        <form action="" method="post">
            <div class="form-group">
                <label for="id number">ID Number</label>
                <input type="text" name="id number" id="id number" class="form-control">
            </div>
            <div class="form-group">
                <label for="first name">First Name</label>
                <input type="text" name="first name" id="id number" class="form-control">
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
                <label for="email address">Email Address</label>
                <input type="text" name="email address" id="email address" class="form-control">
            </div>
            <div class="form-group">
                <label for="gender">Gender</label>
                <input type="text" name="gender" id="gender" class="form-control">
            </div>
            <div class="form-group">
                <label for="contact number">Contact Number</label>
                <input type="integer" name="contact number" id="contact number" class="form-control">
            </div>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle my-1 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
   
    Select appoitment type
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Provision of OTC Medicine</a></li>
    <li><a class="dropdown-item" href="#">Physical Assessment</a></li>
    <li><a class="dropdown-item" href="#">Consultation</a></li>
    <li><a class="dropdown-item" href="#">Wound Dressing</a></li>
    <li><a class="dropdown-item" href="#">Medical/Health Certificate</a></li>
    <li><a class="dropdown-item" href="#">Blood Pressure Taking</a></li>
    <li><a class="dropdown-item" href="#">Referral</a></li>
    <li><a class="dropdown-item" href="#">Provision of Comfort</a></li>
    <li><a class="dropdown-item" href="#">Other Concerns</a></li>
    
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle my-1 " type="button" data-bs-toggle="dropdown" aria-expanded="false">
   
    Select time
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">8:00 - 9:00 AM</a></li>
    <li><a class="dropdown-item" href="#">10:00 - 11:00 AM</a></li>
    <li><a class="dropdown-item" href="#">11:00 - 12:00 PM</a></li>
    <li><a class="dropdown-item" href="#">1:00 - 2:00 PM</a></li>
    <li><a class="dropdown-item" href="#">2:00 - 3:00 PM</a></li>
    <li><a class="dropdown-item" href="#">3:00 - 400 PM</a></li>
    <li><a class="dropdown-item" href="#">4:00 - 5:00 PM</a></li>
  </ul>
</div>

<div class="form-group my-1 d-grid">
    <button type="submit" class="btn btn-primary">Set Appointment</button>
    <button type="submit" class="btn btn-outline-primary mt-2" >Cancel</button>
            </div>


        </form>
    </div>
  </div>
</template>