import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import DataAccessCoECloseout from '@/views/dataaccesscoe/pl-closeout.vue';

describe('dataaccesscoe/pl-closeout.vue', () => {
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter)
    router = new VueRouter();
  });

  it('test instance', () => {
    const wrapper = shallowMount(DataAccessCoECloseout, {localVue, router});
    expect(wrapper.vm.$data.active_tab).toEqual('id_tab1');
  });
  it('test tabClicked', () => {
    const wrapper = shallowMount(DataAccessCoECloseout, {localVue, router});
    wrapper.vm.tabClicked({},'test');
    expect(wrapper.vm.$data.active_tab).toEqual('test');
  });

});
