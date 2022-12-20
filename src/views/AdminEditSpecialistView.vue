<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import { ref, onMounted } from "vue";
import { useTempStore } from "@/stores/temp";
import { useRouter } from "vue-router";
import axios from "axios";

const temp = useTempStore().tempData
const router = useRouter();
const onLoadState = ref(false);

const id = ref()
const employee_id = ref()
const inputData = ref({
  first_name: "",
    last_name: "",
    contact_number: "",
    email: "",
})

const updateProfile = async () => {
  onLoadState.value = true;
  const url = "http://localhost:3000/specialists/update/"+id.value;
  let response = await axios.post(url, inputData.value)
  response = response.data
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
    return router.push({name: "admin-manage-specialist"});
  }, 5000);
};

onMounted(()=> {
  if(temp == null) {
    return router.push({name: "admin-manage-specialist"})
  }

  id.value = temp.id
  employee_id.value = temp.employee_id
  inputData.value = {
    first_name: temp.first_name,
    last_name: temp.last_name,
    contact_number: temp.contact_number,
    email: temp.email,
  }
})
</script>

<template>
  <SidebarComponent>
    <div class="container">
      <div class="row justify-content-center" style="height: 80vh">
        <div class="col-md-6 my-auto">
          <h4>Edit Specialist</h4>
          <form action="" method="post" @submit.prevent="updateProfile">
            <div class="form-group">
              <label for="id number">Employee Number</label>
              <input
                type="text"
                name="id number"
                id="id number"
                class="form-control"
                :value="employee_id"
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
                  v-model="inputData.first_name"
                />
              </div>
              <div class="form-group col-md">
                <label for="last name">Last Name</label>
                <input
                  type="text"
                  name="last name"
                  id="last name"
                  class="form-control"
                  v-model="inputData.last_name"
                />
              </div>
            </div>

            <div class="form-group">
              <label for="contact_number">Contact Number</label>
              <input
                type="text"
                name="contact_number"
                id="contact_number"
                class="form-control"
                v-model="inputData.contact_number"
              />
            </div>
            <div class="form-group">
              <label for="email address">Email Address</label>
              <input
                type="text"
                name="email address"
                id="email address"
                class="form-control"
                v-model="inputData.email"
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
  </SidebarComponent>
</template>
