<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.js";

const router = useRouter();
const userStore = useUserStore();
const onLoadState = ref(false);
const userInput = ref({
  id_number: "",
  status: "",
  first_name: "",
  middle_name: "",
  last_name: "",
  gender: "",
  address: "",
  contact_number: "",
  email: "",
  password: "",
  confirm_password: "",
});

async function createUser() {
  onLoadState.value = true;
  if (userInput.value.password != userInput.value.confirm_password) {
    onLoadState.value = false;
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password does not match",
    });
  }

  if (
    !userInput.value.id_number ||
    !userInput.value.status ||
    !userInput.value.first_name ||
    !userInput.value.last_name ||
    !userInput.value.gender ||
    !userInput.value.address ||
    !userInput.value.contact_number ||
    !userInput.value.email ||
    !userInput.value.password
  ) {
    onLoadState.value = false;
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill up the required fields",
    });
  }

  const url = "http://localhost:3000/patients";
  const response = await userStore.save(url, userInput.value);

  if (!response.result) {
    onLoadState.value = false;
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: response.message,
    });
  }

  userInput.value = {
    id_number: "",
    status: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    address: "",
    contact_number: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  return router.push("/dashboard");
}

const next = ref(true);
const nextPage = () => {
  next.value == false;
};
</script>
<template>
  <div class="container">
    <div class="row justify-content-center p-5">
      <div class="col-md-10">
        <form action="" @submit.prevent="createUser">
          <div class="row border">
            <div class="col-md-6" style="padding-left: 0px">
              <!-- w-360 h-450 -->
              <img
                src="../assets/Homepage.jpg"
                style="max-width: 435px; height: 520px"
                alt=""
                srcset=""
              />
            </div>
            <div class="col-md p-3">
              <h4 class="text-center">Register Account</h4>
              <div v-if="next == true">
                <div class="form-group">
                  <label for="id_number"
                    >ID Number or Employee ID Number
                    <span class="text-danger">*</span></label
                  >
                  <input
                    v-model="userInput.id_number"
                    type="text"
                    name="id_number"
                    id="id_number"
                    class="form-control"
                  />
                </div>
                <!-- Gawskie palihug kog change -->
                <div class="form-group">
                  <label for="status"
                    >Status <span class="text-danger">*</span></label
                  >
                  <select
                    name="status"
                    id="status"
                    class="form-select"
                    v-model="userInput.status"
                  >
                    <option value="">Select one</option>
                    <option value="student">Student</option>
                    <option value="employee">Employee</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="first_name"
                    >First Name <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    class="form-control"
                    v-model="userInput.first_name"
                  />
                </div>
                <div class="form-group">
                  <label for="middle_name">Middle Name </label>
                  <input
                    type="text"
                    name="middle_name"
                    id="middle_name"
                    class="form-control"
                    v-model="userInput.middle_name"
                  />
                </div>
                <div class="form-group">
                  <label for="last_name"
                    >Last Name <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    class="form-control"
                    v-model="userInput.last_name"
                  />
                </div>

                <div class="form-group">
                  <label for="gender"
                    >Gender <span class="text-danger">*</span></label
                  >
                  <select
                    name="gender"
                    id="gender"
                    class="form-select"
                    v-model="userInput.gender"
                  >
                    <option value="">Select one</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div class="form-group d-grid mt-2">
                  <button
                    @click="next = false"
                    type="button"
                    class="btn btn-primary"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div v-if="next == false">
                <div class="form-group">
                  <label for="address"
                    >Address <span class="text-danger">*</span></label
                  >
                  <textarea
                    name="address"
                    id="address"
                    cols="30"
                    rows="4"
                    class="form-control"
                    v-model="userInput.address"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="contact-number"
                    >Contact Number <span class="text-danger">*</span></label
                  >
                  <input
                    type="text"
                    name="contact-number"
                    id="contact-number"
                    class="form-control"
                    v-model="userInput.contact_number"
                  />
                </div>

                <div class="form-group">
                  <label for="email"
                    >Email Address <span class="text-danger">*</span></label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="form-control"
                    v-model="userInput.email"
                  />
                </div>

                <div class="row">
                  <div class="col-md">
                    <label for="password"
                      >Password <span class="text-danger">*</span></label
                    >
                    <input
                      type="password"
                      name="password"
                      id="password"
                      class="form-control"
                      v-model="userInput.password"
                    />
                  </div>

                  <div class="col-md">
                    <label for="password_confirmation"
                      >Confirm Password
                      <span class="text-danger">*</span></label
                    >
                    <input
                      type="password"
                      name="password_confirmation"
                      id="password_confirmation"
                      v-model="userInput.confirm_password"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="form-group d-grid mt-2">
                  <button
                    @click="next = true"
                    type="button"
                    class="btn btn-secondary my-1"
                  >
                    Back
                  </button>
                  <button
                    :class="onLoadState ? 'disabled' : ''"
                    type="submit"
                    class="btn btn-primary my-1"
                  >
                    <div
                      v-if="onLoadState"
                      class="spinner-border text-light"
                      role="status"
                      style="max-height: 20px; max-width: 20px"
                    >
                      <span class="visually-hidden">...</span>
                    </div>
                    {{ onLoad ? "Registering..." : "Register" }}
                  </button>
                </div>
              </div>
              <div class="mt-2 text-center">
                <router-link
                  to="/login"
                  class="text-dark"
                  style="text-decoration: none"
                  >Already have an Account? Login here</router-link
                >
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
