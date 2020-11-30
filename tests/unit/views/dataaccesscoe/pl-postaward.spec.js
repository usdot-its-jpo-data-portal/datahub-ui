import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import DataAccessCoEPostaward from '@/views/dataaccesscoe/pl-postaward.vue';

describe('dataaccesscoe/pl-postaward.vue', () => {
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter)
    router = new VueRouter();
  });

  it('test instance', () => {
    const wrapper = shallowMount(DataAccessCoEPostaward, {localVue, router});
    expect(wrapper.vm.$data.active_tab).toEqual('id_tab1');
  });
  it('test tabClicked', () => {
    const wrapper = shallowMount(DataAccessCoEPostaward, {localVue, router});
    wrapper.vm.tabClicked({},'test');
    expect(wrapper.vm.$data.active_tab).toEqual('test');
  });

});
