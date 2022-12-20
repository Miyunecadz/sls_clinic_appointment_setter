<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import {ref} from 'vue'
import axios from "axios";
const onLoadState = ref(false);

const userInput = ref({
  employee_id: "",
  first_name: "",
  last_name: "",
  email: "",
  contact_number: "",
  address: "",
})

const registerSpecialist = async() => {
  onLoadState.value = true
  const url = "http://localhost:3000/specialists/"
  let response = await axios.post(url, userInput.value)
  response = response.data

  onLoadState.value = false
  if(!response.result) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: response.message,
    });
  }

  userInput.value = {
    employee_id: "",
    first_name: "",
    last_name: "",
    email: "",
    contact_number: ""
  }
  return Swal.fire({
    icon: "success",
    title: "Nice!",
    text: response.message,
  });
}
</script>

<template>
  <SidebarComponent>
    <div class="container">
      <div class="row justify-content-center" style="height: 80vh">
        <div class="col-md-5 my-auto">
          <h4>Add Specialist here</h4>
          <form action="" method="post" @submit.prevent="registerSpecialist">
            <div class="row">
              <div class="col-md">
                <div class="form-group">
                  <label for="id number">Employee ID </label>
                  <span class="text-danger">*</span>
                  <input
                    type="text"
                    name="id number"
                    id="id number"
                    class="form-control"
                    v-model="userInput.employee_id"
                  />
                </div>
                <div class="row gap-1">
                  <div class="form-group col-md">
                    <label for="first name">First Name</label>
                    <span class="text-danger">*</span>
                    <input
                      type="text"
                      name="first name"
                      id="first name"
                      class="form-control"
                      v-model="userInput.first_name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="last name">Last Name</label>
                  <span class="text-danger">*</span>
                  <input
                    type="text"
                    name="last name"
                    id="last name"
                    class="form-control"
                    v-model="userInput.last_name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <span class="text-danger">*</span>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control"
                    v-model="userInput.email"
                  />
                </div>
                <div class="form-group">
                  <label for="number">Address </label>
                  <span class="text-danger">*</span>
                  <textarea name="address" id="" cols="30" rows="5" class="form-control" v-model="userInput.address"></textarea>
                </div>
                <div class="form-group">
                  <label for="number">Contact Number </label>
                  <span class="text-danger">*</span>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    class="form-control"
                    v-model="userInput.contact_number"
                  />
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col me-auto">
                <button :class="onLoadState ? 'disabled' : ''" type="submit" class="btn btn-success mt-2">
                  <div
                    v-if="onLoadState"
                    class="spinner-border text-light"
                    role="status"
                    style="max-height: 20px; max-width: 20px"
                  >
                    <span class="visually-hidden">...</span>
                  </div>
                  {{onLoadState ? 'Saving...' : 'Add Specialist'}}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </SidebarComponent>
</template>
