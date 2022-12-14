<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>

<template>
    <SidebarComponent>
        <div class="container">
            <div class="row justify-content-center" style="height:80vh">
                <div class="col-md-4 my-auto">
                    <h4>Specialist, Set your schedule here</h4>
                    <form action="" method="post">
                        <div class="row">
                            <div class="col-md">

                                <div class="form-group">
                                    <label for="id number">Specialist ID</label>
                                    <input type="text" name="id number" id="id number" class="form-control">
                                </div>
                                <div class="row gap-1">
                                    <div class="form-group col-md">
                                        <label for="first">Date</label>
                                        <input type="text" name="first name" id="first name" class="form-control">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="last name">Time</label>
                                    <input type="text" name="last name" id="last name" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="service">Service Type</label>
                                    <select name="service" id="service" class="form-select">
                                        <option value="">Select</option>
                                        <option value="otc">Otc Medication</option>
                                        <option value="wound">Wound Dressing</option>
                                        <option value="Consultation">Consultation</option>
                                        <option value="cert">Medical/Health Certificate</option>
                                        <option value="bp">Blood Pressure Taking</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col me-auto">
                                <button type="submit" class="btn btn-success mt-2">Set My Schedule</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </SidebarComponent>
</template>