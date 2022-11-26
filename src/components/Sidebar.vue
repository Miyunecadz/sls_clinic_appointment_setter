<script setup>
import {RouterLink} from 'vue-router'
</script>



<template>

<div class="sidebar">
<div class="title">
     Dashboard
</div>
<div class="menu-item">
    
    <RouterLink to="/" class="btn btn-outline-none"> 
        <div class="text-light">
        Home

    </div>
    </RouterLink>
</div>
<div class="menu-item">
    <RouterLink to="/set" class="btn btn-outline-none" > 
        <div class="text-light">
        Set Appointment

    </div>
    </RouterLink>
</div>

<div class="menu-item">
    <RouterLink to="/profile" class="btn btn-outline-none"> 
        <div class="text-light">
            Profile
    </div>
    </RouterLink>
</div>


</div>

</template>
<style scoped>
.title{
    
    color:white;
    font-size: 20px;
    margin-top: 10px;
}
.menu-item{
    display:flex;
    flex-direction:column;
    margin-top: 10px;
}
.menu-item > = {
    margin-top:30px;
}
.side-btn:focus{
    outline:none;

}

.side-btn{
    border:none;
    padding: 10px 0px;
    cursor: pointer;
    font-size: 20px;
    color:white;

}
</style>

