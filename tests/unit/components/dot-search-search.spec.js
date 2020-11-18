import {shallowMount} from '@vue/test-utils';
import DOTSearchSearch from '@/components/dot-search-search.vue';

describe('DOT Microsite - Search : Search', () => {
  let $router;
  let $store;
  let commitKey;
  let commitVal;
  let dispatchKey;
  let dispatchVal;

  beforeEach(() => {
    $router = {
      currentRoute: {
        name : 'search'
      }
    };
    $store = {
      state: {
        queryObject: {term:'data', phrase: false, limit: 1000},
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

  it('has main title Search', () => {
    const wrapper = shallowMount(DOTSearchSearch, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('h1');
    expect(h.is('h1')).toBe(true);
    expect(h.text()).toMatch('Search');
  });
  it('constains a label with the Search text', () => {
    const wrapper = shallowMount(DOTSearchSearch, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('label');
    expect(h.is('label')).toBe(true);
    expect(h.text()).toMatch('Search');
  });
  it('constains an input', () => {
    const wrapper = shallowMount(DOTSearchSearch, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('input');
    expect(h.is('input')).toBe(true);
  });
  it('constains an button', () => {
    const wrapper = shallowMount(DOTSearchSearch, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('button');
    expect(h.is('button')).toBe(true);
  });
  it('constains an image in the button', () => {
    const wrapper = shallowMount(DOTSearchSearch, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('button');
    expect(h.is('button')).toBe(true);
    let i = h.find('img');
    expect(i.is('img')).toBe(true);
  });
  it('test mounted', (done) => {
    const wrapper = shallowMount(DOTSearchSearch, {attachTo: document.body, mocks: { $router, $store }, propsData:{queryString:'test'}});
    setTimeout(()=> {
      expect(commitKey).toEqual('setLastQueryObject');
      expect(commitVal.term).toEqual('test');
      done();
    },600);
  });
  it('test queryText get', () => {
    const wrapper = shallowMount(DOTSearchSearch, {attachTo: document.body, mocks: { $router, $store }});
    expect(wrapper.vm.queryText.term).toEqual('data');
  });
  it('test queryText set', () => {
    const wrapper = shallowMount(DOTSearchSearch, {attachTo: document.body, mocks: { $router, $store }});
    wrapper.vm.queryText = 'test'
    expect(commitKey).toEqual('setQueryObject');
    expect(commitVal).toEqual('test');
  });
  it('test searchSend invalid', () => {
    const wrapper = shallowMount(DOTSearchSearch, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.searchSend({term:''});
    expect(wrapper.vm.$data.isInvalid).toBeTruthy();
    expect(r).toBeUndefined();
  });
});
