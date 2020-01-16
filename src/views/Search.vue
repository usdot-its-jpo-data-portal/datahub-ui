<template>
  <div id="search-wrapper">
      <div id='searchTerms'>
          <div id="searchHead" class="searchHeader">
              <DOTSearchSearch v-bind:queryString="queryString"></DOTSearchSearch>
          </div>
          <DOTSearchResults ></DOTSearchResults>
      </div>
  </div>
</template>

<script>
import DOTSearchSearch from '@/components/dot-search-search.vue';
import DOTSearchResults from '@/components/dot-search-results.vue';

export default {
  name: 'search',
  components: {
    DOTSearchSearch,
    DOTSearchResults
  },
  computed: {
    queryString: {
      get: function() {return this.$route.query.t;}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
