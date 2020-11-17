import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import metrics from '@/views/resources/metrics.vue';

describe('resources/metrics.vue', () => {
  let localVue;
  let router;
  let $store;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter)
    router = new VueRouter();
    $store = {
      state: {
        isMobile: false
      }
    };
  });

  it('test instance', () => {
    const wrapper = shallowMount(metrics, {localVue, router, mocks: {$store}});
    let h = wrapper.find('h1');
    expect(h.text()).toEqual('ITS DataHub Metrics Dashboard');
  });
  it('test moveToTag', () => {
    const wrapper = shallowMount(metrics, {localVue, router, mocks: {$store}});
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
