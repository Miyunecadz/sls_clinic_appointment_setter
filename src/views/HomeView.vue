<script setup>
import NavBar from "../components/NavBar.vue";
import HomepageViewVue from "../components/HomepageView.vue";
import ServiceViewVue from "../components/ServiceView.vue";
import AboutViewVue from "../components/AboutView.vue";
</script>

<template>
  <NavBar />
  <HomepageViewVue id="homepage" />
  <ServiceViewVue id="services" />
  <AboutViewVue id="about" />
</template>
