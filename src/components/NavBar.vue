<script setup>
import {RouterLink} from 'vue-router'
const goto = (elementName) => {
  const element = document.getElementById(elementName)
  element.scrollIntoView()
}
</script>

<template>
<nav class="navbar navbar-expand-lg bg-light p-3 sticky shadow">
  <div class="container">
    <RouterLink class="navbar-brand" style="font-weight: bold;" to="/">
      <img src="https://user.southernleyte.org.ph/files/slsu-logo.png" alt="" />
      SLSU Medical Clinic
      </RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="javascript:void(0)" @click="goto('homepage')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="javascript:void(0)" @click="goto('services')">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="javascript:void(0)" @click="goto('about')">About Us</a>
        </li>
        <li class="nav-item">
          <RouterLink class="btn btn-primary" to="/login">
            Get Acquinted Now
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
}

img {
  height:50px;
  max-width:50px;
}
</style>