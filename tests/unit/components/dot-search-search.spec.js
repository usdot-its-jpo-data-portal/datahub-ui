import {shallowMount} from '@vue/test-utils';
import DOTSearchSearch from '@/components/dot-search-search.vue';

describe('DOT Microsite - Search : Search', () => {
  let $router;
  let $store;

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
      commit: function(a,b){}
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
});
