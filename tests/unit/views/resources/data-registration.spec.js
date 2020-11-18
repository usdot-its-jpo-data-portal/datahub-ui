import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import Registration from '@/views/resources/data-registration.vue';

describe('resources/data-registration.vue', () => {
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter)
    router = new VueRouter();
  });

  it('test instance', () => {
    const wrapper = shallowMount(Registration, {localVue, router});
    expect(wrapper.vm.$data.contact_email).not.toEqual('');
  });


});
