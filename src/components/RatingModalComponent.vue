<script setup>
import { defineProps, onBeforeMount } from "vue";
defineProps({
  appointment: Object,
  schedule: Object,
});
</script>
<template>
<<<<<<< HEAD
 <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel1">Your Rate Matters</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group my-3">
                        <label for="">Rate here, {{ appointment.first_name }}</label>
                        <label for="rate"></label>
            <input type="number" name="rate" id="rate" class="form-control gap-2"
              placeholder="rate up to 5 only">
              <input type="string" name="comment" id="comment" class="form-control"
              placeholder="comment">
             
                    </div>
                    
                   
                    
                   
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-bs-submit="modal">Submit</button>

                </div>

            </div>
=======
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel1"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel1">
            Your Rate Matters
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
>>>>>>> e8dfd4c75aa7bfe706706bed2bd00f483d9a47f5
        </div>
        <div class="modal-body">
          <div class="form-group my-1">
            <h6>Rate here, {{appointment.first_name}}</h6>
            <div class="form-group d-flex justify-content-center gap-3">
                <div class="rating d-flex flex-column align-items-center gap-1 mx-3 my-4">
                    <input type="radio" name="rating" id="rating1" value ="1" v-model="rate" class="form-check-input">
                    <label for="rating1" class="form-check-label">1</label>
                </div>
                <div class="rating d-flex flex-column align-items-center gap-1 mx-3 my-4">
                    <input type="radio" name="rating" id="rating2" value ="2" v-model="rate" class="form-check-input">
                    <label for="rating2" class="form-check-label">2</label>
                </div>
                <div class="rating d-flex flex-column align-items-center gap-1 mx-3 my-4">
                    <input type="radio" name="rating" id="rating3" value ="3" v-model="rate" class="form-check-input">
                    <label for="rating3" class="form-check-label">3</label>
                </div>
                <div class="rating d-flex flex-column align-items-center gap-1 mx-3 my-4">
                    <input type="radio" name="rating" id="rating4" value ="4" v-model="rate" class="form-check-input">
                    <label for="rating4" class="form-check-label">4</label>
                </div>
                <div class="rating d-flex flex-column align-items-center gap-1 mx-3 my-4">
                    <input type="radio" name="rating" id="rating5" value ="5" v-model="rate" class="form-check-input">
                    <label for="rating5" class="form-check-label">5</label>
                </div>
            </div>
            <textarea name="comment" id="comment" cols="30" rows="5" class="form-control" placeholder="Comment"></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
