import {shallowMount, createLocalVue} from '@vue/test-utils';
import DOTProjectLifecycleImg from '@/components/dot-project-lifecycle-img.vue';

describe('dot-project-lifecycle-img.vue', () => {
  let $router;
  let routerPath;
  let localVue;
  let testProps;

  beforeEach(() => {
    localVue = createLocalVue();
    testProps = {height:10, width: 10, active: true};
    $router = {
      push: function(obj) {
        routerPath = obj.path;
      }
    }
  });

  it('test instance', () => {
    const wrapper = shallowMount(DOTProjectLifecycleImg, { localVue, propsData: testProps, mocks: { $router }});
    wrapper.vm.$nextTick();
    expect(wrapper.props('active')).toBeTruthy();
  });
  it('test ProjectLifecycleClick planning', () => {
    const wrapper = shallowMount(DOTProjectLifecycleImg, { localVue, propsData: testProps, mocks: { $router }});
    wrapper.vm.$nextTick();
    wrapper.vm.ProjectLifecycleClick({target:{id:'planning-group'}});
    expect(routerPath).toEqual('/data-access-coe/community-support/planning');
  });
  it('test ProjectLifecycleClick preaward', () => {
    const wrapper = shallowMount(DOTProjectLifecycleImg, { localVue, propsData: testProps, mocks: { $router }});
    wrapper.vm.$nextTick();
    wrapper.vm.ProjectLifecycleClick({target:{id:'preaward-group'}});
    expect(routerPath).toEqual('/data-access-coe/community-support/preaward');
  });
  it('test ProjectLifecycleClick award', () => {
    const wrapper = shallowMount(DOTProjectLifecycleImg, { localVue, propsData: testProps, mocks: { $router }});
    wrapper.vm.$nextTick();
    wrapper.vm.ProjectLifecycleClick({target:{id:'award-group'}});
    expect(routerPath).toEqual('/data-access-coe/community-support/award');
  });
  it('test ProjectLifecycleClick postaward', () => {
    const wrapper = shallowMount(DOTProjectLifecycleImg, { localVue, propsData: testProps, mocks: { $router }});
    wrapper.vm.$nextTick();
    wrapper.vm.ProjectLifecycleClick({target:{id:'postaward-group'}});
    expect(routerPath).toEqual('/data-access-coe/community-support/postaward');
  });
  it('test ProjectLifecycleClick closeout', () => {
    const wrapper = shallowMount(DOTProjectLifecycleImg, { localVue, propsData: testProps, mocks: { $router }});
    wrapper.vm.$nextTick();
    wrapper.vm.ProjectLifecycleClick({target:{id:'closeout-group'}});
    expect(routerPath).toEqual('/data-access-coe/community-support/closeout');
  });
  it('test ProjectLifecycleClick default', () => {
    const wrapper = shallowMount(DOTProjectLifecycleImg, { localVue, propsData: testProps, mocks: { $router }});
    wrapper.vm.$nextTick();
    let r = wrapper.vm.ProjectLifecycleClick({target:{id:'invalid-id'}});
    expect(r).toBeUndefined();
  });
});
