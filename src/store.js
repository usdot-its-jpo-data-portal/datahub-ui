import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';
import {
  DTG_URL,
  DTG_DOMAIN,
  SCGC_URL,
  SCGC_DOMAIN,
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
    MainData: [],
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
    setMainData(state, data) {
      state.MainData = data;
    },
    setSearchByName(state, data){
      state.searchByName = data;
    },
    setIsMobile(state, data) {
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

      const dtg = axios({
        method: 'GET',
        headers: { "content-type": "application/json" },
        url: DTG_URL + '?q=' + search_query + '&search_context=' + DTG_DOMAIN + '&domains='+DTG_DOMAIN+'&tags=intelligent%20transportation%20systems%20(its)&provenance=official'
      });

      const scgc = axios({
        method: 'GET',
        headers: { "content-type": "application/json" },
        url: SCGC_URL + '?q=' + search_query + '&search_context=' + SCGC_DOMAIN + '&domains='+SCGC_DOMAIN+'&tags=intelligent%20transportation%20systems%20(its)&provenance=official'
      })

      commit('setSearching', true);
      commit('setMainData', []);

      if(this.state.NTLData.length>0){
        Promise.all([dtg,scgc]).then( result => {
          let dtgData = DataProcessor.processSocratasData(result[0]);
          let scgcData = DataProcessor.processSocratasData(result[1]);

          dtgData = dtgData.concat(scgcData);

          let data = DataProcessor.mergeNTLandSocratasData(this.state.NTLData, dtgData, search_query);

          if(state.searchByName) {
            data = data.sort(CompareUtils.compareName);
          } else {
            data = data.sort(CompareUtils.compareDate);
          }
          //set searched data to the store.
          commit('setMainData', data);
          commit('setSearching', false);
        });
      } else {
        Promise.all([ntl,dtg,scgc]).then( result => {
          let ntlData = DataProcessor.processNTLData(result[0]);
          commit('setNTLData', ntlData);

          let dtgData = DataProcessor.processSocratasData(result[1]);
          let scgcData = DataProcessor.processSocratasData(result[2]);

          dtgData = dtgData.concat(scgcData);

          let data = DataProcessor.mergeNTLandSocratasData(ntlData, dtgData, search_query);

          if(state.searchByName) {
            data = data.sort(CompareUtils.compareName);
          } else {
            data = data.sort(CompareUtils.compareDate);
          }
          //set searched data to the store.
          commit('setMainData', data);
          commit('setSearching', false);
        }).catch( (error) => { //handle the case when NTL fails due to CORS
          console.log(error);
          Promise.all([dtg,scgc]).then( result => {
            let dtgData = DataProcessor.processSocratasData(result[0]);
            let scgcData = DataProcessor.processSocratasData(result[1]);

            dtgData = dtgData.concat(scgcData);

            let data = DataProcessor.mergeNTLandSocratasData(this.state.NTLData, dtgData, search_query);

            if(state.searchByName) {
              data = data.sort(CompareUtils.compareName);
            } else {
              data = data.sort(CompareUtils.compareDate);
            }
            //set searched data to the store.
            commit('setMainData', data);
            commit('setSearching', false);
          });
        });
      }
    }
  }
})
