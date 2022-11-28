<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: String,
    date: String,
    time: String,
    specialist: String
})
</script>

<template>
    <label class="card p-2 mx-1" style="width:230px;">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
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