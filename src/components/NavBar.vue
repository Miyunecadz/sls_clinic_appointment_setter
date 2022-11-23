<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-lg bg-light p-3">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <RouterLink class="navbar-brand" style="font-weight: bold;" to="/">SLSU Medical Clinic</RouterLink>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
        <li class="nav-item">
          <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/services">Services</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/about">About Us</RouterLink>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>
</template>