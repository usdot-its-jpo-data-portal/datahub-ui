import {shallowMount} from '@vue/test-utils';
import DOTIFrame from '@/components/dot-iframe.vue';

describe('dot-iframe.vue', () => {

  beforeEach(() => {
  });

  it('test instance', () => {
    const wrapper = shallowMount(DOTIFrame, { attachTo: document.body });
    wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.loading).toBeTruthy();
  });
  it('test loadCompleted', () => {
    const wrapper = shallowMount(DOTIFrame, { attachTo: document.body });
    wrapper.vm.loadCompleted();
    expect(wrapper.vm.$data.loading).toBeFalsy();
  });
});
