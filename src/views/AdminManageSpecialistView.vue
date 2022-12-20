<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import { useUserStore } from "@/stores/user";
import axios from "axios";
import { ref, onMounted } from "vue";
import {useTempStore} from '@/stores/temp';
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();
const authUser = userStore.authUser;
const specialists = ref([]);

const getAllSpecialist = async () => {
  const url = "http://localhost:3000/specialists";
  let response = await axios.get(url);
  response = response.data;
  specialists.value = response.specialists;
};

const deleteSpecialist = async(id) => {
  const url = "http://localhost:3000/specialists/delete";
  let response = await axios.post(url, {
    id: id
  })
  response = response.data;
  if(!response.result) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: response.message,
    });
  }

  await getAllSpecialist()
   return Swal.fire({
      icon: "success",
      title: "Great!",
      text: response.message,
    });
}

const updateSpecialist = (specialist) => {
  const tempStore = useTempStore()
  tempStore.tempData = specialist
  router.push({name: 'admin-edit-specialist'})
}

onMounted(async()=> {
  await getAllSpecialist()
})
</script>

<template>
  <SidebarComponent>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 my-4">
          <h4>List of Specialist</h4>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Specialist Name</th>

                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr v-for="specialist in specialists" :key="specialist.id">
                <td>{{ specialist.first_name }} {{ specialist.last_name }}</td>
                <td>
                  <div class="d-flex gap-3">
                    <button
                    type="button"
                    class="btn btn-warning"
                    @click="updateSpecialist(specialist)"
                    >Edit Specialist</button>
                  <button type="button" class="btn btn-danger" @click="deleteSpecialist(specialist.id)">
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
