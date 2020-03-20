<template>
<div class="col-sm-12 col-md-4 col-lg-4">
    <div class="wrapper">
      <img :src='service.image'>
      <h4>{{ service.title }}</h4>
      <ul class="services-list">
        <li>        
          <i class=""></i>
            {{ service.content }}
        </li>
      </ul>
    </div>
</div>
</template>
<script>
export default {
  props: {
    service: Object
  },
  computed: {
		},
}
</script>
<style scoped>
  .services-list li{
    list-style: none;
  }
  .wrapper {
    border: solid 1px #ccc;
    min-height: 405px;
    margin-top: 15px;
  }
  .wrapper h4 {
    display: block;
    text-align: center;
    padding: 25px 0 10px;
  }
</style>
