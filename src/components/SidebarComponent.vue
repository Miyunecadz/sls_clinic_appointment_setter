<script setup>
import { RouterLink, useRouter } from 'vue-router';
import LinkComponent from './SidebarLinkComponent.vue';
import { useUserStore } from '@/stores/user.js'
import { onBeforeMount,ref } from 'vue';

const router = useRouter()
const userStore = useUserStore()
const userAccountType = ref(1)

onBeforeMount(() => {
    userAccountType.value = userStore.authUser.account_type
})

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

                <div v-if="userAccountType == 1">
                    <!-- Add dinhi ang mga links sa admin -->
                    <LinkComponent link="/admin-dashboard" title="Dashboard" />
                    <LinkComponent link="/admin-add-specialist" title="Add Specialist" />
                    <LinkComponent link="/admin-manage-specialist" title="Manage Specialist" />
                    <LinkComponent link="/admin-edit-specialist" title="Edit Specialist" />
                </div>

                <div v-if="userAccountType == 2">
                    <!-- Add dinhi ang mga links sa specialist -->
                    <LinkComponent link="/specialist-dashboard" title="Dashboard" />
                    <LinkComponent link="/specialist-setschedule" title="Set Schedule" />
                    <LinkComponent link="/specialist-appointment" title="View Appointments" />
                    <LinkComponent link="/set" title="Set Appointment" />
                </div>

                <div v-if="userAccountType == 3">
                    <!--Add dinhi ang mga links sa patient-->
                    <LinkComponent link="/dashboard" title="Dashboard" />
                    <LinkComponent link="/profile" title="Profile" />
                    <LinkComponent link="/set" title="Set Appointment" />
                    <LinkComponent link="/appointment-history" title="Appointment History" />    
                </div>

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