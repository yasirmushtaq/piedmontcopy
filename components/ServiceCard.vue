<template>
<div>
  <div class="wrapper">
    <h3>{{ service.title }}</h3>
    <ul>
      <li
        v-for="(item, index) in service.item"
        :key="index">
          {{ item }}
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
}
</script>
<style scoped>
  .wrapper {
    width: 30%;
    border: solid 1px #f4f1ed;
    float: left;
    margin-bottom: 100px;
  }
</style>
