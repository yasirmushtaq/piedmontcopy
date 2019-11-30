<template>
  <nuxt-link :to="'/product/' + product.id">
    <div class="productCard">
      <img :src="product.iconImage">
      <h5 class="title">
        {{ product.title }}
      </h5>
      
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
  width: 300px;
  float: left;
  margin-right: 7px;
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.productCard {
  border: solid 1px #e6e6e6;
}
.productCard img {
  height: 175px;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
</style>
