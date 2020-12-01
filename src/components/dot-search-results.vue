<template>
  <div class="dh-search-results_wrapper">
    <div v-if="searchResults.length > 0" class="grid-container">
      <div class="grid-row">
        <div class="grid-col-auto dh-search-results__result-text">
          Search Results for:&nbsp;
          <button @click="search(queryText)">
            {{queryText.term}}
          </button>
        </div>
      </div>
      <div class="grid-row">
        <div class="grid-col-auto dh-search-results__result-text">
          Number of Results:&nbsp;<span id="number-of-results">{{searchResults.length}}</span>
        </div>
        <div class="grid-col-fill"></div>
        <div class="grid-col-auto dh-search-results__sortby-wrapper">
          <p class="dh-search-results__sortby-text">Sort By:&nbsp;</p>
          <div class="dh-search-results__sortby-buttons">
            <legend class="usa-sr-only">Sort results</legend>
            <select id="sortSelector" class="usa-select" v-model="selectedSort" @change="dropDownFilter">
              <option value="relevance">Relevance</option>
              <option value="date">Date</option>
              <option value="name">Name</option>
              <option value="downloadsTotal">Total Downloads</option>
              <option value="pageViewsLastMonth">Last Month Page Views</option>
              <option value="pageViewsTotal">Total Page Views</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <hr v-if="searchResults.length > 0">
    <br>

    <div class="dh-search-results_list">
      <ul v-if="searchResults.length > 0" :key="refreshKey">
        <li v-for="(item,index) in searchResults" :key="index">
          <DOTResultCard :data="item" :index="index" @search="search" />
        </li>
      </ul>
      <div v-else class="dh-search-results_list-no-results">
        <div v-if="isSearching" class="dh-search-results_list-searching">
          <img src="/images/loading.svg" alt="Searching">
          <span>Searching...</span>
        </div>
        <div v-if="!isSearching">
          No search results.
        </div>
      </div>
    </div>
</div>
</template>

<script>
import CompareUtils from '../utils/compare-utils.js';
import DOTResultCard from '@/components/dot-result-card.vue';

export default {
  name: 'DOTSearchResuls',
  components: {
    DOTResultCard
  },
  data: function(){
      return{
        refreshKey: 0
      }
  },
  computed: {
    queryText: {
      get: function() { return this.$store.state.lastQueryObject; },
      set: function(val) { this.$store.commit('setLastQueryObject',val); }
    },
    searchResults: {
      get: function() { return this.$store.state.MainData; },
      set: function(val) { this.$store.commit('setMainData',val); }
    },
    isSearching: {
      get: function() { return this.$store.state.searching; }
    },
    selectedSort: {
      get: function() { return this.$store.state.sortBy; },
      set: function(val) { this.$store.commit('setSortBy', val); }
    }
  },
  methods: {
    //Gets the search results for a search query
    search: function (search_query) {
      this.queryText = search_query;
      this.$store.commit('setQueryObject', search_query);
      this.$store.dispatch('searchDataAssets', search_query);
      window.scrollTo(0, 0);
    },

    dropDownFilter: function () {

      switch(this.selectedSort.toLowerCase()) {
        case 'name':
          this.searchResults.sort(CompareUtils.compareName);
          break;
        case 'date':
          this.searchResults.sort(CompareUtils.compareDate);
          break;
        case 'relevance':
          this.searchResults.sort(CompareUtils.compareESScore);
          break;
        case 'downloadstotal':
          this.searchResults.sort(CompareUtils.compareDownloadsTotal);
          break;
        case 'pageviewslastmonth':
          this.searchResults.sort(CompareUtils.comparePageViewsLastMonth);
          break;
        case 'pageviewstotal':
          this.searchResults.sort(CompareUtils.comparePageViewsTotal);
          break;
        default:
          this.searchResults.sort(CompareUtils.compareESScore);
      }
      this.$store.commit('setSortBy', this.selectedSort);
      this.forceRerender();
    },
    forceRerender() {
      this.refreshKey += 1;
    }
  }
}
</script>
