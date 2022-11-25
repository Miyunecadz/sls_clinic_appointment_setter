<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

<template>



<div class="dashboard">
    <Sidebar/>
    <div class="content">
        Welcome back to SLSU Clinic
    </div>

</div>

<!--<div class="bg-image" style="background-image:url('../care.jpg');">

    
    <h1 class="text-dark text-center p-4">Welcome to back to SLSU Medical Clinic</h1>
        <h3 class="text-danger text-center ms-auto me-auto my-auto">Serve with love and care</h3>
</div>
-->

    </template>
    <style scoped>
    .dashboard{
        display:grid;
        grid-template-columns: 1fr 5fr;
        background-color:darkcyan;
        height: 100vh;
        width:100vw
    }
    .content{
        background-color:white;
        border-radius: 40px;
        margin: 4px 4px 4px 4px;
    }

</style>