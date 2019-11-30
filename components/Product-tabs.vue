<template>
  <div class="tabs">
   
    <a
      :class="{ activeTab: selectedTab === tab}"
      v-for="(tab, index) in tabs"
      :key= index
      @click = "selectedTab = tab"
    >
      {{ tab }}

    </a>
    <div v-if="selectedTab == 'Product Detail'" class="tab-content" v-html="product.tabDetail"></div>
    <div v-if="selectedTab == 'Paper Choices'" class="tab-content" v-html="product.paperChoices"></div>
    <div v-if="selectedTab == 'Design Templates'" class="tab-content" v-html="product.designTemplates"></div>
    <div v-if="selectedTab == 'Print Guide'" class="tab-content" v-html="product.printGuides"></div>
    <div v-if="selectedTab == 'Tips & Ideas'" class="tab-content" v-html="product.tipsIdeas"></div> 
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
      selectedTab: 'Product Detail'
    }
  }
}
</script>
<style scoped>
  .tabs {
    margin-bottom: 50px;
  }
  .tabs a {
    padding: 6px 10px;
    color: #656565;
    font-size: 14px;
  }
  .activeTab {
    color: #FFF !important;
    cursor: default;
    background-color: #6aa6d1;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  .tab-content {
    margin-top: 2px;
    color: #808080;
    padding: 20px 10px;
    border: solid 1px #ddd;
    border-radius: 4px;
  }
</style>