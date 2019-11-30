<template>
  <div>
    <!--<carousel :data="data"></carousel>-->
    <h5 class="title">
        {{ slider.title }}
      </h5>
      <p>{{ slider.description }}</p>
  </div>
</template>



<script>
 /*  export default {
    data() {
      return {
        data: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
  }; */
  
</script>
<script>
export default {
  name: 'HomeSlider',
  props: {
    slider: Object
  },
}
</script>

<style>
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>