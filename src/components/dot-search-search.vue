<template>
  <section class="dh-search__search-wrapper">
    <div class="grid-container">
        <div class="grid-row">
          <div class="grid-col-auto dh-search__search-title">
            <h1>Search for datasets</h1>
          </div>
          <div class="grid-col-fill">
          </div>
        </div>
        <div class="grid-row">
          <div class="grid-col-fill dh-search__search-inputs">
            <label class="usa-label" for="searchInput">Search for datasets</label>
            <input :class="isInvalid ? 'usa-input--error' : 'usa-input'" id="searchInput" v-model="queryText.term" v-on:keyup.enter="searchSend(queryText)" :placeholder="search_placeholder">
            <div class="dh-search__search-inputs-phrase">
              <input type="checkbox" v-model="queryText.phrase" name="searchPhrase" id="id-searchPhrase">
              <label for="id-searchPhrase">Phrase</label>
            </div>
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
        totalDataCount: 0,
        isInvalid: false,
        placeholderDef: 'Search by project names and topics...',
        placeholderValue: 'Search by project names and topics...',
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
    //Sets search term and sends it to search html page
    searchSend: function (search_query) {
      this.isInvalid = false;
      if(search_query.term.length==0) {
        this.isInvalid = true;
        this.search_placeholder = 'Invalid search text!';
        return;
      }
      this.search_placeholder = this.placeholderDef;
      this.$store.commit('setQueryObject', search_query);
      this.$store.commit('setLastQueryObject', search_query);
      this.$store.dispatch('searchDataAssets', search_query);

    },

  }
}

</script>
