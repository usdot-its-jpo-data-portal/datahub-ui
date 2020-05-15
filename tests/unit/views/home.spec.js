import {shallowMount, createLocalVue} from '@vue/test-utils';
import home from '@/views/Home.vue';
import VueRouter from 'vue-router'

describe('Home.vue', () => {

  it('has component DOTSearchMain', () => {
    const wrapper = shallowMount(home, { attachTo: document.body});
    let item = wrapper.find('dotsearchmain-stub');
    expect(item.exists()).toBe(true);
  });
  it('has component DOTFeaturedData', ()=>{
    const wrapper = shallowMount(home, {attachTo: document.body});
    let item = wrapper.find('dotfeatureddata-stub');
    expect(item.exists()).toBe(true);
  });
  it('has component DOTCategorySearch', ()=>{
    const wrapper = shallowMount(home, {attachTo: document.body});
    let item = wrapper.find('dotcategorysearch-stub');
    expect(item.exists()).toBe(true);
  });
  it('has component DOTEngagementPopup', ()=>{
    const wrapper = shallowMount(home, {attachTo: document.body});
    let item = wrapper.find('dotengagementpopup-stub');
    expect(item.exists()).toBe(true);
  });
});
