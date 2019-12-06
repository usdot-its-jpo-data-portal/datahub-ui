import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';
import DataUtils from './utils/data-utils.js';
import {
  ES_QUERY_LIMIT,
  CC_LIST_ID
} from './consts/constants.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryObject: {term:'', phrase: false, limit: ES_QUERY_LIMIT},
    lastQueryObject: {term:'', phrase: false, limit: ES_QUERY_LIMIT},
    searching: false,
    searchBy: 'relevance',
    searchError: false,
    searchMessage: '',
    MainData: [],
    registering: false,
    registerError: false,
    registerMessage: '',
    isMobile: false,
    version: JSON.parse(unescape(process.env.VUE_APP_PACKAGE_JSON || '%7Bversion%3A0%7D')).version
  },
  mutations: {
    setQueryObject(state, val) {
      state.queryObject = val;
    },
    setLastQueryObject(state, val) {
      state.lastQueryObject = val;
    },
    setSearching(state, tufa) {
      state.searching = tufa;
    },
    setMainData(state, data) {
      state.MainData = data;
    },
    setSearchBy(state, data){
      state.searchBy = data;
    },
    setIsMobile(state, data) {
      state.isMobile = data;
    },
    setRegistering(state, val) {
      state.registering = val;
    },
    setRegisterError(state, val) {
      state.registerError = val;
    },
    setRegisterMessage(state, val) {
      state.registerMessage = val;
    },
    setSearchError(state, val) {
      state.searchError = val;
    },
    setSearchMessage(state, val) {
      state.searchMessage = val
    }
  },
  actions: {
    searchDataAssets({commit}, searchObj) {
      const webApi = axios({
        method: 'POST',
        headers: { "content-type": "application/json" },
        crossDomain: true,
        url: '/api/v1/search',
        data: searchObj
      });

      commit('setSearching', true);
      commit('setMainData', []);
      commit('setSearchError', false);
      commit('setSearchMessage', '');
      Promise.all([webApi]).then( result => {
        if (DataUtils.validResponse(result[0])) {
          let data = [...result[0].data.result.result];
          commit('setMainData', data);
        } else {
          let errors = DataUtils.getErrors(result[0]);
          commit('setSearchError', true);
          commit('setSearchMessage', errors);
        }
        commit('setSearching', false);
      }).catch((e) => {
        commit('setSearchError', true);
        commit('setSearchMessage', e);
      })
    },
    registerEmail({commit}, email) {
      let payload = {
        listId: CC_LIST_ID,
        email: email
      };
      const ccApi = axios({
        method: 'POST',
        headers: { "content-type": "application/json" },
        crossDomain: true,
        url: '/apicc/v1/contacts',
        data: payload
      });

      commit('setRegistering', true);
      commit('setRegisterError', false);
      commit('setRegisterMessage', '');
      Promise.all([ccApi]).then( result => {
        if(DataUtils.validCCResponse(result[0])) {
          commit('setRegisterMessage', 'Registration completed.');
        } else {
          let errors = DataUtils.getErrors(result[0]);
          commit('setRegisterError', true);
          commit('setRegisterMessage', errors);
        }

        commit('setRegistering', false)
      }).catch((e) => {
        commit('setRegistering', false);
        commit('setRegisterError', true);
        commit('setRegisterMessage', e);
      });
    }
  }
})
