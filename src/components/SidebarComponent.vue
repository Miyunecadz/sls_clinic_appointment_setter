<script setup>
import { RouterLink, useRouter } from 'vue-router';
import LinkComponent from './SidebarLinkComponent.vue';
import { useUserStore } from '@/stores/user.js'

const router = useRouter()
const userStore = useUserStore()

const logout = () => {
    userStore.authUser = '';
    router.push({ name: 'login' })
}
</script>
<template>
    <div class="row-container">
        <div class="d-flex row-contain">
            <div class="column1 shadow sidebar__container">
                <div class="image-container d-flex">
                    <img src="https://user.southernleyte.org.ph/files/slsu-logo.png" class="mx-auto"
                        style="max-width: 150px;height: 100px;" />
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

            <div class="column2 slot__container mt-3">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style>
.sidebar__container {
    max-width: 220px;
}

.slot__container {
    width: 100%;
}

.column1,
.column2 {
    padding: 0px !important;
}

.column1 {
    background-color: #dfdede;
}

.row-contain {
    height: 100vh;
    margin-left: 0px;
    margin-right: 0px;
}

.image-container {
    margin-top: 25px;
    width: 100%;
}
</style>