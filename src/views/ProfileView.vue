<script setup>
import Sidebar from "../components/SidebarComponent.vue";
import { useUserStore } from "@/stores/user";
import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const userStore = useUserStore();
const authUser = userStore.authUser;
const loadingState = ref(false);
async function deleteAccount() {
  loadingState.value = true;
  const id = authUser.id;
  const accountType = authUser.account_type;
  const url = "http://localhost:3000/accounts/delete";
  let response = await axios.post(url, {
    id: id,
    accountType: accountType,
  });
  response = await response.data;
  if (!response.result) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: response.message,
    });
  }
  loadingState.value = false;
  userStore.authUser = "";
  return router.push({ name: "login" });
}
</script>
<template>
  <Sidebar>
    <div class="row justify-content-center" style="margin: 0 0">
      <div class="col-md-5 my-auto p-2 p-md-4 bordered">
        <form action="">
          <h6 class="text-center">Your Profile</h6>
          <div class="form-group my-3">
            <label for="id number"
              >ID Number:
              {{ authUser.id_number ?? authUser.employee_id }}</label
            >
          </div>
          <div class="form-group my-3" v-if="authUser.status">
            <label for="Status:">Status: {{ authUser.status }}</label>
          </div>
          <div class="form-group my-3">
            <label for="firstname">First Name: {{ authUser.first_name }}</label>
          </div>
          <div class="form-group my-3" v-if="authUser.middle_name">
            <label for="middle name"
              >Middle Name: {{ authUser.middle_name }}</label
            >
          </div>
          <div class="form-group my-3">
            <label for="last name">Last Name: {{ authUser.last_name }}</label>
          </div>
          <div class="form-group my-3" v-if="authUser.gender">
            <label for="gender">Gender: {{ authUser.gender }}</label>
          </div>
          <div class="form-group my-3">
            <label for="address">Address: {{ authUser.address }}</label>
          </div>
          <div class="form-group my-3">
            <label for="contact number"
              >Contact Number: {{ authUser.contact_number }}</label
            >
          </div>
          <div class="form-group my-3">
            <label for="email">Email: {{ authUser.email }}</label>
          </div>
          

          <div class="form-group my-3 d-grid gap-2">
            <RouterLink class="btn btn-success" to="/update-profile"
              >Update Profile</RouterLink
            >
            <button
              type="button"
              class="btn btn-danger"
              @click.prevent="deleteAccount"
            >
              <div
                v-if="loadingState"
                class="spinner-border text-light"
                role="status"
                style="max-height: 20px; max-width: 20px"
              >
                <span class="visually-hidden">...</span>
              </div>
              {{ loadingState ? "Deleting Profile ..." : "Delete Profile" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </Sidebar>
</template>
