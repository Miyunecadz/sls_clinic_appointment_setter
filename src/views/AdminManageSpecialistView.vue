<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import { useUserStore } from "@/stores/user";
import axios from "axios";
import { ref, onMounted } from "vue";

const userStore = useUserStore();
const authUser = userStore.authUser;
const specialists = ref([]);

const getAllSpecialist = async () => {
  const url = "http://localhost:3000/specialists";
  let response = await axios.get(url);
  response = response.data;
  specialists.value = response.specialists;
};

onMounted(async()=> {
  await getAllSpecialist()
})
</script>

<template>
  <SidebarComponent>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 my-4">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="search"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </div>
          <h3>Manage Specialists</h3>
          <div class="col md-4 me-auto">
            <RouterLink to="/admin-add-specialist" class="btn btn-success"
              >Add Specialist</RouterLink
            >
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Specialist Name</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="specialist in specialists">
                <td>{{ specialist.first_name }} {{ specialist.last_name }}</td>
                <td>
                  <div class="d-flex gap-3">
                    <RouterLink
                    to="/admin-edit-specialist"
                    class="btn btn-warning"
                    >Edit Specialist</RouterLink
                  >
                  <button type="delete" class="btn btn-danger">
                    Delete Specialist
                  </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </SidebarComponent>
</template>
