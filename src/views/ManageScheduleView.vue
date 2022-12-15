<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import {useUserStore} from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>

<template>
    <SidebarComponent> 
       
        <div class="container">
        
        <div class="row justify-content-center">
          <div class="col-md-6 my-4">
            <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="Search" aria-label="search" aria-describedby="button-addon2">
    <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
  </div>
            <h3>Schedule List</h3>
            <div class="col md-4 me-auto">
                              <RouterLink to="/specialist-setschedule" class="btn btn-success">Set New Schedule</RouterLink>
                         
                    </div>
            <table class="table ">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Service Type</th>
                  
                  
  
  
                </tr>
              </thead>
              <tbody class="table-group-divider">
               
                  <td>Date</td>
                  <td>Time</td>
                  <td>Service Type</td>
                 
                  
                 
              
                  
                   
                  
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SidebarComponent>

</template>