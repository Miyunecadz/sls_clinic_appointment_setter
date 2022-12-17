</script>
<template>
  <Sidebar>
    <div class="row justify-content-center" style="margin: 0 0">
      <div class="col-md-5 my-auto p-2 p-md-4 bordered">
        <form action="">
          <h6 class="text-center">Your Profile</h6>
          <div class="form-group my-3">
            <label for="id number">ID Number: {{authUser.id_number ?? authUser.employee_id}}</label>

          </div>
          
  </Sidebar>
</template>