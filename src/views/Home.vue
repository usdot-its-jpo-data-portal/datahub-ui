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
    },
    created: function() {
      let isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));
      if(this.$store.state.isMobile != isMobile){
        this.$store.commit('setIsMobile', isMobile);
      }
    }
  }
</script>
