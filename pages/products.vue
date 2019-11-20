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
          <img src="~/assets/images/all-products.jpg" >
          <div class="content">
            <div class="bannerText" :class="{lightBanner : product.bannerColor === 'light' }">
              <h2>{{ product.title }}</h2>
              {{ product.bannerText }}
            </div>
          </div>
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
      tabs: ['All', 'Top Products', 'Marketing Products', 'Business Products'],
      selectedTab: 'All',
      allProductsArray: [],
      filteredResult: []
    }
  },
  async asyncData({ $axios, error, params }) {
    const products = await $axios.get('http://localhost:3000/products')
    return {
      products: products.data,
      allProductsArray: products.data
      }
    },
  components: {
    ProductCard
  },
  computed: {
    allProducts: function() {
      return this.products.filter( function(product) {
        return product.id == '00'
      })
    }
  },
  methods: {
    filteredProducts: function(tab) {
        this.selectedTab = tab
        this.allProductsArray = this.products.filter((product) => {
          return product.category.match(this.selectedTab)
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
</style>