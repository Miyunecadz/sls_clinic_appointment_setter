<script setup>
import { RouterLink } from 'vue-router'
import {defineProps} from 'vue'
const props = defineProps({
    title: String,
    link: String
})
</script>
<template>
    <div class="mt-3 mx-5">
        <!-- If you want to call variable use : (colon) -->
        <!-- So that you can use the variable  -->
        <router-link :to="props.link" style="text-decoration:none; width:100%;">{{props.title}}</router-link>
    </div>
</template>