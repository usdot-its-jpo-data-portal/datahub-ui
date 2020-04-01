import {shallowMount} from '@vue/test-utils';
import DOTSearchResuls from '@/components/dot-search-results.vue';
import SEARCH_RESULTS from '@/mockdata/search-results.json';

describe('DOT Microsite - Search : Results', () => {
  let $router;
  let $store;

  beforeEach(() => {
    $router = {
      currentRoute: {
        name : 'home'
      }
    };
    $store = {
      state: {
        queryObject: {term:'data', phrase: false, limit: 1000},
        lastQueryObject: {term:'data', phrase: false, limit: 1000},
        MainData: SEARCH_RESULTS,
        searching: false
      },
      commit: function(a,b){},
      dispatch: function(a,b){}
    };
  });

  it('has Search Results for "data" ', () => {
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.findAll('.dh-search-results__result-text');
    let found = '';
    for(let i=0; i<h.length; i++){
      let text = h.at(i).text();
      text = text.replace(/\n/g,'');
      text = text.replace(/ /g,'');
      if(text.includes('SearchResultsfor:')) {
        found = text;
        break;
      }
    }
    expect(found.includes('data')).toBe(true);
  });

  it('has 5 results for search text "data" ', () => {
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.findAll('.dh-search-results__result-text');
    let found = '';
    for(let i=0; i<h.length; i++){
      let text = h.at(i).text();
      text = text.replace(/\n/g,'');
      text = text.replace(/ /g,'');
      if(text.includes('NumberofResults:')) {
        found = text;
        break;
      }
    }
    expect(found.includes('5')).toBe(true);
  });
  it('contains a Select for sorting', () => {
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('#sortSelector');
    expect(h.is('select')).toBe(true);
  });
  it('Select for sorting has all the options', () => {
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.findAll('option');
    let expOptions = ['relevance','date','name','downloadsTotal','pageViewsLastMonth','pageViewsTotal'];
    let options = [];
    for(let j=0; j<h.length; j++) {
      options.push(h.at(j).attributes().value);
    }
    let msg = '';
    for(let i=0; i<expOptions.length; i++) {
      if (!options.includes(expOptions[i])) {
        msg += expOptions[i] +', ';
      }
    }
    if (msg != '') {
      msg = 'Missing options: ' + msg.substring(0,msg.length-2);
    }
    expect(msg).toBe('');
  });
  it('render the search results ', () => {
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('.dh-search-results_list');
    let l = h.findAll('li');
    expect(l.length).toEqual(5);
  });
  it('displays Searching... ', () => {
    $store.state.searching = true;
    $store.state.MainData = [];
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('.dh-search-results_list-searching');
    expect(h.text()).toMatch('Searching...')
  });
  it('Searching has an image ', () => {
    $store.state.searching = true;
    $store.state.MainData = [];
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('.dh-search-results_list-searching');
    let i = h.find('img');
    expect(i.is('img')).toBe(true);
  });
  it('displays No search results. ', () => {
    $store.state.searching = false;
    $store.state.MainData = [];
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('.dh-search-results_list-no-results');
    expect(h.text()).toMatch('No search results.');
  });

});