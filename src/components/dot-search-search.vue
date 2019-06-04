<template>
  <section class="dh-search__search-wrapper">
    <div class="grid-container">
        <div class="grid-row">
          <div class="grid-col-auto dh-search__search-title">
            <h1>Search</h1>
          </div>
          <div class="grid-col-fill">
          </div>
        </div>
        <div class="grid-row">
          <div class="grid-col-fill dh-search__search-inputs">
            <label class="usa-label" for="searchInput">Search</label>
            <input :class="isInvalid ? 'usa-input--error' : 'usa-input'" id="searchInput" v-model="queryText" v-on:keyup.enter="searchSend(queryText)" :placeholder="search_placeholder">
            <button v-on:click="searchSend(queryText)">
              <img src="/images/icons/icon-magnifier.svg" alt="Search">
            </button>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DOTSearchSearch',
  data: function(){
    return{
        socrata_url: 'https://api.us.socrata.com/api/catalog/v1?q=',//URL for Socrata API
        socrata_domain: 'data.transportation.gov',//Domain of Socrata site to search, set in load_json
        totalDataCount: 0,
        isInvalid: false,
        placeholderDef: 'Find Primary and Derived Research Data',
        placeholderValue: 'Find Primary and Derived Research Data',
    }
  },
  computed: {
    queryText : {
        get: function() { return this.$store.state.queryString; },
        set: function(val) { this.$store.state.queryString = val; }
    },
    search_placeholder : {
        get: function() {return this.placeholderValue; },
        set: function(val){ this.placeholderValue = val; }
    }
  },
  methods: {
    //Sets search term and sends it to search html page
    searchSend: function (search_query) {
      this.isInvalid = false;
      if(search_query.length==0) {
        this.isInvalid = true;
        this.search_placeholder = 'Invalid search text!';
        return;
      }
      this.search_placeholder = this.placeholderDef;
      this.$store.commit('searchText', search_query);
      this.$store.commit('setLastQueryString', search_query);
      this.$store.dispatch('searchAllData', search_query);

      // this.$router.push('search');

    },

  }
}

</script>
