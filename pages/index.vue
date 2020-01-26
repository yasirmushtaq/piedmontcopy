<template>
  <div>
     
     <div class="container-fluid home-banner">
       <div class="row">
          <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :autoplaySpeed="8000" :touchMove="true" :swipe="true" :pauseOnHover="true">
          <HomeBanner  v-for="(banner, index) in banners"
            :key="index" :banner="banner" />
          </VueSlickCarousel>
          
        </div>
    </div>
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="home-products">
          <h2 class="section-head">Fetaured Products</h2>
        <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
        </div>
      </div>
     
      <div class="container services">
        <div class="row">
        <h2 class="section-head">Our Services</h2>
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :service="service"
        />
         <div class="gap"></div>
        </div>
      </div>
     
  </div>

    <div class="container-fluid home-testimonial">
        <div class="container">
         <div class="testimonial-head"><h3 class="d-block">WHAT OUR CLIENTS SAY</h3></div> 
            <VueSlickCarousel :arrows="true" :dots="false" :autoplay="false" :autoplaySpeed="6000" :touchMove="true" :swipe="true">
              <HomeTestimonial  v-for="(testimonial, index) in testimonials"
                :key="index" :testimonial="testimonial" />
            </VueSlickCarousel>
         
        </div>
    </div>


  </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import HomeBanner from '@/components/HomeBanner.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import HomeTestimonial from '@/components/HomeTestimonial.vue'
import Footer from '@/components/Footer.vue'
export default {
  head() {
    return {
      title: 'Piedmont Copy'
    }
  },
  async asyncData({ $axios, error, params }) {
    const products = await $axios.get('http://piedmontcopy.com/wp/wp-json/products/v2/feeds') 
    const services = await $axios.get('http://piedmontcopy.com/wp/wp-json/services/v1/feeds')
    const banners = await $axios.get('http://piedmontcopy.com/wp/wp-json/banner/v1/feeds')
    const testimonials = await $axios.get('http://piedmontcopy.com/wp/wp-json/testimonial/v1/feeds')
    return {
      products: products.data, services: services.data, banners: banners.data, testimonials: testimonials.data
      }
    },
  components: {
    ProductCard,
    VueSlickCarousel,
    HomeBanner,
    ServiceCard,
    HomeTestimonial
  }
}
</script>
<style scoped>
  .home-banner .slick-slider{ 
    background:#fff ;
    width: 100%;
  }
  .home-banner .slick-list {
    max-height: 400px;
  }
  .home-testimonial {
    background-image: url('~@/assets/images/testimonial-img.jpg');
	  margin:20px 0;
	  padding: 80px 0;
  }
  .section-head{
    width:100%;
    display:block;
    text-align: center;
    padding: 40px 0;
  }
  .testimonial-head h3 {
    text-align: center;
    color: #FFF;
    margin-top: 0;
    width: 100%;
  }
  .gap {
     height: 50px;
     width: 100%;
     clear: both;
     display: block;
}
</style>
