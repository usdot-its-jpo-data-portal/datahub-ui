<template>
  <section class="dh-search__search-wrapper">
    <div class="grid-container">
        <div class="grid-row">
          <div class="grid-col-auto dh-search__search-title">
            <h1>Search for datasets</h1>
          </div>
          <div class="grid-col-auto dh-search__search-inputs">
            <div class="dh-search__search-inputs-phrase above">
              <input type="radio" id="searchByWords" name="searchByType" v-model="searchType" value="byWords">
              <label class="usa-label" for="searchByWords">Search by individual words</label>
            </div>
          </div>
          <div class="grid-col-auto dh-search__search-inputs">
            <div class="dh-search__search-inputs-phrase above">   
              <input type="radio" id="searchByPhrase" name="searchByType" v-model="searchType" value="byPhrase">
              <label class="usa-label second-input" for="searchByPhrase">Search by entire phrase</label>
            </div>
          </div>
          <div class="grid-col-fill"></div>
        </div>
        <div class="grid-row">
          <div class="grid-col-fill dh-search__search-inputs">
            <label class="usa-label" for="searchInput">Search for datasets</label>
            <input :class="isInvalid ? 'usa-input--error' : 'usa-input'" id="searchInput" v-model="queryText.term" v-on:keyup.enter="searchSend(queryText)" :placeholder="search_placeholder">
            <button v-on:click="searchSend(queryText)" id="results-page_search-button">
              <img src="/images/icons/icon-magnifier.svg" alt="Search">
            </button>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import {ES_QUERY_LIMIT} from '../consts/constants.js';
export default {
  name: 'DOTSearchSearch',
  props:['queryString'],
  data: function(){
    return{
        totalDataCount: 0,
        isInvalid: false,
        searchType: 'byWords',
        placeholderDef: 'Search by project names and topics...',
        placeholderValue: 'Search by project names and topics...',
    }
  },
  mounted: function() {
    if (this.queryString) {
      setTimeout(()=>{
        debugger;
        let sQuery = {term:this.queryString, phrase: true, limit: ES_QUERY_LIMIT};
        this.searchSend(sQuery);
        debugger;
      },500)
    }
  },
  computed: {
    queryText : {
        get: function() { return this.$store.state.queryObject; },
        set: function(val) { this.$store.commit('setQueryObject',val); }
    },
    search_placeholder : {
        get: function() {return this.placeholderValue; },
        set: function(val){ this.placeholderValue = val; }
    }
  },
  methods: {
    //if use radio button, have to pass true or false. if  
    //Sets search term and sends it to search html page
    searchSend: function (search_query) {
      this.isInvalid = false;
      if(search_query.term.length==0) {
        this.isInvalid = true;
        this.search_placeholder = 'Invalid search text!';
        return;
      }
      search_query.phrase = this.searchType=='byPhrase';
      this.search_placeholder = this.placeholderDef;
      this.$store.commit('setQueryObject', search_query);
      this.$store.commit('setLastQueryObject', search_query);
      this.$store.dispatch('searchDataAssets', search_query);

    }
  }
}

</script>
