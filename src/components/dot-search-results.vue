<template>
  <div class="dh-search-results_wrapper">
    <div v-if="searchResults.length > 0" class="grid-container">
      <div class="grid-row">
        <div class="grid-col-auto dh-search-results__result-text">
          Search Results for:&nbsp;
          <button @click="search(queryText)">
            {{queryText}}
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
            <div class="usa-radio">
              <input class="usa-radio__input" @click="dropDownFilter($event.target)" type="radio" id="seg-Date" name="seg-1" value="D" checked>
              <label class="usa-radio__label" for="seg-Date" id="seg-Date-label">Date</label>
            </div>
            <div class="usa-radio">
              <input class="usa-radio__input" @click="dropDownFilter($event.target)" type="radio" id="seg-Name" name="seg-1" value="N">
              <label class="usa-radio__label" for="seg-Name" id="seg-Name-label">Name</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr v-if="searchResults.length > 0" noshade>
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
      get: function() { return this.$store.state.lastQueryString; },
      set: function(val) { this.$store.state.lastQueryString = val; }
    },
    searchResults: {
      get: function() { return this.$store.state.SocrataData; },
      set: function(val) { this.$store.commit('setSocrataData',val); }
    },
    isSearching: {
      get: function() { return this.$store.state.searching; },
      set: function(){}
    }
  },
  methods: {
    //Gets the search results for a search query
    search: function (search_query) {
      this.queryText = search_query;
      this.$store.commit('searchText', search_query);
      this.$store.dispatch('searchAllData', search_query);
    },

    //Creates buttons to select how to organize search results by Name, Date or Relevance
    dropDownFilter: function (target) {
      if(target.id === 'seg-Date') {
        let sortedList = this.searchResults.slice().sort(CompareUtils.compareDate);
        this.searchResults = sortedList;
        this.$store.commit('setSearchByName', false);
        this.forceRerender();
      } else if(target.id === 'seg-Name') {
        let sortedList = this.searchResults.slice().sort(CompareUtils.compareName);
        this.searchResults = sortedList;
        this.$store.commit('setSearchByName', true);
        this.forceRerender();
      }
    },
    forceRerender() {
      this.refreshKey += 1;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
