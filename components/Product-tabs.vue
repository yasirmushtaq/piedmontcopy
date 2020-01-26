<template>

  <div class="tabs">
      <a
        :class="{ activeTab: selectedTab === tabItem.tab_title}"
        v-for="(tabItem, index) in product.productChoices" :key="index"
        @click = "selectedTab = tabItem.tab_title"
      >
        {{ tabItem.tab_title }}

      </a>

      <div v-for="(tabItem, index) in product.productChoices" :key="index">
        <div v-if="selectedTab == tabItem.tab_title" class="tab-content" v-html="tabItem.tab_content"></div>
      </div>
  </div> 
</template>
<script>

export default {
  props: {
    product: Object
  },
  data() {
    return {
      tabs: ['Product Detail', 'Paper Choices', 'Design Templates', 'Print Guide', 'Tips & Ideas'],
      selectedTab: 'Product Detail',
    }
  },
 
}
</script>
<style scoped>
  .tabs {
    margin-bottom: 50px;
  }
  .tabs a {
    padding: 10px 20px;
    color: #656565;
    font-size: 14px;
    border: solid 1px #ddd;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
     margin-left: 5px;
  }
  .tabs a:first-child {
    margin-left: 0;
  }

  .activeTab {
    color: #FFF !important;
    cursor: default;
    background-color: #6aa6d1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .tab-content {
    margin-top: 6px;
    color: #808080;
    padding: 30px 20px;
    border: solid 1px #ddd;
    border-radius: 4px;
  }
</style>