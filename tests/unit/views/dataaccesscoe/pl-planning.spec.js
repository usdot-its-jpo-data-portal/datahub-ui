import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import DataAccessCoEPlanning from '@/views/dataaccesscoe/pl-planning.vue';

describe('dataaccesscoe/pl-planning.vue', () => {
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter)
    router = new VueRouter();
  });

  it('test instance', () => {
    const wrapper = shallowMount(DataAccessCoEPlanning, {localVue, router});
    expect(wrapper.vm.$data.active_tab).toEqual('id_tab1');
  });
  it('test tabClicked', () => {
    const wrapper = shallowMount(DataAccessCoEPlanning, {localVue, router});
    wrapper.vm.tabClicked({},'test');
    expect(wrapper.vm.$data.active_tab).toEqual('test');
  });

});
