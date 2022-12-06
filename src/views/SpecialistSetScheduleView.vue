<script setup>
import SidebarSpecialist from '../components/SpecialistSidebarComponent.vue'
import {useUserStore} from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>

<template>
    <SidebarSpecialist> 
       
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
                                <label for="gender">Service Type</label>
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
                            <button type="submit" class="btn btn-success mt-2">Set My Schedule</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    </SidebarSpecialist>

</template>