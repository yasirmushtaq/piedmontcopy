<template>
  <div>
    <div>
        <img :src="banner.bannerImage">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeBanner',
   props: {
    banner: Object
    }
  }
</script>
<style scoped>
.home-banner .slick-slider{ 
    background:#fff ;
    width: 100%;
  }
  .home-banner .slick-list img {
    max-height: 500px;
  }
</style>