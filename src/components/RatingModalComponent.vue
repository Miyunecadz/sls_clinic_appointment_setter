<script setup>
import { defineProps, onBeforeMount } from 'vue';
defineProps({
    appointment: Object,
    schedule: Object,
})

</script>
<template>
 <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel1">Your Rate Matters</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group my-3">
                        <label for="firstname">RATE here, {{ appointment.first_name }}</label>
                        <label for="username"></label>
            <input type="number" name="rate" id="rate" class="form-control"
              placeholder="rate up to 5 only">
              <input type="string" name="comment" id="rate" class="form-control"
              placeholder="comment">
             
                    </div>
                    
                   
                    
                   
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">Submit</button>

                </div>

            </div>
        </div>
    </div>
          
</template>