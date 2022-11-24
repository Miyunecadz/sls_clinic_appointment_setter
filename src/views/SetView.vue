<script setup>
import NavBar from '../components/NavBar.vue'
</script>
<template>
    <NavBar/>
    <div class="container">
        <div class="row justify-content-center" style="height:80vh">
            <div class="col-md-8 my-auto">
                <h4>Set Appointment</h4>
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
                                <label for="appointment Type">Appointment Type</label>
                                <select name="appointment type" id="appointment type" class="form-select">
                                    <option value="">Select one</option>
                                    <option value="Provision of OTC Medicine">Provision of OTC Medicine</option>
                                    <option value="Physical  Assessment">Physical  Assessment</option>
                                    <option value="Consultation">Consultation</option>
                                    <option value="Wound Dressing">Wound Dressing</option>
                                    <option value="Medical/Health Certificate">Medical/Health Certificate</option>
                                    <option value="Blood Pressure Taking">Blood Pressure Taking</option>
                                    <option value="Referral">Referral</option>
                                    <option value="Provision of Comfort">Provision of Comfort</option>
                                    <option value="Other Concerns">Other Concerns</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="appointment time">Appointment Time</label>
                                <select name="appointment time" id="appointment time" class="form-select">
                                    <option value="">Select one</option>
                                    <option value="8:00 - 9:00 AM">8:00 - 9:00 AM</option>
                                    <option value="9:00 - 10:00 AM">9:00 - 10:00 AM</option>
                                    <option value="10:00 - 11:00 AM">10:00 - 11:00 AM</option>
                                    <option value="11:00 - 12:00 PM">11:00 - 12:00 PM</option>
                                    <option value="1:00 - 2:00 PM">1:00 - 2:00 PM</option>
                                    <option value="2:00 - 3:00 PM">2:00 - 3:00 PM</option>
                                    <option value="3:00 - 4:00 PM">3:00 - 4:00 PM</option>
                                    <option value="4:00 - 5:00 PM">4:00 - 5:00 PM</option>
                                    
                                </select>
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
                                <label for="gender">Gender</label>
                                <select name="gender" id="gender" class="form-select">
                                    <option value="">Select one</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                          
                        </div>
                        
                    </div>
                    <div class="row justify-content-center">
                        <div class="col me-auto">
                            <button type="submit" class="btn btn-primary gap-2 mt-2">Set Now</button>
                            
                        </div>
                        
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>