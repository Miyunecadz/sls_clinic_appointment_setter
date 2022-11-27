<script setup>
import { RouterLink, useRouter } from 'vue-router';
import LinkComponent from './SidebarLinkComponent.vue';
import { useUserStore } from '@/stores/user.js'

const router = useRouter()
const userStore = useUserStore()

const logout = () => {
    userStore.authUser = '';
    router.push({name:'login'})
}
</script>
<template>
    <div class="row-container">
        <div class="row row-contain">
            <div class="column1 col-md-2 shadow">
                <div class="image-container d-flex">
                    <img src="https://user.southernleyte.org.ph/files/slsu-logo.png" class="mx-auto" style="max-width: 150px;height: 100px;" />
                </div>
                <h6 class="text-center mt-2 px-3">SLSU CLINIC APPOINTMENT SETTER</h6>

                <div class="mt-4 mx-5">
                    <router-link to="/dashboard" style="text-decoration:none; width:100%;">Dashboard</router-link>
                </div>

                <LinkComponent link="/profile" title="Profile" />
                <LinkComponent link="/set" title="Set Appointment" />
                <LinkComponent link="/appointment-history" title="Appointment History" />

                <div class="mt-4 mx-5">
                    <a href="javascript:void(0)" @click="logout" style="text-decoration:none;width:100%;">Logout</a>
                </div>
            </div>

            <div class="column2 col-md">
                <div class="container">
                    <main class="mt-4">
                        <slot></slot>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.column1,
.column2 {
    padding: 0px !important;
}

.column1 {
    background-color: #dfdede;
}

.row-contain {
    height: 100vh;
}

.row-container {
    overflow: hidden;
}

.image-container {
    margin-top: 25px;
    width: 100%;
}
</style>