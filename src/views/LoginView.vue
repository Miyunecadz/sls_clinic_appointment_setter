<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.js";

const router = useRouter();
const onLoad = ref(false);
const userStore = useUserStore();
const userInput = ref({
  username: "",
  password: "",
});

const loginUser = async () => {
  onLoad.value = true;
  const url = "http://localhost:3000/auth/login";
  const response = await userStore.save(url, userInput.value);

  if (!response.result) {
    userInput.value = {
      password: "",
    };
    onLoad.value = false;
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: response.message,
    });
  }

  userInput.value = {
    password: "",
  };

  return router.push("/dashboard");
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center" style="height: 100vh">
      <div class="col-md-4 my-auto">
        <div class="row justify-content-center my-2">
          <RouterLink class="text-center" style="max-width: 35%" to="/">
            <img
              src="https://user.southernleyte.org.ph/files/slsu-logo.png"
              style="height: 80px; max-width: 110px"
              alt=""
            />
          </RouterLink>
        </div>
        <form action="" class="card shadow p-4">
          <h6 class="text-center">Sign in your account</h6>
          <div class="form-group my-2">
            <label for="username">Username</label>
            <input
              v-model="userInput.username"
              type="username"
              name="username"
              id="username"
              class="form-control"
              placeholder="slsu-clinic"
            />
          </div>
          <div class="form-group my-2">
            <label for="password">Password</label>
            <input
              v-model="userInput.password"
              type="password"
              name="password"
              id="password"
              class="form-control"
              placeholder="****"
            />
          </div>
          <div class="form-group my-2 d-grid">
            <button
              :class="onLoad ? 'disabled' : ''"
              @click.prevent="loginUser"
              type="submit"
              class="btn btn-primary"
              to="/set"
            >
              <div
                v-if="onLoad"
                class="spinner-border text-light"
                role="status"
                style="max-height: 20px; max-width: 20px"
              >
                <span class="visually-hidden">...</span>
              </div>
              <span>{{ onLoad ? "Logging In..." : "Login" }}</span>
            </button>
          </div>

          <p class="text-center">
            <RouterLink
              style="text-decoration: blue"
              class="text-dark"
              to="/register"
              >No account? Click here
            </RouterLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
