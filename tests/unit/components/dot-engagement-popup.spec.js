import {shallowMount} from '@vue/test-utils';
import DOTEngagementPopup from '@/components/dot-engagement-popup.vue';
import MOCK_DATA from '@/mockdata/engagementPopups.json';

describe('dot-engagement-popup.vue', () => {
  let $store;

  beforeEach(() => {
    $store = {
      state: {
        engagementPopup: MOCK_DATA[0]
      },
      dispatch: function(){}
    };
  });

  it('has a link to close the view', () => {
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let item = wrapper.find('#id-engpopup-close');
    expect(item.is('a')).toBe(true);
    expect(item.attributes('class')).toEqual('engpopup_close');
  });
  it('has a icon-component to close the view', () => {
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let item = wrapper.find('#id-engpopup-close-img');
    expect(item.is('mdclose-stub')).toBe(true);
    expect(item.attributes('title')).toEqual('Close Engagement Popup');
    expect(item.attributes('fillcolor')).toEqual('black');
    expect(item.attributes('size')).toEqual('18');
  });
  it('has a element div to render the content', () => {
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let item = wrapper.find('#id-engpopup-content');
    expect(item.is('div')).toBe(true);
    expect(item.html().includes(MOCK_DATA[0].content)).toBe(true);
  });
  it('contains a input checkbox to not show the popup again', () => {
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let item = wrapper.find('#id-engpopup-input');
    expect(item.is('input')).toBe(true);
    expect(item.attributes('type')).toEqual('checkbox');
  });
  it('contains a message to not show the popup again', () => {
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let item = wrapper.find('#id-engpopup-input-message');
    expect(item.is('span')).toBe(true);
    expect(item.text()).toEqual('Click here if you would like to stop seeing this message');
  });
  it('test backgroundColor no engagement popup', () => {
    $store.state.engagementPopup = null;
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(0,0,0,0.6)');
  });
  it('test backgroundColor no controlsShadow', () => {
    $store.state.engagementPopup.controlsShadow = null;
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(0,0,0,0.6)');
  });
  it('test backgroundColor black', () => {
    $store.state.engagementPopup.controlsShadow = 'black';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(0,0,0,0.6)');
  });
  it('test backgroundColor white', () => {
    $store.state.engagementPopup.controlsShadow = 'white';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(255,255,255,0.6)');
  });
  it('test backgroundColor navy', () => {
    $store.state.engagementPopup.controlsShadow = 'navy';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(22,46,81,0.6)');
  });
  it('test backgroundColor gray', () => {
    $store.state.engagementPopup.controlsShadow = 'gray';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(204,204,204,0.6)');
  });
  it('test backgroundColor darkgray', () => {
    $store.state.engagementPopup.controlsShadow = 'darkgray';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(128,128,128,0.6)');
  });
  it('test backgroundColor green', () => {
    $store.state.engagementPopup.controlsShadow = 'green';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(0,128,0,0.6)');
  });
  it('test backgroundColor red', () => {
    $store.state.engagementPopup.controlsShadow = 'red';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(255,0,0,0.6)');
  });
  it('test backgroundColor darkred', () => {
    $store.state.engagementPopup.controlsShadow = 'darkred';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(217,0,0,0.6)');
  });
  it('test backgroundColor blue', () => {
    $store.state.engagementPopup.controlsShadow = 'blue';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(0,0,255,0.6)');
  });
  it('test backgroundColor orange', () => {
    $store.state.engagementPopup.controlsShadow = 'orange';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(255,165,0,0.6)');
  });
  it('test backgroundColor transparent', () => {
    $store.state.engagementPopup.controlsShadow = 'transparent';
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.backgroundColor;
    expect(r).toEqual('rgba(0,0,0,0)');
  });
  it('test close visible', async (done) => {
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    await wrapper.setData({isClose: false, isVisible: true});
    wrapper.vm.close();
    setTimeout(() => {
      expect(wrapper.vm.$data.isClose).toBeTruthy();
      expect(wrapper.vm.$data.isVisible).toBeFalsy();
      done();
    }, 600)
  });
  it('test noShowClicked', async (done) => {
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    await wrapper.setData({isClose: false, isVisible: true});
    window.localStorage = {
      setItem: function(a,b){}
    }
    wrapper.vm.noShowClicked();
    setTimeout(() => {
      expect(wrapper.vm.$data.isClose).toBeTruthy();
      expect(wrapper.vm.$data.isVisible).toBeFalsy();
      done();
    }, 600)
  });
  it('test getUserSelection', () => {
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    window.localStorage = {
      getItem: function(a) {return null;}
    }
    let r = wrapper.vm.getUserSelection({id:'id'});
    expect(r).toBeTruthy();
  });
  it('test getUserSelection true', () => {
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    window.localStorage = {
      getItem: function(a) {
        return false;
      }
    }
    let r = wrapper.vm.getUserSelection({id:'id'});
    expect(r).toBeTruthy();
  });
  it('test watch data', () => {
    const wrapper = shallowMount(DOTEngagementPopup, { attachTo: document.body, mocks: { $store }});
    wrapper.vm.$options.watch.data.call(wrapper.vm, true, false);
    expect(wrapper.vm.$data.isVisible).toBeTruthy();
  });
});
