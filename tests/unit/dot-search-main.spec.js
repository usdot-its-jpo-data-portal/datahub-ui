import {shallowMount} from '@vue/test-utils';
import DOTSearchMain from '@/components/dot-search-main.vue';

describe('DOT Microsite - Home : Main Search', () => {
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
        queryString: 'data'
      },
      commit: function(a,b){}
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
    expect(t.includes('EXPLOREOURDATA!WelcometotheDepartmentofTransporationpublicaccesspointforITSJPOData')).toBe(true);
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
});