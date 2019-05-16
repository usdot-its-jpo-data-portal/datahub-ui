import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';
import {
  SOCRATA_URL,
  SOCRATA_DOMAIN,
  NTL_URL,
  NTL_COLLECTION,
  NTL_DATELIMIT,
  NTL_ROWSLIMIT
} from './consts/constants.js';
import DateTimeUtils from './utils/datetime-utils.js';
import CompareUtils from './utils/compare-utils.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryString: '',
    lastQueryString: '',
    searching: false,
    loadingNTL: false,
    NTLData : [],
    SocrataData: []
  },
  mutations: {
    searchText(state, text) {
      state.queryString = text;
    },
    setLastQueryString(state, text) {
      state.lastQueryString = text;
    },
    setSearching(state, tufa) {
      state.searching = tufa;
    },
    setLoadingNTL(state, tufa) {
      state.loadingNTL = tufa;
    },
    setNTLData(state, data) {
      state.NTLData = data;
    },
    setSocrataData(state, data) {
      state.SocrataData = data;
    }
  },
  actions: {
    getNTLData({commit}) {

      commit('setLoadingNTL', true);

      axios({
        method: 'GET',
        headers: { "content-type": "application/json" },
        crossDomain: true,
        url: NTL_URL + NTL_COLLECTION + NTL_DATELIMIT + NTL_ROWSLIMIT
      }).then( response => {
        let json = response.data;
        let data = [];

        //Filter results to pull only dataset types
        let dataSets = json.response.docs.filter( (item) => { return item["mods.sm_resource_type"][0] == 'Dataset'; });

        for (let itemCountNTL = 0; itemCountNTL < dataSets.length; itemCountNTL++) {
          var tempJson = {};
          //Read dataset name, description, date
          tempJson["name"] = dataSets[itemCountNTL]["dc.title"][0];
          tempJson["description"] = dataSets[itemCountNTL]["mods.abstract"][0];
          tempJson["date"] = DateTimeUtils.formatDate(dataSets[itemCountNTL]["fgs.createdDate"]);

          let tempAccessLevel = dataSets[itemCountNTL]["rdf.isOpenAccess"][0];
          
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
          for (tagCount = 0; tagCount < dataSets[itemCountNTL]["mods.sm_key_words"].length; tagCount++) {
            allTags[tagCount + 1] = dataSets[itemCountNTL]["mods.sm_key_words"][tagCount];
          }
          tempJson["tags"] = allTags;
          tempJson["tags"].sort();

          //Build URL to refer to NTL result using PID
          var PID = dataSets[itemCountNTL].PID.split(":")[1];
          tempJson["link"] = "https://rosap.ntl.bts.gov/view/dot/" + PID;

          //Add to NTL datasets JSON list
          data.push(tempJson);
        }

        commit('setNTLData', data);
        commit('setLoadingNTL', false);

      }, error => { console.error(error)});
    },
    getSocrataData({commit, state}, search_query) {
      commit('setSearching', true);
      axios({
        method: 'GET',
        headers: { "content-type": "application/json" },
        url: SOCRATA_URL + '?q=' + search_query + '&search_context=' + SOCRATA_DOMAIN + '&domains=data.transportation.gov&tags=intelligent%20transportation%20systems%20(its)'
      }).then( response => {
        let items = response.data;
        let data = [];
        for (let itemCount = 0; itemCount < items.results.length; itemCount++) {
          var tempJson = {};
          tempJson["name"] = items.results[itemCount].resource.name;
          tempJson["description"] = items.results[itemCount].resource.description;

          let tempAccessLevel = '';
          for (let metadata_element in items.results[itemCount].classification.domain_metadata){
            if(items.results[itemCount].classification.domain_metadata[metadata_element].key == "Common-Core_Public-Access-Level"){
              tempAccessLevel  = items.results[itemCount].classification.domain_metadata[metadata_element].value;
            }
          }
          if(tempAccessLevel == "public" || tempAccessLevel == "Public"){
            tempJson["accessLevelIsPublic"] ="Public";
          }
          else{
            tempJson["accessLevelIsPublic"] = "Restricted";
          }
          
          // if string only has year then only print year, otherwise parse into formatting
          tempJson["date"] = (items.results[itemCount].resource.updatedAt.substring(0,10) < 7) ? items.results[itemCount].resource.updatedAt.substring(0,10) : DateTimeUtils.formatDate(items.results[itemCount].resource.updatedAt);
          var tagCount;
          var allTags = [];
          for (tagCount = 0; tagCount < items.results[itemCount].classification.domain_tags.length; tagCount++) {
              allTags[tagCount] = items.results[itemCount].classification.domain_tags[tagCount];
          }
          tempJson["tags"] = allTags;
          tempJson["tags"].sort();
          tempJson["link"] = items.results[itemCount].link;
          data.push(tempJson);
        }

        for (let itemCountNTL = 0; itemCountNTL < state.NTLData.length; itemCountNTL++) {
          if(state.NTLData[itemCountNTL]["name"].toLowerCase().search(search_query.toLowerCase()) > -1){
            data.push(state.NTLData[itemCountNTL]);
          } else if(state.NTLData[itemCountNTL]["description"].toLowerCase().search(search_query.toLowerCase()) > -1){
            data.push(state.NTLData[itemCountNTL]);
          } else {
            for (let tagCount = 0; tagCount < state.NTLData[itemCountNTL].tags.length; tagCount++) {
              if (state.NTLData[itemCountNTL].tags[tagCount].toLowerCase().search(search_query.toLowerCase()) > -1) {
                data.push(self.NTLJson[itemCountNTL]);
                break;
              }
            }
          }
        }

        //sorted data by date initially
        data = data.sort(CompareUtils.compareDate);
        //set searched data to the store.
        commit('setSocrataData', data);
        commit('setSearching', false);

      }, error => { console.error(error)});
    }

  }
})
