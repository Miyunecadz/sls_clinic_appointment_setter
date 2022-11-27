import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => {
        return { authUser: null }
    },

    actions: {
        async create(user) {
            let response = await axios.post('http://localhost:3000/patients', user)
            this.authUser=response.data.patient
            return response.data
        }
    },
    persist: true,
})