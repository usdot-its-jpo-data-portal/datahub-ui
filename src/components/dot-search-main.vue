<template>
  <div class="TitleText" style="padding-top: 40px;">
    <p class="searchHeaderText">EXPLORE OUR DATA</p>
    <h3 style="font-size: 18px; color: white; text-align: center; margin-top: 10px;">Department of Transportation ITS JPO Data</h3>
    <h3 style="font-size: 18px; color: white; text-align: center; margin-bottom: 12px;"> Welcome to the ITS JPO public access point for ITS data</h3>

    <label for="mainSearch" class="hidden">Search</label>
    <input class="mainSearch" id="mainSearch" v-model="queryText" v-on:keyup.enter="searchSend(queryText)" v-bind:placeholder="search_placeholder">
    <button class="searchButton" v-on:click="searchSend(queryText)">SEARCH</button>
  </div>
</template>

<script>
import TEMPLATE_CATEGORIES from '@/data/template_categories.json';
import axios from 'axios';

export default {
  name: 'DOTSearchMain',
  data: function(){
    return{
        background_image: '',//Background image for search bar, set in load_json
        search_placeholder: '',//Placeholder text for search bar on home page
        socrata_url: 'https://api.us.socrata.com/api/catalog/v1?q=',//URL for Socrata API
        socrata_domain: 'data.transportation.gov',//Domain of Socrata site to search, set in load_json
        totalDataCount: 0
    }
  },
  computed: {
    queryText : {
        get: function() { return this.$store.state.queryString; },
        set: function(val) { this.$store.state.queryString = val; }
    }
  },
  mounted: function() {
    if(this.$router.currentRoute.name === 'home') {
      this.$store.commit('searchText', '');
    }
  },
  // Function runs on page load
  created: function () {
    this.datasetCount(); //Sets the total number of datasets available visual
    this.background_image = TEMPLATE_CATEGORIES.background_image;
  },
  methods: {
    //===============================================SEARCH PAGE INITIALIZATION FUNCTIONS===============================================
    // Finds the total count of data for search bar placeholder text, would need to be modified if different search domain is used

    datasetCount: function () {
        var self = this;
        axios({
          method: 'GET',
          headers: { "content-type": "application/json" },
          url: self.socrata_url + '&search_context=' + self.socrata_domain + '&domains=data.transportation.gov&tags=intelligent%20transportation%20systems%20(its)'
        }).then( response => {
          self.totalDataCount = response.data.results.length;
          self.search_placeholder = "search for data sets...";
        }, error => { console.error(error)});
    },
        
    //Sets search term and sends it to search html page
    searchSend: function (search_query) {

      this.$store.commit('searchText', search_query);
      this.$store.commit('setLastQueryString', search_query);
      this.$store.dispatch('getSocrataData', search_query);

      this.$router.push('search');

    },

  }
}

</script>

<style lang="scss" scoped>

</style>

