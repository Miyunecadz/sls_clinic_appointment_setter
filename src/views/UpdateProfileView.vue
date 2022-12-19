<script setup>
import Sidebar from "../components/SidebarComponent.vue";
import { onBeforeMount, ref } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const authUser = userStore.authUser;
const router = useRouter();

const onLoadState = ref(false);
const id_number = ref("");

onBeforeMount(() => {
  if (authUser.account_type == 1) {
    id_number.value = authUser.id_number;
  } else if (authUser.account_type == 2) {
    id_number.value = authUser.employee_id;
  }
});

const userInput = ref({
  id: authUser.id,
  status: authUser.status,
  first_name: authUser.first_name,
  middle_name: authUser.middle_name,
  last_name: authUser.last_name,
  gender: authUser.gender,
  address: authUser.address,
  contact_number: authUser.contact_number,
  email: authUser.email,
});

const updateProfile = async () => {
  onLoadState.value = true;
  let url = "";
  if (authUser.account_type == 1) {
    url = "http://localhost:3000/patients/update";
  } else if (authUser.account_type == 2) {
    url = "http://localhost:3000/profile/update";
  }
  const response = await userStore.save(url, userInput.value);

  if (!response.result) {
    onLoadState.value = false;
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: response.message,
    });
  }

  onLoadState.value = false;
  Swal.fire({
    icon: "success",
    title: "Nice!",
    text: response.message,
  });

  setTimeout(() => {
    return router.push("/profile");
  }, 5000);
};
</script>

<template>
  <Sidebar>
    <div class="container">
      <div class="row justify-content-center" style="height: 80vh">
        <div class="col-md-6 my-auto">
          <h4>Update Profile</h4>
          <form action="" method="post" @submit.prevent="updateProfile">
            <div class="form-group">
              <label for="id number">{{
                authUser.account_type == 1 ? "ID Number" : "Employee ID"
              }}</label>
              <input
                type="text"
                name="id number"
                id="id number"
                class="form-control"
                v-model="id_number"
                readonly
              />
            </div>
            <div class="row gap-1">
              <div class="form-group col-md">
                <label for="first">First Name</label>
                <input
                  type="text"
                  name="first name"
                  id="first name"
                  class="form-control"
                  v-model="userInput.first_name"
                />
              </div>
              <div
                class="form-group col-md-4"
                v-if="authUser.account_type == 1"
              >
                <label for="middle name">Middle Name</label>
                <input
                  type="text"
                  name="middle name"
                  id="middle name"
                  class="form-control"
                  v-model="userInput.middle_name"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="last name">Last Name</label>
              <input
                type="text"
                name="last name"
                id="last name"
                class="form-control"
                v-model="userInput.last_name"
              />
            </div>
            <div class="form-group" v-if="authUser.account_type == 1">
              <label for="gender">Gender</label>
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
            <div class="form-group">
              <label for="address">Address</label>
              <textarea
                name="address"
                id="address"
                class="form-control"
                cols="10"
                rows="5"
                v-model="userInput.address"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="contact_number">Contact Number</label>
              <input
                type="text"
                name="contact_number"
                id="contact_number"
                class="form-control"
                v-model="userInput.contact_number"
              />
            </div>
            <div class="form-group">
              <label for="email address">Email Address</label>
              <input
                type="text"
                name="email address"
                id="email address"
                class="form-control"
                v-model="userInput.email"
              />
            </div>

            <div class="row justify-content-center mt-2">
              <div class="col me-auto d-grid">
                <button
                  :class="onLoadState ? 'disabled' : ''"
                  type="submit"
                  class="btn btn-success mt-2"
                >
                  <div
                    v-if="onLoadState"
                    class="spinner-border text-light"
                    role="status"
                    style="max-height: 20px; max-width: 20px"
                  >
                    <span class="visually-hidden">...</span>
                  </div>
                  {{ onLoadState ? "Updating..." : "Update" }}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Sidebar>
</template>
