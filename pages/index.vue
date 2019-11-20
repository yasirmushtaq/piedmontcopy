<template>
  <div>
    <HomeBanner />
  <div class="home-products">
    <ProductCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
      <HomeSlider />
      <div class="wrapper-services">
        <h2>Our Services</h2>
        <ServiceCard
          v-for="(service, index) in services"
          :key="index"
          :service="service"
        />
      </div>
  </div>
  </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
import HomeBanner from '@/components/HomeBanner.vue'
import HomeSlider from '@/components/HomeSlider.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import Footer from '@/components/Footer.vue'
export default {
  head() {
    return {
      title: 'Piedmont Copy'
    }
  },
  async asyncData({ $axios, error, params }) {
    const products = await $axios.get('http://localhost:3000/products')
    const services = await $axios.get('http://localhost:3000/services')
    return {
      products: products.data, services: services.data
      }
    },
  components: {
    ProductCard,
    HomeBanner,
    HomeSlider,
    ServiceCard
  }
}
</script>
<style scoped>
  .home-products {
    width: 1170px;
    margin: 0 auto;
  }
  .wrapper-services {
    clear: both;
  }
</style>
