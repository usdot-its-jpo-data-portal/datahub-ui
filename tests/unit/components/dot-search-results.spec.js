import {shallowMount} from '@vue/test-utils';
import DOTSearchResuls from '@/components/dot-search-results.vue';
import SEARCH_RESULTS from '@/mockdata/search-results.json';

describe('DOT Microsite - Search : Results', () => {
  let $router;
  let $store;
  let commitKey;
  let commitVal;
  let dispatchKey;
  let dispatchVal;

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
      commit: function(a,b){
        commitKey = a;
        commitVal = b;
      },
      dispatch: function(a,b){
        dispatchKey = a;
        dispatchVal = b;
      }
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
  it('test queryText get', () => {
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.queryText;
    expect(r.term).toEqual('data');
  });
  it('test queryText set', () => {
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    wrapper.vm.queryText = 'test';
    expect(commitKey).toEqual('setLastQueryObject');
    expect(commitVal).toEqual('test');
  });
  it('test searchResults get', () => {
    $store.state.MainData = [1,2,3,4,5];
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.searchResults;
    expect(r.length).toEqual(5);
  });
  it('test searchResults set', () => {
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    wrapper.vm.searchResults = 'test';
    expect(commitKey).toEqual('setMainData');
    expect(commitVal).toEqual('test');
  });
  it('test isSearching get', () => {
    $store.state.searching = true;
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    expect(wrapper.vm.isSearching).toBeTruthy()
  });
  it('test selectedSort get', () => {
    let t = 'test';
    $store.state.sortBy = t;
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    expect(wrapper.vm.selectedSort).toEqual(t);
  });
  it('test selectedSort set', () => {
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let t = 'test';
    wrapper.vm.selectedSort = t;
    expect(commitKey).toEqual('setSortBy');
    expect(commitVal).toEqual(t);
  });
  it('test search', () => {
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let t = 'test';
    window.scrollTo = function(a,b){};
    wrapper.vm.search(t);
    expect(commitKey).toEqual('setQueryObject');
    expect(commitVal).toEqual(t);
    expect(dispatchKey).toEqual('searchDataAssets');
    expect(dispatchVal).toEqual(t);
  });
  it('test dropDownFilter sort by name', () => {
    $store.state.sortBy = 'name';
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.dropDownFilter();
    expect(commitKey).toEqual('setSortBy');
    expect(commitVal).toEqual($store.state.sortBy);
  });
  it('test dropDownFilter sort by date', () => {
    $store.state.sortBy = 'date';
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.dropDownFilter();
    expect(commitKey).toEqual('setSortBy');
    expect(commitVal).toEqual($store.state.sortBy);
  });
  it('test dropDownFilter sort by relevance', () => {
    $store.state.sortBy = 'relevance';
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.dropDownFilter();
    expect(commitKey).toEqual('setSortBy');
    expect(commitVal).toEqual($store.state.sortBy);
  });
  it('test dropDownFilter sort by downloadstotal', () => {
    $store.state.sortBy = 'downloadstotal';
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.dropDownFilter();
    expect(commitKey).toEqual('setSortBy');
    expect(commitVal).toEqual($store.state.sortBy);
  });
  it('test dropDownFilter sort by pageviewslastmonth', () => {
    $store.state.sortBy = 'pageviewslastmonth';
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.dropDownFilter();
    expect(commitKey).toEqual('setSortBy');
    expect(commitVal).toEqual($store.state.sortBy);
  });
  it('test dropDownFilter sort by pageviewstotal', () => {
    $store.state.sortBy = 'pageviewstotal';
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.dropDownFilter();
    expect(commitKey).toEqual('setSortBy');
    expect(commitVal).toEqual($store.state.sortBy);
  });
  it('test dropDownFilter sort by default', () => {
    $store.state.sortBy = 'default';
    const wrapper = shallowMount(DOTSearchResuls, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.dropDownFilter();
    expect(commitKey).toEqual('setSortBy');
    expect(commitVal).toEqual($store.state.sortBy);
  });
});
