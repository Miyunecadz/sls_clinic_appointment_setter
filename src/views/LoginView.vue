<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user.js'

const router = useRouter()
const userStore = useUserStore()
const userInput = ref({
  username: '',
  password: ''
})

const loginUser = async () => {
  const url = 'http://localhost:3000/auth/login'
  const response = await userStore.save(url, userInput.value)

  if (!response.result) {

    userInput.value = {
        password: ''
    }

    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: response.message,
    })
  }

  userInput.value = {
      username: '',
      password: ''
    }

  return router.push('/dashboard')
}

</script>

<template>
  <div class="container">
    <div class="row justify-content-center" style="height:100vh">
      <div class="col-md-4 my-auto">
        <div class="row justify-content-center my-2">
          <RouterLink class="text-center" style="max-width:35%" to="/">
            <img src="https://user.southernleyte.org.ph/files/slsu-logo.png" style="height:80px;max-width:110px;"
              alt="" />
          </RouterLink>
        </div>
        <form action="" class="card shadow p-4">
          <h6 class="text-center">Sign in your account</h6>
          <div class="form-group my-2">
            <label for="username">Username</label>
            <input v-model="userInput.username" type="username" name="username" id="username" class="form-control" placeholder="slsu-clinic">
          </div>
          <div class="form-group my-2">
            <label for="password">Password</label>
            <input v-model="userInput.password" type="password" name="password" id="password" class="form-control" placeholder="****">
          </div>
          <div class="form-group my-2 d-grid">

            <button @click.prevent="loginUser" type="submit" class="btn btn-primary" to="/set">Sign in</button>
          </div>

          <p class="text-center">
            <RouterLink style="text-decoration: blue;" class="text-dark" to="/register">No account? Click here
            </RouterLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
