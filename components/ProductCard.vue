<template>
      <nuxt-link :to="'/product/' + product.id">
        <div class="productCard col-lg-3 col-md-3 col-sm-12">
          
          <img :src="product.iconImage">
          <strong>
            {{ product.title }}
          </strong>
          
        </div>
      </nuxt-link>
    
</template>
<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  /* methods: {
    imagePath() {
      return require ('~/assets/images/' + this.product.icon)
    }
  },*/
  computed: {
    parsedDate() {
      const eventDate = new Date(this.product.date)
      return eventDate.toDateString()
    }
  } 
}
</script>
<style scoped>
div {
  float: left;
  padding: 20px 10px;
  margin-bottom: 20px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.productCard {
  /* border: solid 1px #e6e6e6; */
}
.productCard img {
  height: 175px;
  border: solid 1px #e6e6e6;
}

.productCard strong {
    padding: 10px 20px;
    background-color: #6aa6d1;
    color: #FFF;
    left: 0;
    width: 100%;
    bottom: 0;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
    display: block;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}
.title {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
</style>
