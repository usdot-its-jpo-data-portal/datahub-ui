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
});
