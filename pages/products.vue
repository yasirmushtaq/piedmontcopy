<template>
  <div>
    <div 
      v-for="(product, index) in allProducts"
      :key="index">
        <div class="">
          <div class="breadcrumb">
            <nuxt-link :to="'/'" >Home > </nuxt-link >
            <nuxt-link :to="'/products'"> Products > </nuxt-link >
            {{ product.title }}
          </div>
          <!-- <img src="~/assets/images/all-products.jpg" > -->
         
          <div class="content">
            <div class="bannerText" :class="{lightBanner : product.bannerColor === 'light' }">
              <h2>{{ product.bannerTitle }}</h2>
              {{ product.bannerText }}
            </div>
          </div>
        </div>
    </div>

     <div class="hero-banner">
            <img alt="Calendar" src="http://piedmontcopy.com/wp/wp-content/uploads/2018/08/calendar_banner-copy.jpg">      
          </div>
          <div class="banner-text-wrapper">
            <div class="banner-text">
              <h4> All Products</h4>
              <p>List of all custom products and services offered by Piedmont Copy </p>
            </div>
          </div>

    <div class="content">
      <div class="filter-wrapper"> <strong>Filter Products:</strong>
        <span 
          :class="{activeTab: selectedTab == tab}"
          v-for="(tab, index) in tabs"
          :key=index
          @click="filteredProducts(tab)"
          >
          {{ tab }}
        </span>
      </div>
        <ProductCard
          v-for="(product, index) in allProductsArray"
          :key="index"
          :product="product"
        />
    </div>
  </div>


</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  head() {
    return {
      title: 'All Products'
    } 
  },
 
   data() {
    return {
      tabs: ['All', 'Top Products', 'Marketing Products', 'Business Products', 'Promotional Products'],
      selectedTab: 'All',
      allProductsArray: [],
      filteredResult: [],
      filter: []
    }
  },
  async asyncData({ $axios, error, params }) {
    const products = await $axios.get('http://piedmontcopy.com/wp/wp-json/products/v1/all')
    return {
      products: products.data,
      allProductsArray: products.data,
     // filter: products.data.filter
      }
    },
  components: {
    ProductCard
  },
   computed: {
      allProducts: function(product) {
     // return this.products.filter( function(product) {
        return product.id == '00'
     // })
    }   
  },  
  methods: {
    filteredProducts: function(tab) {
        this.selectedTab = tab
        this.allProductsArray = this.products.filter((product) => {
          return product.filter.match(this.selectedTab)
        })
        if (this.selectedTab == 'All') {
          return this.allProductsArray = this.products
        }
    }
  }  
}

</script>

<style scoped>
.activeTab {
  background-color: rgba(91,156,204,.9);
  color: white;
  padding: 3px 16px;
}
  .breadcrumb {
    width: 1170px;
    padding-top: 5px;
    margin: 0 auto;
    font-size: 11px;
  }
  .content {
    width: 1170px;
    margin: 0 auto;
  }
  .content span:first-child {
    margin-left: 10px;
  }
  .content span {
    margin-right: 10px;
    cursor: pointer;
  }
.filter-wrapper {
  padding: 10px;
}
.bannerText {
    position: relative;
    color: #575757;
    margin-top: -169px;
    width: 450px;
    margin-bottom: 80px;
    min-height: 115px;
}
.breadcrumbs-wrapper {
    border-top: 1px solid rgba(55,55,55,.1);
    height: 28px;
    margin-bottom: -28px;
    position: relative;
    z-index: 90;
    color: #FFF;
    background: #000;
    background: rgba(0,0,0,.75);
    background: linear-gradient(to right,rgba(0,0,0,.1),rgba(0,0,0,0) 75%);
}
.banner-text {
    width: 1100px;
    /* height: 200px; */
    position: relative;
    color: #575757;
    margin: 0 auto;
    margin-top: -169px;
    margin-bottom: 80px;
    min-height: 115px;
}
.banner-text h4 {
    font-family: 'Roboto', sans-serif !important;
    font-size: 1.5em;
   -webkit-font-smoothing: antialiased;
}
.banner-text p {
    font-family: 'Roboto', sans-serif !important;
    font-size: 1.1em;
    width: 450px;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3em;
}
</style>