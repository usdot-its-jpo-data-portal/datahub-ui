<template>
  <div id="searchresults" class="contentArea searchResults">
    <br>
    <div style="display: flex;">
      <a id="returnPage" class="readButton" style="font-size: 15px; margin-left: 80px;margin-bottom: 10px" v-on:click="returnToHomePage()">Return to Home Page &raquo;</a>
    </div>
    <div style="display: flex; float: right; margin-right: 80px">
      <p style="line-height: 1.8" class="resultsSectionHeading">Sort By: &nbsp;</p>
      <nav class="segmented-button">
        <input v-on:click="dropDownFilter" type="radio" name="seg-1" value="R" id="seg-Relevance" class="filterRelevance" checked>
        <label for="seg-Relevance" class="first">Relevance</label>
        <input v-on:click="dropDownFilter" type="radio" name="seg-1" value="N" id="seg-Name" class="filterName">
        <label for="seg-Name" class="first">Name</label>
        <input v-on:click="dropDownFilter" type="radio" name="seg-1" value="D" id="seg-Date" class="filterDate">
        <label for="seg-Date" class="last">Date</label>
      </nav>
    </div>
    <div style="display: flex;">
      <p class="resultsSectionHeading"><b>SEARCH RESULTS FOR:&nbsp;</b></p>
      <p class="resultsQuery"><b id="resultsQuery">{{queryText}}</b></p><br>
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
        <!-- <li v-model="seeMoreToggler" v-for="(item,index) in searchResults" :key="index" style="margin-bottom: 30px; list-style: none;"> -->
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
import axios from 'axios';
import {EventBus} from '../eventbus/eventbus.js';
import {SEARCH_QUERY_UPDATE, SEARCH_QUERY_SUBMIT} from '../consts/constants.js'

