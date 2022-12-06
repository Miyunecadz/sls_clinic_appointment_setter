<script setup>
import SidebarSpecialist from '../components/SpecialistSidebarComponent.vue'
import {useUserStore} from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>

<template>
    <SidebarSpecialist> 
       
        <div class="row justify-content-center">
      <div class="col-md-3 my-auto p-2 p-md-4 ">
        <h3>
        Welcome, Doctor<label for="first_name">{{authUser.first_name}}</label>
    
       </h3>
       
    
       </div>
       </div>
    </SidebarSpecialist>

</template>