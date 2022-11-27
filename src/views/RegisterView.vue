<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const next = ref(true)
const nextPage = () => {
    next == false
}
</script>
<template>
    <div class="container">
        <div class="row justify-content-center p-5">
            <div class="col-md-10">
                <form action="">
                    <div class="row border">
                        <div class="col-md-6" style="padding-left:0px;">
                            <!-- w-360 h-450 -->
                            <img src="../assets/Homepage.jpg" style="max-width:435px;height:520px;" alt="" srcset="">
                        </div>
                        <div class="col-md p-3">
                            <h4 class="text-center">Register Account</h4>
                            <div v-if="next == true">
                                <div class="form-group">
                                    <label for="id_number">ID Number or Employee ID Number</label>
                                    <input type="text" name="id_number" id="id_number" class="form-control">
                                </div>
                                <!-- Gawskie palihug kog change -->
                                <div class="form-group">
                                    <label for="status">Status</label>
                                    <select name="status" id="status" class="form-select">
                                        <option value="">Select one</option>
                                        <option value="student">Student</option>
                                        <option value="employee">Employee</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="first_name">First Name</label>
                                    <input type="text" name="first_name" id="first_name" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="middle_name">Middle Name</label>
                                    <input type="text" name="middle_name" id="middle_name" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="last_name">Last Name</label>
                                    <input type="text" name="last_name" id="last_name" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="gender">Gender</label>
                                    <select name="gender" id="gender" class="form-select">
                                        <option value="">Select one</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div class="form-group d-grid mt-2">
                                    <button @click="next = false" type="button" class="btn btn-primary">Next</button>
                                </div>
                            </div>

                            <div v-if="next == false">
                                <div class="form-group">
                                    <label for="address">Address</label>
                                    <textarea name="address" id="address" cols="30" rows="4"
                                        class="form-control"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="contact-number">Contact Number</label>
                                    <input type="text" name="contact-number" id="contact-number" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" name="email" id="email" class="form-control">
                                </div>

                                <div class="row">
                                    <div class="col-md">
                                        <label for="password">Password</label>
                                        <input type="text" name="password" id="password" class="form-control">
                                    </div>

                                    <div class="col-md">
                                        <label for="password_confirmation">Confirm Password</label>
                                        <input type="text" name="password_confirmation" id="password_confirmation"
                                            class="form-control">
                                    </div>
                                </div>
                                <div class="form-group d-grid mt-2">
                                    <button @click="next = true" type="button" class="btn btn-secondary my-1">Back</button>
                                    <button type="button" class="btn btn-primary my-1">Register</button>
                                </div>
                            </div>
                            <div class="mt-2 text-center">
                                <router-link to="/login" class="text-dark" style="text-decoration: none;">Already have
                                    an Account? Login here</router-link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  