<template>
  <div id="searchresults" class="contentArea searchResults">
    <br>
    <div style="display: flex;">
      <a id="returnPage" class="readButton" style="font-size: 15px; margin-left: 80px;margin-bottom: 10px" v-on:click="returnToHomePage()">Return to Home Page &raquo;</a>
    </div>
    <div style="display: flex; float: right; margin-right: 80px">
      <p style="line-height: 1.8" class="resultsSectionHeading">Sort By: &nbsp;</p>
      <nav class="segmented-button">
        <input v-on:click="dropDownFilter($event.target)" type="radio" name="seg-1" value="D" id="seg-Date" checked>
        <label for="seg-Date" class="first">Date</label>
        <input v-on:click="dropDownFilter($event.target)" type="radio" name="seg-1" value="N" id="seg-Name">
        <label for="seg-Name" class="last">Name</label>
      </nav>
    </div>
    <div style="display: flex;">
      <p class="resultsSectionHeading"><b>SEARCH RESULTS FOR:&nbsp;</b></p>
      <p class="resultsQuery">
          <button class='tag' v-on:click="search(queryText)">
            <b id="resultsQuery">{{queryText}}</b>
          </button>
      </p>
      <br>
    </div>

    <div style="display: flex;">
      <p class="resultsSectionHeading"><b>Number of results:&nbsp;</b><p>
      <p class="resultsCount"><b>{{searchResults.length}}</b></p><br>
    </div>



    <hr class="resultsDivider" noshade>
    <br>

    <!--generates a bullet point for each search result item-->
    <div class="search-results-div" style="margin-left: 100px; margin-right: 100px;">

      <!--displays results if there are results-->
      <ul v-if="searchResults.length > 0" style="list-style: none; padding-left: 0px;">
        <li v-for="(item,index) in searchResults" :key="index" style="margin-bottom: 30px; list-style: none;">
          <table style="width: 100%">
            <tr>
              <td style="width: 70%">
                  <!--the data set name-->
                <a class='resultItemHeader' style="padding-right: 0%" :href="item.link" target="_blank">
                  {{ item.name }}
                </a>
              </td>
              <td style="text-align: right; width: 30%;">
                <p class="resultItemHeader date-access">
                  <span class="slightly-bold">Date Added:</span> {{ item.date}}
                  <br />
                  <span class="slightly-bold">Access:</span> {{ item.accessLevelIsPublic}}
                </p>
              </td>
            </tr>
          </table>
          <!--the data set description-->
          <p class="dataset-description" v-if="item.description.length > 300 && seeMoreToggler[index] && item.description.indexOf(' ', 290) != -1" style="font-size: 15px; padding-top: 5px;"><span v-html="item.description.substring(0,item.description.indexOf(' ', 290))"></span>...&nbsp;&nbsp; <button class="btn-read-more-less one" v-on:click="toggleSeeMore(index)">Read More</button></p>
          <p class="dataset-description" v-else-if="item.description.length > 300 && seeMoreToggler[index]" style="font-size: 15px; padding-top: 5px;"><span v-html="item.description.substring(0,item.description.lastIndexOf(' '))"></span>{{ item.description.substring(0,item.description.lastIndexOf(" "))}}...&nbsp;&nbsp; <button class="btn-read-more-less two" v-on:click="toggleSeeMore(index)">Read More</button></p>
          <p class="dataset-description" v-else-if="item.description.length > 300 && !seeMoreToggler[index]" style="font-size: 15px; padding-top: 5px;"><span v-html="item.description"></span>&nbsp;&nbsp; <button class="btn-read-more-less three" v-on:click="toggleSeeMore(index)">Read Less</button></p>
          <p class="dataset-description" v-else-if="item.description.length > 0" style="font-size: 15px; padding-top: 5px;"><span v-html="item.description"></span></p>
          <p class="dataset-description" v-else style="font-size: 15px; padding-top: 5px;">No description available.</p>

          <!--lists the domain tags-->
          <div v-if="item.tags.length > 0" style="padding-top: 5px;">
            <table>
              <td>
                <p class="tags-tag" style="float:left; height: auto; line-height: 20px;">Tags: </p>
              </td>
              <td>
                <button v-for="(tag, index) in item.tags" :key="index" class='tag' v-on:click="search(tag)">
                  {{tag}}
                  <span v-if="index != item.tags.length - 1">,</span>
                </button>
              </td>
            </table>
          </div>
          <hr v-if="searchResults.length != index+1" style="border-color: #DEDEDE" noshade>
        </li>
      </ul>
      <div v-else>
          <p>No search results.</p>
      </div>
    </div>
</div>
</template>

<script>
import CompareUtils from '../utils/compare-utils.js';

export default {
  name: 'DOTSearchResuls',
  data: function(){
      return{
          // searchResults: [], //List of combined search results
          relevanceSortedSearchResults: [], //List of combined search results sorted by relevance
          dateSortedSearchResults: [], //List of combined search results sorted by date
          nameSortedSearchResults: [] //List of combined search results sorted by name
      }
  },
  computed: {
    queryText: {
      get: function() { return this.$store.state.lastQueryString; },
      set: function(val) { this.$store.state.lastQueryString = val; }
    },
    searchResults: {
      get: function() {
        return this.$store.state.SocrataData;
      },
      set: function(val) { this.$store.commit('setSocrataData',val); }
    },
    seeMoreToggler: {
      get: function() {
        let result  = this.$store.state.SocrataData.map((item) => {return item ? true : false;});
        return result;
      },
      set: function(val) { console.log(val); }
    }
  },
  methods: {
    //Gets the search results for a search query
    search: function (search_query) {
      this.queryText = search_query;
      this.$store.commit('searchText', search_query);
      this.$store.dispatch('getSocrataData', search_query);
    },

    //Creates buttons to select how to organize search results by Name, Date or Relevance
    dropDownFilter: function (target) {
      if(target.id === 'seg-Date') {
        let sortedList = this.searchResults.sort(CompareUtils.compareDate);
        this.searchResults = sortedList;
      } else if(target.id === 'seg-Name') {
        let sortedList = this.searchResults.sort(CompareUtils.compareName);
        this.searchResults = sortedList;
      }
    },

    //Allows the user to expand the dataset description
    toggleSeeMore: function (index) {
      this.seeMoreToggler[index] = !this.seeMoreToggler[index];
      this.$forceUpdate();
    },

    returnToHomePage: function() {
      this.$router.push('/');
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
