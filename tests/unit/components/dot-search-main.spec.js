import {shallowMount} from '@vue/test-utils';
import DOTSearchMain from '@/components/dot-search-main.vue';

describe('DOT Microsite - Home : Main Search', () => {
  let $router;
  let routePath;
  let $store;
  let commitKey;
  let commitVal;
  let dispatchKey;
  let dispatchVal;

  beforeEach(() => {
    $router = {
      currentRoute: {
        name : 'home'
      },
      push: function(obj) {
        routePath = obj;
      }
    };
    $store = {
      state: {
        queryString: 'data'
      },
      commit: function(a,b){
        commitKey = a;
        commitVal = b;
      },
      dispatch: function(a, b) {
        dispatchKey = a;
        dispatchVal = b;
      }
    };
  });

  it('has the right alt heading', () => {
    const wrapper = shallowMount(DOTSearchMain, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('h1');
    let s = h.find('span');
    expect(s.is('span')).toBe(true);
    expect(s.text()).toMatch('EXPLORE OUR DATA!');
  });
  it('constains the heading description', () => {
    const wrapper = shallowMount(DOTSearchMain, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('h1');
    let t = h.text().replace(/ /g,'');
    t = t.replace(/\n/g,'');
    expect(t.includes('EXPLOREOURDATA!WelcometotheDepartmentofTransportationpublicaccesspointforITSJPOData')).toBe(true);
  });
  it('constains a label with the Search text', () => {
    const wrapper = shallowMount(DOTSearchMain, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('label');
    expect(h.is('label')).toBe(true);
    expect(h.text()).toMatch('Search');
  });
  it('constains an input', () => {
    const wrapper = shallowMount(DOTSearchMain, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('input');
    expect(h.is('input')).toBe(true);
  });
  it('constains an button', () => {
    const wrapper = shallowMount(DOTSearchMain, {attachTo: document.body, mocks: { $router, $store }});
    let h = wrapper.find('button');
    expect(h.is('button')).toBe(true);
  });
  it('test search_placeholder get', () => {
    const wrapper = shallowMount(DOTSearchMain, {attachTo: document.body, mocks: { $router, $store }});
    let v = 'test';
    wrapper.setData({placeholderValue: v});
    wrapper.vm.$nextTick();
    expect(wrapper.vm.search_placeholder).toEqual(v);
  });
  it('test search_placeholder set', () => {
    const wrapper = shallowMount(DOTSearchMain, {attachTo: document.body, mocks: { $router, $store }});
    let v = 'test';
    wrapper.vm.search_placeholder = v;
    wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.placeholderValue).toEqual(v);
  });
  it('test searchSend invalid', () => {
    const wrapper = shallowMount(DOTSearchMain, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.searchSend(null);
    expect(wrapper.vm.$data.isInvalid).toBeTruthy();
    expect(r).toBeUndefined();
  });
  it('test searchSend empty', () => {
    const wrapper = shallowMount(DOTSearchMain, {attachTo: document.body, mocks: { $router, $store }});
    let r = wrapper.vm.searchSend('');
    expect(wrapper.vm.$data.isInvalid).toBeTruthy();
    expect(r).toBeUndefined();
  });
  it('test searchSend valid', () => {
    const wrapper = shallowMount(DOTSearchMain, {attachTo: document.body, mocks: { $router, $store }});
    let s = 'test'
    let r = wrapper.vm.searchSend(s);
    expect(commitKey).toEqual('setLastQueryObject');
    expect(commitVal.term).toEqual(s);
    expect(dispatchKey).toEqual('searchDataAssets');
    expect(dispatchVal.term).toEqual(s);
    expect(routePath).toEqual('search');
  });
});
