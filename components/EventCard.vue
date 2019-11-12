<template>
  <nuxt-link :to="'/product/' + product.id">
    <div class="-shadow">
      <img :src="imagePath()">
      <h4 class="title">
        {{ product.title }}
      </h4>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'EventCard',
  props: {
    product: Object
  },
  methods: {
    imagePath() {
      return require ('~/assets/images/' + this.product.icon)
    }
  },
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
  width: 228px;
  float: left;
  margin-right: 7px;
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
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
