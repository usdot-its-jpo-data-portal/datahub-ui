<template>
  <div id="search-wrapper">
      <div id='searchTerms'>
          <div id="searchHead" class="searchHeader">
              <DOTSearchMain  ></DOTSearchMain>
          </div>
          <DOTSearchResults ></DOTSearchResults>
      </div>
  </div>
</template>

<script>
import DOTSearchMain from '@/components/dot-search-main.vue';
import DOTSearchResults from '@/components/dot-search-results.vue';

export default {
  name: 'search',
  components: {
    DOTSearchMain,
    DOTSearchResults
  }
}
</script>

<style lang="scss" scoped>

</style>
