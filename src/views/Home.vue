<template>
  <div class="home">
    <div class="searchHeader">
      <DOTSearchMain></DOTSearchMain>
    </div>
    <DOTCategorySearch></DOTCategorySearch>
    <DOTFeaturedData></DOTFeaturedData>
  </div>
</template>

<script>
  import DOTSearchMain from '@/components/dot-search-main.vue';
  import DOTCategorySearch from '@/components/dot-category-search.vue';
  import DOTFeaturedData from '@/components/dot-featured-data.vue';

  export default {
    name: 'home',
    components: {
      DOTSearchMain,
      DOTCategorySearch,
      DOTFeaturedData
    }
  }
</script>
