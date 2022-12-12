<script setup>
import AdminSidebar from '../components/AdminSidebarComponent.vue'
import {useUserStore} from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>

<template>
    <AdminSidebar> 
        <div class="container">
        <div class="row justify-content-center" style="height:80vh">
            <div class="col-md-4 my-auto">
                <h4>Admin, Add Specialist here</h4>
                <form action="" method="post">
                    <div class="row">
                        <div class="col-md">

                            <div class="form-group">
                                <label for="id number">Employee ID </label>
                                <span
                                            class="text-danger">*</span>
                                <input type="text" name="id number" id="id number" class="form-control">
                            </div>
                            <div class="row gap-1">
                                <div class="form-group col-md">
                                    <label for="first name">First Name</label>
                                    <span
                                            class="text-danger">*</span>
                                    <input type="text" name="first name" id="first name" class="form-control">
                                </div>
                               
                            </div>
                            <div class="form-group">
                                <label for="last name">Last Name</label>
                                <span
                                            class="text-danger">*</span>
                                <input type="text" name="last name" id="last name" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <span
                                            class="text-danger">*</span>
                                <input type="text" name="email" id="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="number">Contact Number </label>
                                <span
                                            class="text-danger">*</span>
                                <input type="text" name="number" id="number" class="form-control">
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    <div class="row justify-content-center">
                        <div class="col me-auto">
                            <button type="submit" class="btn btn-success mt-2">Add Specialist</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    </AdminSidebar>

</template>