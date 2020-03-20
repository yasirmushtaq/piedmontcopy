<template>
  <div>
     
     <div class="container-fluid home-banner">
       <div class="row">
          <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" :autoplaySpeed="8000" :touchMove="true" :swipe="true" :pauseOnHover="true">
            <HomeBanner v-for="(banner, index) in banners" :key="index" :banner="banner" />
          </VueSlickCarousel>          
        </div>
    </div>
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="home-products">
          <h4 class="section-head">Fetaured Products</h4>
        <ProductCard
            v-for="(product, index) in products"
            :key="index"
            :product="product"
          />
        </div>
      </div>
    </div>
  
    <div class="container-fluid ourcommitment">
      <div class="container main">
        <OurCommitment 
          v-for='post in posts'
          :key='post.id'
          :post='post'
        />
      </div>
    </div>    

    <div class="container">
      <div class="services">
        <div class="row">
        <h4 class="section-head">Our Services</h4>
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
         <div class="testimonial-head"><h3 class="d-block">{{ testimonial }}</h3></div> 
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
import OurCommitment from '@/components/OurCommitment'
import VueSlickCarousel from 'vue-slick-carousel'
import HomeBanner from '@/components/HomeBanner.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import HomeTestimonial from '@/components/HomeTestimonial.vue'
import Footer from '@/components/Footer.vue'
export default {
 data() {
    return {
      posts: [
          { id: '1', title: 'A Commitment to Quality', content: 'Premium paper and materials provide a distinctive look.', icon: 'fas fa-award' },
          { id: '2', title: 'Flexible Delivery', content: 'Store Pickup or Ship direct to your door.', icon: 'fas fa-shipping-fast' },
          { id: '3', title: 'Great Value', content: 'We are committed to offering the best value to our members.', icon: '<i fas fa-money-check-alt' },
          { id: '4', title: 'Our Guarantee', content: 'Satisfaction guaranteed or we will replace or refund your order.', icon: 'fas fa-tags' }        
      ],
      services: [
          { id: '1', title: 'Design Services', content: 'Need some design help? Our Design Services team delivers fast, creative designs at an affordable price.', image: 'http://piedmontcopy.com/wp/wp-content/uploads/2020/03/design-services.jpeg' },
          { id: '2', title: 'Direct Mailing Services', content: 'We offer our customers a fast, affordable, and convenient way to print and professionally mail your print marketing materials.', image: 'http://piedmontcopy.com/wp/wp-content/uploads/2020/03/direct-mailing.jpg' },
          { id: '3', title: 'A Commitment to Quality', content: 'Premium paper and materials provide a distinctive look.', image: 'http://piedmontcopy.com/wp/wp-content/uploads/2020/03/design-services.jpeg' }
      ]
    }
  },
  head() {
    return {
      title: 'Piedmont Copy'
    }
  },
  async asyncData({ $axios, error, params }) {
    const products = await $axios.get('http://piedmontcopy.com/wp/wp-json/products/v2/feeds') 
    //const services = await $axios.get('http://piedmontcopy.com/wp/wp-json/services/v1/feeds')
    const banners = await $axios.get('http://piedmontcopy.com/wp/wp-json/banner/v1/feeds')
    const testimonials = await $axios.get('http://piedmontcopy.com/wp/wp-json/testimonial/v1/feeds')
    return {
      products: products.data, banners: banners.data, testimonials: testimonials.data
      }
    },
  components: {
    ProductCard,
    VueSlickCarousel,
    HomeBanner,
    ServiceCard,
    OurCommitment,
    HomeTestimonial
  }
}
</script>
<style>
  .slick-dots {
    bottom: 15px;
  }
  .slick-dots li button:before {
    font-size: 12px;
    color: #FFF;
    opacity: 1;
  }
  .slick-dots li.slick-active button:before {
    color: #3071a9;
  }
  .main {
    display: flex;
  }
  .main > div {
    padding: 40px 35px;
  }
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
    margin-top: 45px;
    width:100%;
    display:block;
    text-align: center;
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
  .ourcommitment {
    background: #f5f5f5;
  }
</style>
