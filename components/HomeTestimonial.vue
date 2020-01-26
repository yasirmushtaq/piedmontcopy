<template>
  <div>
    
         
          <div class="testimonial-content">
           
            <p>{{ testimonial.content }}</p>
             <h5>{{ testimonial.title }}</h5>
          </div>
   
   
  </div>
</template>

<script>
  export default {
    name: 'HomeTestimonial',
   props: {
    testimonial: Object
  },
  }
  
</script>
<style scoped>
.home-testimonial .slick-slider{ 
    background:#6aa6d1 ;
    width: 100%;
    color: #FFF;
	  font-size: 16px;
  }
.home-testimonial .testimonial-content {
    width: 85%;
    margin: 0 auto;
}
.home-testimonial .slick-slider h5,.home-testimonial .slick-slider p {
	text-align: center !important;
	color: #FFF;
  margin-top: 0;
  display: block;
}
.home-testimonial .slick-slider p {
  padding-top:25px;
  font-size: 14px;
}

</style>