<script setup>
import { defineProps, onBeforeMount } from "vue";
defineProps({
  appointment: Object,
  schedule: Object,
});
</script>
<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Appointment Details
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-group my-3">
            <label for="firstname"
              >First Name: {{ appointment.first_name }}</label
            >
          </div>
          <div class="form-group my-3">
            <label for="firstname"
              >Middle Name: {{ appointment.middle_name }}</label
            >
          </div>
          <div class="form-group my-3">
            <label for="firstname"
              >Last Name: {{ appointment.last_name }}</label
            >
          </div>
          <div class="form-group my-3">
            <label for="firstname"
              >Service Type: {{ schedule.service_type }}</label
            >
          </div>
          <div class="form-group my-3">
            <label for="firstname">Service Time: {{ schedule.time }}</label>
          </div>
          <div class="form-group my-3">
            <label for="firstname">Service Date: {{ schedule.date }}</label>
          </div>
          <div class="form-group my-3">
            <label for="firstname"
              >Contact Number: {{ appointment.contact_number }}</label
            >
          </div>
          <div class="form-group my-3">
            <label for="firstname">Email: {{ appointment.email }}</label>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
