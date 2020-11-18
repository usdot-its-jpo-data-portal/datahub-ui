import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import search from '@/views/Search.vue';
import routes from '@/mockdata/mock-routes.js';

describe('Search.vue', () => {
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter)
    router = new VueRouter({routes});
  });
  it('test instance', () => {
    const wrapper = shallowMount(search, {localVue, router});
    let item = wrapper.find('#searchHead');
    expect(item.is('div')).toBe(true);
  });
});
