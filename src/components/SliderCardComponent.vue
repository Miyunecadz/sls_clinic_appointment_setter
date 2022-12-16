<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: String,
  date: String,
  time: String,
  specialist: String,
  value: String,
  active: Boolean,
});

defineEmits(["update:service"]);
</script>

<template>
  <label class="card p-2 mx-1 my-2" style="width: 230px">
    <input
      v-if="active == true"
      class="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="flexRadioDefault1"
      :value="props.value"
      @input="$emit('update:service', $event.target.value)"
    />
    <h6 class="form-check-label mt-2" for="flexRadioDefault1">
      {{ props.title }}
    </h6>
    <p>
      {{ props.specialist }}
    </p>
    <div class="d-flex">
      <span>
        {{ props.date }}
      </span>
      <span class="ms-auto">
        {{ props.time }}
      </span>
    </div>
  </label>
</template>
