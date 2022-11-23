<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
<nav class="navbar navbar-expand-lg bg-light p-3">
  <div class="container">
    <RouterLink class="navbar-brand" style="font-weight: bold;" to="/">SLSU Medical Clinic</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
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
        <li class="nav-item">
          <RouterLink class="btn btn-primary" to="/register">
            Register Now
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>