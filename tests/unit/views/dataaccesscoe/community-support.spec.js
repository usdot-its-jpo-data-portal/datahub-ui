import {shallowMount} from '@vue/test-utils';
import DataAccessCoEProjectLifeCycle from '@/views/dataaccesscoe/community-support.vue';

describe('dataaccesscoe/community-support.vue', () => {
  let mockEvent;
  let $router;
  let routerPath;
  beforeEach(() => {
    mockEvent = {
      target: {
        id: null
      }
    }
    $router = {
      push: function(obj) {
        routerPath = obj.path;
      }
    }
  });
  it('test instance', () => {
    const wrapper = shallowMount(DataAccessCoEProjectLifeCycle);
    expect(wrapper.vm.$data.tooltip_planning).not.toBeNull();
  });
  it('test ProjectLifecycleClick invalid', () => {
    const wrapper = shallowMount(DataAccessCoEProjectLifeCycle);
    let r = wrapper.vm.ProjectLifecycleClick(mockEvent)
    expect(r).toBeUndefined();
  });
  it('test ProjectLifecycleClick planning', () => {
    const wrapper = shallowMount(DataAccessCoEProjectLifeCycle, {mocks:{$router}});
    mockEvent.target.id = 'planning-group';
    wrapper.vm.ProjectLifecycleClick(mockEvent)
    expect(routerPath).toEqual('/data-access-coe/project-lifecycle/planning');
  });
  it('test ProjectLifecycleClick preaward', () => {
    const wrapper = shallowMount(DataAccessCoEProjectLifeCycle, {mocks:{$router}});
    mockEvent.target.id = 'preaward-group';
    wrapper.vm.ProjectLifecycleClick(mockEvent)
    expect(routerPath).toEqual('/data-access-coe/project-lifecycle/preaward');
  });
  it('test ProjectLifecycleClick award', () => {
    const wrapper = shallowMount(DataAccessCoEProjectLifeCycle, {mocks:{$router}});
    mockEvent.target.id = 'award-group';
    wrapper.vm.ProjectLifecycleClick(mockEvent)
    expect(routerPath).toEqual('/data-access-coe/project-lifecycle/award');
  });
  it('test ProjectLifecycleClick postaward', () => {
    const wrapper = shallowMount(DataAccessCoEProjectLifeCycle, {mocks:{$router}});
    mockEvent.target.id = 'postaward-group';
    wrapper.vm.ProjectLifecycleClick(mockEvent)
    expect(routerPath).toEqual('/data-access-coe/project-lifecycle/postaward');
  });
  it('test ProjectLifecycleClick closeout', () => {
    const wrapper = shallowMount(DataAccessCoEProjectLifeCycle, {mocks:{$router}});
    mockEvent.target.id = 'closeout-group';
    wrapper.vm.ProjectLifecycleClick(mockEvent)
    expect(routerPath).toEqual('/data-access-coe/project-lifecycle/closeout');
  });
  it('test moveToTag', () => {
    const wrapper = shallowMount(DataAccessCoEProjectLifeCycle, {mocks:{$router}});
    let ev = {
      preventDefault: function(){}
    };
    window.scrollY = 10;
    window.scrollTo = function(x,y) {
      window.scrollX = x;
      window.scrollY = y;
    }
    document.getElementById = function(id) {
      return {
        getBoundingClientRect: function() {
          return {
            top: 10
          }
        }
      }
    }
    wrapper.vm.moveToTag(ev);
    expect(window.scrollY).toEqual(20);
  });

});
