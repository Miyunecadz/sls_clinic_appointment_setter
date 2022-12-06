<script setup>
import {RouterLink} from 'vue-router'
</script>



<template>
<nav class="navbar"  nav-bar expand d-flex flex-column align-item-start id="sidebar">
    <a href="#" class="navbar-brand text-dark mt-5">
<div class="display-5 font-weight-bold">Menu
</div>
    </a>
    <ul class="navbar-nav d-flex flex-column mt-3 w-100">
        <li class="nav-item w-100">
            <RouterLink class="nav-link text-dark pl-4" to="/specialistsetschedule">Set Schedule</RouterLink>

        </li>
        <li class="nav-item w-100">
            <RouterLink class="nav-link text-dark pl-4" to="/set">View Appointments</RouterLink>

        </li>
        

    </ul>

</nav>

</template>