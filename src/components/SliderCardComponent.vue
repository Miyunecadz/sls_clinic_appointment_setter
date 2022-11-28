<script setup>
import {defineProps} from 'vue'

const props = defineProps({
    title: String,
    date: String,
    time: String
})
</script>

<template>
    <label class="card p-2">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <h6 class="form-check-label mt-2" for="flexRadioDefault1">
            {{props.title}}
        </h6>
        <div class="d-flex gap-3">
            <span>
                {{props.date}}
            </span>
            <span>
                {{props.time}}
            </span>
        </div>
    </label>
</template>