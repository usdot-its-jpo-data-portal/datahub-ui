import {shallowMount, createLocalVue} from '@vue/test-utils';
import about from '@/views/About.vue';
import VueRouter from 'vue-router'
import routes from '@/mockdata/mock-routes.js';

describe('DOT Microsite About', () => {
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter)
    router = new VueRouter({routes});
  });

  it('contains main title', () => {
    const wrapper = shallowMount(about, { attachTo: document.body, localVue, router });
    let v = wrapper.find('h1');
    expect(v.text()).toMatch('About');
  });
  it('has the expected number of H2 elements', () => {
    const wrapper = shallowMount(about, { attachTo: document.body, localVue, router });
    let h2s = wrapper.findAll('h2');
    expect(h2s.length).toEqual(4);
  });
  it('has the expected H2 elements', () => {
    const wrapper = shallowMount(about, { attachTo: document.body, localVue, router });
    let h2s = wrapper.findAll('h2');
    let expected = [
      'Available Data',
      'Sample Collection Data Locations',
      'Disclaimer',
      'Contact Information'
    ];
    for(let i=0; i<h2s.length; i++){
      expect(h2s.at(i).text()).toMatch(expected[i]);
    }
  });
});