export default {
  name: 'DOTSearchResuls',
  props: ['query'],
    data: function(){
        return{
            NTLJson: [], //List of NTL datasets loaded from NTL API
            searchResults: [], //List of combined search results
            relevanceSortedSearchResults: [], //List of combined search results sorted by relevance
            dateSortedSearchResults: [], //List of combined search results sorted by date
            nameSortedSearchResults: [], //List of combined search results sorted by name
            socrata_url: 'https://api.us.socrata.com/api/catalog/v1?q=',
            socrata_domain:"data.transportation.gov",
            seeMoreToggler: [],
            queryText: this.query === 'null' ? '' : this.query,
        }
    },
    created: function(){
      this.loadNTL(); // Loads the initial static file of NTL Data
      this.search(this.query);
    },
    mounted: function() {
      EventBus.$on(SEARCH_QUERY_SUBMIT, (payload) => {
        this.search(payload);
      })
    },
    methods: {
        //Gets the search results for a search query
        search: function (search_query) {
          this.queryText = search_query;
          sessionStorage.setItem("sentSearchTerm", this.queryText);
          EventBus.$emit(SEARCH_QUERY_UPDATE, this.queryText);

          this.searchResults = [];
          //Additional or different search domains should be added here
          this.addSocratatoSearchResult(search_query);
          this.addNTLtoSearchResult(search_query);
          this.relevanceSortedSearchResults = this.searchResults.slice();

          this.dateSortedSearchResults = this.searchResults.slice();
          this.dateSortedSearchResults.sort(this.compareDate);

          this.nameSortedSearchResults = this.searchResults.slice();
          this.nameSortedSearchResults.sort(this.compareName);

          for (var i = 0; i < this.searchResults.length; i = i + 1) {
              this.seeMoreToggler[i] = true;
          }
          //document.getElementsByClassName("filterRelevance")[0].checked = true;
        },
        //===============================================NTL FUNCTIONS===============================================

        // Calls NTL API to grab json file containing ITS JPO dataset listings from NTL, called on webpage load, function operates sync on load to prevent timing issue
        loadNTL: function () {
          var itemCountNTL;
          var self = this;
          var NTL_url = "https://rosap.ntl.bts.gov/fedora/export/view/collection/";
          var NTL_collection = "dot:239"; //Limit results to specific collection
          var NTL_datelimit = "?from=2018-01-01T00:00:00Z"; //Limit results to before, after or between a specific date range
          var NTL_rowslimit = "&rows=9999"; //Set number of rows to have returned (NTL default is 100), max 9999
          var tempAccessLevel = "";

          axios({
            method: 'GET',
            headers: { "content-type": "application/json" },
            crossDomain: true,
            url: NTL_url + NTL_collection + NTL_datelimit + NTL_rowslimit
          }).then( response => {
            let json = response.data;
            for (itemCountNTL = 0; itemCountNTL < json.response.docs.length; itemCountNTL++) {
              //Filter results to pull only dataset types
              if (json.response.docs[itemCountNTL]["mods.sm_resource_type"][0] == "Dataset"){
                var tempJson = {};
                //Read dataset name, description, date
                tempJson["name"] = json.response.docs[itemCountNTL]["dc.title"][0];
                tempJson["description"] = json.response.docs[itemCountNTL]["mods.abstract"][0];
                tempJson["date"] = self.formatDate(json.response.docs[itemCountNTL]["fgs.createdDate"]);
                tempAccessLevel = json.response.docs[itemCountNTL]["rdf.isOpenAccess"][0];
                
                if((tempAccessLevel == "") || (tempAccessLevel == null)){
                  tempJson["accessLevelIsPublic"] ="Public";
                }
                if(tempAccessLevel == "true"){
                  tempJson["accessLevelIsPublic"] ="Public";
                }
                else{
                  tempJson["accessLevelIsPublic"] = "Restricted";
                }

                //Read dataset tags, add Research Results button tag to all NTL results
                var tagCount;
                var allTags = [];
                var RESEARCHRESULTS = "Research Results";
                allTags[0] = RESEARCHRESULTS;
                for (tagCount = 0; tagCount < json.response.docs[itemCountNTL]["mods.sm_key_words"].length; tagCount++) {
                  allTags[tagCount + 1] = json.response.docs[itemCountNTL]["mods.sm_key_words"][tagCount];
                }
                tempJson["tags"] = allTags;
                tempJson["tags"].sort();

                //Build URL to refer to NTL result using PID
                var PID = json.response.docs[itemCountNTL].PID.split(":")[1];
                tempJson["link"] = "https://rosap.ntl.bts.gov/view/dot/" + PID;

                //Add to NTL datasets JSON list
                self.NTLJson.push(tempJson);

              }
            }
          }, error => { console.error(error)});
        },

        //Searches NTL files for match based on tag, title, or description and adds them to combined search result list
        addNTLtoSearchResult: function (search_query) {
          var itemCountNTL;
          var self = this;
          for (itemCountNTL = 0; itemCountNTL < self.NTLJson.length; itemCountNTL++) {
            if(self.NTLJson[itemCountNTL]["name"].toLowerCase().search(search_query.toLowerCase()) > -1){
              self.searchResults.push(self.NTLJson[itemCountNTL]);
            } else if(self.NTLJson[itemCountNTL]["description"].toLowerCase().search(search_query.toLowerCase()) > -1){
              self.searchResults.push(self.NTLJson[itemCountNTL]);
            } else {
              var tagCount;
              for (tagCount = 0; tagCount < self.NTLJson[itemCountNTL].tags.length; tagCount++) {
                if (self.NTLJson[itemCountNTL].tags[tagCount].toLowerCase().search(search_query.toLowerCase()) > -1) {
                  self.searchResults.push(self.NTLJson[itemCountNTL]);
                  break;
                }
              }
            }
          }
        },

        //===============================================SOCRATA FUNCTION===============================================

        //Adds Socrata search results to combined search result list
        addSocratatoSearchResult: function (search_query) {
          var itemCount;
          var self = this;
          var tempAccessLevel = "";
          var metadata_element;

          axios({
            method: 'GET',
            headers: { "content-type": "application/json" },
            url: self.socrata_url + search_query + '&search_context=' + self.socrata_domain + '&domains=data.transportation.gov&tags=intelligent%20transportation%20systems%20(its)'
          }).then( response => {
            let items = response.data;
            for (itemCount = 0; itemCount < items.results.length; itemCount++) {
              var tempJson = {};
              tempJson["name"] = items.results[itemCount].resource.name;
              tempJson["description"] = items.results[itemCount].resource.description;
              //items.results[itemCount].classification.domain_metadata[3].value;
              for (metadata_element in items.results[itemCount].classification.domain_metadata){
                if(items.results[itemCount].classification.domain_metadata[metadata_element].key == "Common-Core_Public-Access-Level"){
                  tempAccessLevel  = items.results[itemCount].classification.domain_metadata[metadata_element].value;
                }
              }
              //tempAccessLevel  = items.results[itemCount].classification.domain_metadata[3].value;
              if(tempAccessLevel == "public" || tempAccessLevel == "Public"){
                tempJson["accessLevelIsPublic"] ="Public";
              }
              else{
                tempJson["accessLevelIsPublic"] = "Restricted";
              }
              
              // if string only has year then only print year, otherwise parse into formatting
                tempJson["date"] = (items.results[itemCount].resource.updatedAt.substring(0,10) < 7) ? items.results[itemCount].resource.updatedAt.substring(0,10) : self.formatDate(items.results[itemCount].resource.updatedAt);
              var tagCount;
              var allTags = [];
              for (tagCount = 0; tagCount < items.results[itemCount].classification.domain_tags.length; tagCount++) {
                  allTags[tagCount] = items.results[itemCount].classification.domain_tags[tagCount];
              }
              tempJson["tags"] = allTags;
              tempJson["tags"].sort();
              tempJson["link"] = items.results[itemCount].link;
              self.searchResults.push(tempJson);
            }
            for (var i = 0; i < self.searchResults.length; i = i + 1) {
              self.seeMoreToggler[i] = true;
            }
            self.relevanceSortedSearchResults = self.searchResults.slice();

            self.dateSortedSearchResults = self.searchResults.slice();
            self.dateSortedSearchResults.sort(self.compareDate);

            self.nameSortedSearchResults = self.searchResults.slice();
            self.nameSortedSearchResults.sort(self.compareName);
          }, error => { console.error(error)});

          for (var i = 0; i < self.searchResults.length; i = i + 1) {
            self.seeMoreToggler[i] = true;
          }
        },

        ////===============================================SEARCH HELPER FUNCTIONS===============================================
        // Method used for sorting search results by dataset title alphabetically
        compareName: function (a, b) {
          const titleA = a.name.toUpperCase();
          const titleB = b.name.toUpperCase();

          let comparison = 0;
          if (titleA > titleB) {
            comparison = 1;
          } else if (titleA < titleB) {
            comparison = -1;
          }
          return comparison;
        },
        
        // Method used for sorting search results by date created
        compareDate: function(a, b) {
          var dateA = new Date(a.date);
          var dateB = new Date(b.date);

          let comparison = 0;
          if (dateA < dateB) {
            comparison = 1;
          } else if (dateA > dateB) {
            comparison = -1;
          }
          return comparison;
        },
        // Parses a string with a date into a format "Month Day Year"
        formatDate: function (date) {
          var monthNames = [
            "Jan", "Feb", "Mar",
            "Apr", "May", "Jun", "Jul",
            "Aug", "Sep", "Oct",
            "Nov", "Dec"
          ];
          var newDate = new Date(date);
          var day = newDate.getUTCDate();
          var monthIndex = newDate.getUTCMonth();
          var year = newDate.getUTCFullYear();
          return monthNames[monthIndex] + ' ' + day +  ' ' + year;
        },
        //===============================================SEARCH RESULT PAGE FORMATTING FUNCTIONS===============================================

        //Creates buttons to select how to organize search results by Name, Date or Relevance
        dropDownFilter: function () {
          var self = this;
          if (document.getElementsByClassName("filterName")[0].checked) {
            self.searchResults = self.nameSortedSearchResults.slice();
          }
          else if (document.getElementsByClassName("filterDate")[0].checked) {
            self.searchResults = self.dateSortedSearchResults.slice();
          }
          else if (document.getElementsByClassName("filterRelevance")[0].checked) {
            self.searchResults = self.relevanceSortedSearchResults.slice();
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
