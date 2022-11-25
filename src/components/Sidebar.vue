<script setup>
import {RouterLink} from 'vue-router'
</script>



<template>

<div class="sidebar">
<div class="title">
Menu
</div>
<div class="menu-item">
    <RouterLink to="/" active-class="active" tag="button"> 
        <div class="link-container">
        Home

    </div>
    </RouterLink>
</div>
<div class="menu-item">
    <RouterLink to="/" active-class="active" tag="button"> 
        <div class="link-container">
        About

    </div>
    </RouterLink>
</div>

<div class="menu-item">
    <RouterLink to="/" active-class="active" tag="button"> 
        <div class="link-container">
        Services

    </div>
    </RouterLink>
</div>


</div>

</template>

