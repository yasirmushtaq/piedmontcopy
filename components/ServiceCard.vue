<template>
<div class="col-sm-12 col-md-4 col-lg-4">
  

    <h3></h3>
    <ul class="services-list">
      <li>
        
        <i class="far fa-calendar-check"></i>
          {{ service.item }}
      </li>
    </ul>
 
 
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
</style>
