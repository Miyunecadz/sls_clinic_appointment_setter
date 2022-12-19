<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import axios from "axios";

const userStore = useUserStore();
const authUser = userStore.authUser;

const service = ref("");
const date = ref(0);
const time = ref(0);
const onLoadingState = ref(false)

const setSchedule = async() => {
  onLoadingState.value = true
  const url = "http://localhost:3000/schedules"
  let response = await axios.post(url, {
    specialist_id: authUser.id,
    date: date.value,
    time: time.value,
    service_type: service.value
  })
  response = await response.data
  onLoadingState.value = false
  if(!response.result) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: response.message,
    });
  }

  date.value = ""
  time.value = ""
  service.value = ""
  return Swal.fire({
    icon: "success",
    title: "Great",
    text: response.message
  })
}
</script>

<template>
  <SidebarComponent>
    <div class="container">
      <div class="row justify-content-center" style="height: 80vh">
        <div class="col-6 my-auto">
          <h4>Specialist, Set your schedule here</h4>
          <form action="" method="post">
            <div class="form-group">
              <label for="service">Service Type</label>
              <select
                name="service"
                id="service"
                class="form-select"
                v-model="service"
              >
                <option value="">Select</option>
                <option value="OTC Medication">OTC Medication</option>
                <option value="Wound Dressing">Wound Dressing</option>
                <option value="Consultation">Consultation</option>
                <option value="Medical/Health Certificate">
                  Medical/Health Certificate
                </option>
                <option value="Blood Pressure Taking">
                  Blood Pressure Taking
                </option>
                <option value="Referral">Referral</option>
                <option value="Physical Assessment">Physical Assessment</option>
                <option value="Provision of Comfort">Provision of Comfort</option>
              </select>
            </div>
            <div class="form-group">
              <label for="first">Date</label
              ><span class="text-primary">(MM/DD/YYYY)</span>
              <input
                type="date"
                name="date"
                id="date"
                class="form-control"
                v-model="date"
              />
            </div>
            <div class="form-group">
              <label for="last name">Time</label
              ><span class="text-primary">(HH:MM)</span>
              <input
                type="time"
                name="time"
                id="time"
                class="form-control"
                v-model="time"
              />
            </div>
            <div class="row justify-content-center">
              <div class="col me-auto">
                <button :class="onLoadingState ? 'disabled': ''" type="button" class="btn btn-success mt-2" @click.prevent="setSchedule">
                  <div
                v-if="onLoadingState"
                class="spinner-border text-light"
                role="status"
                style="max-height: 20px; max-width: 20px"
              >
                <span class="visually-hidden">...</span>
              </div>
                  {{onLoadingState ? 'Saving...' : 'Set Schedule'}}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </SidebarComponent>
</template>
