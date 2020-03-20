<template>
  <div v-if="product">
    <div class="container-fluid breadcrumbs-wrapper">
      <div class="breadcrumb container">
        <nuxt-link :to="'/'" >Home > </nuxt-link > 
        <nuxt-link :to="'/products'"> Products > </nuxt-link > 
        {{ product.title }}
      </div>
    </div>
    <img :src="product.bannerImage">
    <div class="container">
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
          <select >
            <option v-for="(optItem, index) in optGroup.option_title_price"
              :key="optItem.Price"
              :value="optItem.Price"
              :id="optItem.title">
              {{ optItem.title }}
            </option>
          </select>
        
        </div>
      </div>
      <div class="column">
        <h2><span class="badge">2</span>Upload Design</h2>
        <img id="frontpreviewing" src="http://piedmontcopy.com/wp/wp-content/themes/piedmont/assets/images/upload-img.png">
        <input type="file" @change="onFileSelected">
        <button @click="onUpload">Upload</button>
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
import axios from 'axios'
export default {
  components: {
    ProductTabs
  },
  head() {
    return {
      title: 'Product Detail'
    }
  },
data() {
    return {
      selectedFile: ''
    }
  },
  async asyncData({ $axios, error, params }) {
      return $axios.get('http://piedmontcopy.com/wp/wp-json/product/v2/productID/' + params.id ).then((response) => {
      return {
        product: response.data
      }
    })
    .catch( e => {
      error({ statusCode: 503, message: 'unable to load products at this time. please try again'})
    })

  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      const fd = new FormData();
      fd.append('uploadedFile', this.selectedFile, this.selectedFile.name)
      axios.post ('http://piedmontcopy.com/wp/wp-json/products/v2/feeds', fd,  {
        onUploadProgress: function(event) {
         console.log(event)
      }})
      .then( res => console.log(res));
    } 
  },
 
}
</script>
<style scoped>

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
    width: 100%;
    text-transform: uppercase;
    font-size: 16px;
    margin: 0 auto;
    margin: 20px 0;
    padding: 0;
    border:none;
}
.job-summary .btn-primary:hover {
  opacity: 0.9;
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
    
    padding-top: 5px;
    margin: 0 auto;
    font-size: 11px;
    background: unset !important;
  }
.breadcrumb a {
  color: #656565;
  padding: 0 5px;
}
.bannerText {
    position: relative;
    color: #575757;
    margin-top: -200px;
    width: 450px;
    margin-bottom: 100px;
    min-height: 115px;
}
.breadcrumbs-wrapper {
    border-top: 1px solid rgba(55,55,55,.1);
    height: 28px;
    /* margin-bottom: -28px;
    position: relative;
    z-index: 90; */
    color: #FFF;
    background: rgb(198,198,198); /* Old browsers */
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
.product-option h6 {
  padding:15px 0 0;
  color: #656565;
  font-size: 14px;
}
.product-option select {
    height: 30px;
    line-height:1;
    color: #656565;
    font-size: 14px;
}
.job-summary input, [type='text'],[type='number'],[type='search'],[type='password'] {
    height: 40px;
    font-size: 14px;
}
.job-summary textarea {
    font-size: 14px;
    box-sizing: border-box;
    border: solid 1px rgba(0, 0, 0, 0.4);
    border-radius: 0;
}
</style>