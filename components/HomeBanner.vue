<template>
  <div class="container">
    
    <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :touchMove="true" :swipe="true">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </VueSlickCarousel>
   
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

  export default {
    name: 'HomeCarousel',
    components: { VueSlickCarousel },
  }
</script>
