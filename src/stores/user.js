import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => {
        return { authUser: null }
    },

    actions: {
        async save(url, user) {
            let response = await axios.post(url, user)
            this.authUser = response.data.user
            return response.data
        },

    },
    persist: true,
})