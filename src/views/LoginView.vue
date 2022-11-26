<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
    <div class="row justify-content-center" style="height:100vh">
      <div class="col-md-4 my-auto">
        <div class="row justify-content-center my-2">
          <RouterLink class="text-center" style="max-width:35%" to="/">
            <img src="https://user.southernleyte.org.ph/files/slsu-logo.png" style="height:80px;max-width:110px;" alt="">
          </RouterLink>
        </div>
        <form action="" class="card shadow p-4">
          <h6 class="text-center">Sign in your account</h6>
          <div class="form-group my-2">
            <label for="username">Username</label>
            <input type="username" name="username" id="username" class="form-control" placeholder="slsu-clinic">
          </div>
          <div class="form-group my-2">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="form-control" placeholder="****">
          </div>
          <div class="form-group my-2 d-grid">

            <button type="submit" class="btn btn-primary" to="/set">Sign in</button>
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
