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
import CompareUtils from './utils/compare-utils.js';
import DataProcessor from './utils/dataprocessor-utils.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryString: '',
    lastQueryString: '',
    searching: false,
    loadingNTL: false,
    searchByName: false,
    NTLData : [],
    SocrataData: [],
    isMobile: false,
    version: JSON.parse(unescape(process.env.VUE_APP_PACKAGE_JSON || '%7Bversion%3A0%7D')).version
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
    },
    setSearchByName(state, data){
      state.searchByName = data;
    },
    setIsMobile(state, data) {
      console.log(data);
      state.isMobile = data;
    }
  },
  actions: {
    searchAllData({commit, state}, search_query) {

      const ntl = axios({
        method: 'GET',
        headers: { "content-type": "application/json" },
        crossDomain: true,
        url: NTL_URL + NTL_COLLECTION + NTL_DATELIMIT + NTL_ROWSLIMIT
      });

      const socra = axios({
        method: 'GET',
        headers: { "content-type": "application/json" },
        url: SOCRATA_URL + '?q=' + search_query + '&search_context=' + SOCRATA_DOMAIN + '&domains=data.transportation.gov&tags=intelligent%20transportation%20systems%20(its)&provenance=official'
      });

      commit('setSearching', true);
      commit('setSocrataData', []);

      if(this.state.NTLData.length>0){
        Promise.all([socra]).then( result => {
          let socraData = DataProcessor.processSocratasData(result[0]);
          socraData = DataProcessor.mergeNTLandSocratasData(this.state.NTLData, socraData, search_query);

          if(state.searchByName) {
            socraData = socraData.sort(CompareUtils.compareName);
          } else {
            socraData = socraData.sort(CompareUtils.compareDate);
          }
          //set searched data to the store.
          commit('setSocrataData', socraData);
          commit('setSearching', false);
        });
      } else {
        Promise.all([ntl,socra]).then( result => {
          let ntlData = DataProcessor.processNTLData(result[0]);
          commit('setNTLData', ntlData);

          let socraData = DataProcessor.processSocratasData(result[1]);

          socraData = DataProcessor.mergeNTLandSocratasData(ntlData, socraData, search_query);

          if(state.searchByName) {
            socraData = socraData.sort(CompareUtils.compareName);
          } else {
            socraData = socraData.sort(CompareUtils.compareDate);
          }
          //set searched data to the store.
          commit('setSocrataData', socraData);
          commit('setSearching', false);
        }).catch( (error) => { //handle the case when NTL fails due to CORS
          console.log(error);
          Promise.all([socra]).then( result => {
            let socraData = DataProcessor.processSocratasData(result[0]);
            socraData = DataProcessor.mergeNTLandSocratasData(this.state.NTLData, socraData, search_query);

            if(state.searchByName) {
              socraData = socraData.sort(CompareUtils.compareName);
            } else {
              socraData = socraData.sort(CompareUtils.compareDate);
            }
            //set searched data to the store.
            commit('setSocrataData', socraData);
            commit('setSearching', false);
          });
        });
      }
    }
  }
})
