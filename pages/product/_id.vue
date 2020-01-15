<template>

  <div v-if="product">
    <div class="breadcrumbs-wrapper">
      <div class="breadcrumb">
        <nuxt-link :to="'/'" >Home > </nuxt-link > 
        <nuxt-link :to="'/products'"> Products > </nuxt-link > 
        {{ product.title }}
      </div>
    </div>
    <img :src="product.bannerImage">
    <div class="content">
      <div class="bannerText" :class="{lightBanner : product.bannerColor === 'light' }">
        <h2>{{ product.bannerTitle }}</h2>
        {{ product.bannerContent }}
      </div>
      <!-- <h3>{{ product.title }} </h3> -->
      <div class="product-option">
      <div class="column">
        <h2><span class="badge">1</span>Product Options</h2>

        <div v-for="(optGroup, index) in product.productOptions" :key="index">
          <h6>{{optGroup.option_name}}</h6>
          <select v-model="optGroup.option_name" >
            <option v-for="(optItem, index) in optGroup.option_title_price"
              :key="optItem.Price"
              :value="optItem.Price"
              :id="optItem.title">
              {{ optItem.title }}
            </option>
          </select>
        
        </div>
       <!-- <div v-html="product.productOptions"></div>
         <h6>Size</h6>
        <select>
          <option v-for="(size, index) in product.options.size"
            :key="index">
            {{ size }}
          </option>
        </select>
        <h6>Printed Side</h6>
        <select>
          <option v-for="(side, index) in product.options.printedSide"
            :key="index">
            {{ side }}
          </option>
        </select>
        <h6>Paper</h6>
        <select>
          <option v-for="(paper, index) in product.options.papers"
            :key="index">
            {{ paper }}
          </option>
        </select>
        <h6>UV Coating</h6>
        <select>
          <option v-for="(coating, index) in product.options.uvCoatings"
            :key="index">
            {{ coating }}
          </option>
        </select>
        <h6>Quantity</h6>
        <select>
          <option v-for="(quantity, index) in product.options.quantity"
            :key="index">
            {{ quantity }}
          </option>
        </select> -->
      </div>
      <div class="column">
        <h2><span class="badge">2</span>Upload Design</h2>
        <img id="frontpreviewing" src="http://piedmontcopy.com/wp/wp-content/themes/piedmont/assets/images/upload-img.png">
      </div> 
      <div class="column job-summary">
        <h2><span class="badge">3</span>Job Information</h2>
        <input type="text" placeholder="Job Name" name="job_name">
        <input type="text" placeholder="Full Name" name="full_name">
        <input type="text" placeholder="Email" name="email">
        <input type="text" placeholder="Phone" name="phone">
        <textarea 
          name="additional_information" 
          class="form-control" 
          rows="5" 
          placeholder="Additional Information">
        </textarea>
        <input type="submit" class="btn btn-primary" value="submit order" name="submit-order">
      </div>
      </div>
    <ProductTabs :product="product"/>
    </div>
  </div>
</template>
<script>

import ProductTabs from '@/components/Product-tabs.vue'
export default {

  components: {
    ProductTabs
  },
  head() {
    return {
      title: 'Product Detail'
    }
  },
   
  async asyncData({ $axios, error, params }) {
    //return $axios.get('http://piedmontcopy.com/wp/wp-json/product/v1/productID/' + params.id ).then((response) => {
      return $axios.get('http://piedmontcopy.com/wp/wp-json/product/v2/productID/' + params.id ).then((response) => {
      
      //alert(params.id);
      return {
        product: response.data
      }
     
    })
    .catch( e => {
      error({ statusCode: 503, message: 'unable to load products at this time. please try again'})
    })
  },
  computed : {
    
   
  },
  methods: {
   /*  bannerImage() {
      return require ('~/assets/images/' + this.product.banner)
    } */
    
  },
 
}
</script>
<style scoped>
.content {
  width: 1170px;
  margin: 0 auto;
}
input {
  margin-bottom: 15px;
}
.column {
  width: 30%;
  float: left;
  padding: 0 30px;
}
.btn-primary.btn {
    color: #fff;
    background-color: #ff9948;
}
.job-summary .btn-primary {
    width: 50%;
    text-transform: uppercase;
    font-size: 16px;
    color: #fff;
    margin: 0 auto;
    margin-left: 70px;
    padding: 6px 15px;
}

.product-option {
    width: 100%;
    float: left;
    margin-bottom: 40px;
    border-radius: 6px;
    background-color: #f7f7f7;
    padding: 15px;
}

  .breadcrumb {
    width: 1170px;
    padding-top: 5px;
    margin: 0 auto;
    font-size: 11px;
    background-color: unset !important;
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
.lightBanner {
  color: #FFF;
}
.product-option h2 {
    font-size: 14px;
    color: #ffffff;
    background-color: #6aa6d1;
    width: 100%;
    padding: 6px 10px;
    margin-top: 10px;
}
.badge {
    display: inline-block;
    padding: 4px 6px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    background-color: #ff9948;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
</style>