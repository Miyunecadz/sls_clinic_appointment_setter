<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

<template>



<div class="dashboard">
    <Sidebar/>
    <div class= "content">
        <div class="row justify-content-center">
            <div class="col-md-3 my-auto p-2 p-md-5">
            <h3>
                Welcome Back to SLSU Clinic

            </h3>
        </div>


        </div>

      
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
        grid-template-columns: 1fr 6fr;
        background-color:darkcyan;
        height: 100vh;
        width:100vw
    }
    .content{
      background-image:url('../a.jpg');
        border-radius: 40px;
        margin: 4px 4px 4px 4px;
    }

</style>