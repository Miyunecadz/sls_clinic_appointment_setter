
<template>
  <div class="row justify-content-center">
    <div class="col-md-5 bordered">
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
            
              <button type="submit" class="btn btn-primary" to="/set">Sign in</button>
          </div>

          <p class="text-center">
            <RouterLink style="text-decoration: blue;" class="text-dark" to="/register">No account? Click here</RouterLink>
          </p>
        </form>
    </div>
  </div>
</template>
