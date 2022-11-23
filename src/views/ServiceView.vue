<script setup>
import NavBar from '../components/NavBar.vue'
import Caruosel from '../components/Caruosel.vue'
import CarouselSlide from '../components/CarouselSlide.vue'
</script>
<template>
    <NavBar/>

    <div class ="services">
        <carousel>
            <carousel-slide v-for="(slide, index) in slides" 
            :key="slide" 
            :index="index"
            :visibleSlide="visibleSlide"
            > 
            <img :src="slide" />
            
            </carousel-slide>

        </carousel>
        
    </div>

</template>

<script>

export default {
    data(){
        return {
            slides: [
            'C:/Users/clint/Pictures/slsu.jfif',
            'C:/Users/clint/Pictures/doctor-icon.jfif'
          
            ],
            visibleslide : 0,
        }
    },
    components :{
  Caruosel,
  CarouselSlide
}

}


</script>

<style>
    .services {
        display:flex;
        justify-content: center;
    }
</style>