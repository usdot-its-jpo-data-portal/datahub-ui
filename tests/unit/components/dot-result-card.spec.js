import {shallowMount} from '@vue/test-utils';
import DOTResultCard from '@/components/dot-result-card.vue';
import SEARCH_RESULTS from '@/mockdata/search-results.json';
import moment from 'moment';

describe('DOT Microsite - Search : Card', () => {
  let item;
  let searchFnc;
  let $emit;
  let emitKey;
  let emitVal;
  beforeEach(() => {
    item = {...SEARCH_RESULTS[0]};
    searchFnc = function(a){};
    $emit = function(a,b) {
      emitKey = a;
      emitVal = b;
    }
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

    let utc = moment.utc(item.lastUpdate).toDate()
    let dt = moment(utc).local().format('MMM DD YYYY');

    expect(h.length).toEqual(3);
    expect(h.at(0).text()).toMatch(dt);
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
    expect(h.length).toEqual(3);
    expect(h.at(1).text()).toMatch(item.accessLevel);
  });
  it('constains description ', () => {
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let h = wrapper.find('.dh-result-card__description');
    let b = wrapper.find('.dh-result-card__description-readmore');
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
  it('test itemDescription invalid description ', () => {
    item.description = null;
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let r = wrapper.vm.itemDescription;
    expect(r).toEqual('No description available');
  });
  it('test itemDescription long description', () => {
    let d = item.description.substring(0,280);
    while(d.length<350) {
      d +='-';
    }
    item.description = d;
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let r = wrapper.vm.itemDescription;
    expect(r).toEqual('...');
  });
  it('test itemDescription short description', () => {
    
    item.description = item.description.substring(0,100);
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let r = wrapper.vm.itemDescription;
    expect(r).toEqual(item.description);
  });
  it('test toggleShowMoreTags', ()=>{
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    wrapper.setData({tagsShowMore: true});
    wrapper.vm.$nextTick();
    wrapper.vm.toggleShowMoreTags();
    expect(wrapper.vm.$data.tagsShowMore).toBeFalsy();
  });
  it('test toggleShowMoreRelated', ()=>{
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    wrapper.setData({relatedShowMore: true});
    wrapper.vm.$nextTick();
    wrapper.vm.toggleShowMoreRelated();
    expect(wrapper.vm.$data.relatedShowMore).toBeFalsy();
  });
  it('test updateRelatedTools', ()=>{
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    wrapper.setData({relatedShowVisible: true, relatedShowMore: true, relatedShowMoreText: true});
    wrapper.vm.$nextTick();
    wrapper.vm.updateRelatedTools(false, false, false);
    expect(wrapper.vm.$data.relatedShowVisible).toBeFalsy();
    expect(wrapper.vm.$data.relatedShowMore).toBeFalsy();
    expect(wrapper.vm.$data.relatedShowMoreText).toBeFalsy();
  });
  it('test manageListToogle empty list', ()=>{
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let fx = function(a,b,c){}
    let r = wrapper.vm.manageListToogle([],fx, 10, true, true, 'text');
    expect(r.length).toEqual(0);
  });
  it('test manageListToogle limit', ()=>{
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let fx = function(a,b,c){}
    let limit = 3;
    let mockList = [1,2,3,4,5];
    let r = wrapper.vm.manageListToogle(mockList,fx, limit, true, true, 'text');
    expect(r.length).toEqual(limit);
  });
  it('test manageListToogle limit showMore false', ()=>{
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let fx = function(a,b,c){}
    let limit = 3;
    let mockList = [1,2,3,4,5];
    let r = wrapper.vm.manageListToogle(mockList,fx, limit, true, false, 'text');
    expect(r.length).toEqual(mockList.length);
  });
  it('test indexOfNextSpace invalid fromIndex', ()=>{
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let r = wrapper.vm.indexOfNextSpace('this is a test', null);
    expect(r).toEqual(4);
  });
  it('test replaceChar equal to origChar', ()=>{
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}});
    let r = wrapper.vm.replaceChar('abab', 'b', '2');
    expect(r).toEqual('a2a2');
  });
  it('test tagClicked', ()=>{
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}, mocks:{ $emit }});
    let r = wrapper.vm.tagClicked('test');
    expect(emitKey).toEqual('search');
    expect(emitVal.term).toEqual('test');
  });
  it('test filterDate', ()=>{
    item.lastUpdate = null;
    const wrapper = shallowMount(DOTResultCard, {attachTo: document.body, propsData: { index: 0, data: item, search: searchFnc}, mocks:{ $emit }});
    let h = wrapper.find('#results_date_data');
    expect(h.text()).toEqual('');
  });
});