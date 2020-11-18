import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import DataAccessCoE from '@/views/DataAccessCoE.vue';
import routes from '@/mockdata/mock-routes.js';

describe('DataAccessCoE.vue', () => {
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter)
    router = new VueRouter({routes});
  });
  it('test instance', () => {
    const wrapper = shallowMount(DataAccessCoE, {localVue, router});
    expect(wrapper.vm.$data.id).toEqual('');
  });
  it('test destroyed', () => {
    const wrapper = shallowMount(DataAccessCoE, {localVue, router});
    let r = null;
    window.removeEventListener = (a, b) => {
      r = a;
    }
    wrapper.destroy();
    expect(r).toEqual('popstate');
  });
  it('test moveToTag', () => {
    const wrapper = shallowMount(DataAccessCoE, {localVue, router});
    let mockEvent = {
      preventDefault: function(){},
    };
    let mockId = 'id';
    window.scrollY = 0;
    document.getElementById = function(id) {
      return {
        getBoundingClientRect: function() {
          return {
            top: 0
          };
        }
      }
    };
    window.scrollTo = function(x,y) {}
    wrapper.vm.moveToTag(mockEvent, mockId);
    expect(window.scrollX).toEqual(0);
  });
  it('test handleScroll sy > 250', () => {
    const wrapper = shallowMount(DataAccessCoE, {localVue, router});
    let mockSideMenuElement = {
      className: 'test'
    };
    wrapper.setData({sideMenuElement:mockSideMenuElement});
    window.scrollY = 300;
    

    wrapper.vm.handleScroll();
    expect(wrapper.vm.$data.sideMenuElement.className).toEqual('test dh-data-access-coe_float-menu_top');
  });
  it('test handleScroll sy < 250', () => {
    const wrapper = shallowMount(DataAccessCoE, {localVue, router});
    let mockSideMenuElement = {
      className: 'test dh-data-access-coe_float-menu_top'
    };
    wrapper.setData({sideMenuElement:mockSideMenuElement});
    window.scrollY = 200;
    

    wrapper.vm.handleScroll();
    expect(wrapper.vm.$data.sideMenuElement.className).toEqual('test');
  });

});
