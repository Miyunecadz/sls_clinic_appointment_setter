<script setup>
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <NavBar/>
  <div class="container">
    <div class="row justify-content-center gap-5 mt-5">
      <div class="col-md-5 mx-4 p-5">
        <h2>Meet our Medical Clinic Staff</h2>
        <p style="max-width: 300px;">We know how large objects will acts, but things on a small scale.</p>
        <div class="d-flex gap-2">
          <!-- TODO: Change this to link in the future -->
          <button class="btn btn-primary">Get Acquinted Now</button>
          <!-- TODO: Change this to link in the future -->
          <button class="btn btn-outline-secondary">Learn More</button>
        </div>
      </div>
      <div class="col-md-4 mx-4 p-5">
        <form action="">
          <h6 class="text-center">Sign in your account</h6>
          <div class="form-group my-3">
            <label for="email">Email address</label>
            <input type="email" name="email" id="email" class="form-control" placeholder="johndoe@gmail.com">
          </div>
          <div class="form-group my-3">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="form-control" placeholder="****">
          </div>
          <div class="form-group my-3 d-grid">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>

          <p class="text-center">
            <RouterLink style="text-decoration: none;" class="text-dark" to="/register">No account? Create an account</RouterLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
