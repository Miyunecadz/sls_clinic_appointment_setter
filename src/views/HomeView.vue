<script setup>
import NavBar from '../components/NavBar.vue'
import HomepageViewVue from '../components/views/HomepageView.vue';
import ServiceViewVue from '../components/views/ServiceView.vue';
import AboutViewVue from '../components/views/AboutView.vue';
</script>

<template>
  <NavBar/>
  <HomepageViewVue id="homepage" />
  <ServiceViewVue id="services" />
  <AboutViewVue id="about" />
</template>
