<template>
  <div >
    <div class="searchHeader">
      <DOTSearchMain></DOTSearchMain>
    </div>
    <DOTFeaturedData></DOTFeaturedData>
    <DOTCategorySearch></DOTCategorySearch>
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
