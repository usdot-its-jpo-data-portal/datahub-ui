<template>
  <section class="usa-hero">
    <div class="grid-container">
      <div class="usa-hero__callout">
        <h1 class="usa-hero__heading" id="hero_text">
          <span class="usa-hero__heading--alt">EXPLORE OUR DATA!</span>
          Welcome to the Department of Transporation public access point for ITS JPO Data
        </h1>
        <div class="dh-home__main-search__callout-inputs">
          <label class="usa-label" for="mainSearch">Search</label>
          <input :class="isInvalid ? 'usa-input--error' : 'usa-input'" id="mainSearch" v-model="queryText" v-on:keyup.enter="searchSend(queryText)" :placeholder="search_placeholder">
          <button v-on:click="searchSend(queryText)">Search</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TEMPLATE_CATEGORIES from '@/data/template_categories.json';

export default {
  name: 'DOTSearchMain',
  data: function(){
    return{
        background_image: '',//Background image for search bar, set in load_json
        isInvalid: false,
        placeholderDef: 'Find Primary and Derived Research Data',
        placeholderValue: 'Find Primary and Derived Research Data'
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
  mounted: function() {
    if(this.$router.currentRoute.name === 'home') {
      this.queryText = '';
    }
  },
  // Function runs on page load
  created: function () {
    this.background_image = TEMPLATE_CATEGORIES.background_image;
  },
  methods: {
    //Sets search term and sends it to search html page
    searchSend: function (search_query) {
      this.isInvalid = false;
      if(!search_query || search_query.length==0) {
        this.isInvalid = true;
        this.search_placeholder = 'Invalid search text!';
        return;
      }
      this.search_placeholder = this.placeholderDef;
      this.$store.commit('searchText', search_query);
      this.$store.commit('setLastQueryString', search_query);
      this.$store.dispatch('searchAllData', search_query);

      this.$router.push('search');

    },

  }
}

</script>

<style lang="scss" scoped>

</style>

