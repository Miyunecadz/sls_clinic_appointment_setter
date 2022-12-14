<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
const authUser = userStore.authUser
</script>

<template>
  <SidebarComponent>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 my-4">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" aria-label="search"
              aria-describedby="button-addon2">
            <button class="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
          </div>
          <h3>Appointments</h3>

          <table class="table ">
            <thead>
              <tr>
                <th scope="col">Appointment Title</th>
                <th scope="col">Patient</th>
                <th scope="col">Schedule</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">

              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>a</td>
              <td>
                <div class="col me-auto">
                  <button type="submit" class="btn btn-success">Approve</button>
                </div>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </SidebarComponent>
</template>