import {shallowMount} from '@vue/test-utils';
import DOTResultCard from '@/components/dot-result-card.vue';
import SEARCH_RESULTS from '@/mockdata/search-results.json';

describe('DOT Microsite - Search : Card', () => {
  let item;
  let searchFnc;
  let localVue;
  beforeEach(() => {
    item = SEARCH_RESULTS[0];
    searchFnc = function(a){};
  });

  it('has a title ', () => {
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let h = wrapper.find('.dh-result-card__title');
    expect(h.text()).toMatch(item.name);
  });
  it('the title is a link', () => {
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let h = wrapper.find('.dh-result-card__title');
    let a = h.find('a');
    expect(a.is('a')).toBe(true);
    expect(a.html().includes(`href="${item.link}"`));
  });
  it('constains Date Added: ', () => {
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let h = wrapper.findAll('.dh-result-card__meta-text');
    let found = '';
    for(let i=0; i<h.length; i++){
      if(h.at(i).text() === 'Date Added:'){
        found = h.at(i).text();
        break;
      }
    }
    expect(found).toMatch('Date Added:');
  });
  it('constains date for Date Added: ', () => {
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let h = wrapper.findAll('.dh-result-card__meta-data');
    expect(h.length).toEqual(2);
    expect(h.at(0).text()).toMatch(item.date);
  });
  it('constains Access: ', () => {
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let h = wrapper.findAll('.dh-result-card__meta-text');
    let found = '';
    for(let i=0; i<h.length; i++){
      if(h.at(i).text() === 'Access:'){
        found = h.at(i).text();
        break;
      }
    }
    expect(found).toMatch('Access:');
  });
  it('constains access value: ', () => {
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let h = wrapper.findAll('.dh-result-card__meta-data');
    expect(h.length).toEqual(2);
    expect(h.at(1).text()).toMatch(item.accessLevelIsPublic);
  });
  it('constains description ', () => {
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let h = wrapper.find('.dh-result-card__description');
    let b = wrapper.find('.dh-result-vard__description-readmore');
    b.trigger('click');
    let d = h.text();
    d = d.substring(0,100);
    expect(d).toMatch(item.description.substring(0,100));
  });
  it('constains the right number of tags ', () => {
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let h = wrapper.findAll('.dh-result-card__tag');
    expect(h.length).toEqual(item.tags.length);
  });
});
