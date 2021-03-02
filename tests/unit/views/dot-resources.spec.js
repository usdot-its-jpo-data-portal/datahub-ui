import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import Resources from '@/views/Resources.vue';
import routes from '@/mockdata/mock-routes.js';

describe('DOT Microsite Resources', () => {
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter)
    router = new VueRouter({routes});
  });
  it('has main section Overview', () => {
    router.push('/resources');
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#id-resources-landing');
    expect(item.is('router-link-stub')).toBe(true);
    expect(item.text()).toMatch('Overview');
  });
  it('has main section Guidelines', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#id-guidelines');
    expect(item.is('router-link-stub')).toBe(true);
    expect(item.text()).toMatch('Guidelines');
  });
  it('has main section Data Management', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#data-management-id');
    expect(item.is('router-link-stub')).toBe(true);
    expect(item.text()).toMatch('Data Management');
  });
  it('has main section Data Storage System', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#id-data-storage-system');
    expect(item.is('router-link-stub')).toBe(true);
    expect(item.text()).toMatch('Data Storage System');
  });
  it('has main section FAQs', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#id-faqs');
    expect(item.is('router-link-stub')).toBe(true);
    expect(item.text()).toMatch('FAQs');
  });
  it('has main section Metrics', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#id-metrics');
    expect(item.is('router-link-stub')).toBe(true);
    expect(item.text()).toMatch('Metrics');
  });
  it('Validate Guidelines subsections', () => {
    let expectedSubsections = [
      {name:'Background and Purpose', found:false},
      {name:'Scope', found:false},
      {name:'Audience', found:false},
      {name:'Access', found:false},
      {name:'Rights & Ownership'},
      {name:'Storage & Retention', found:false},
      {name:'Standards', found:false},
      {name:'Security & Privacy', found:false},
      {name:'Documentation', found:false},
      {name:'Implementation Roles & Responsibilities', found:false},
      {name:'Definitions', found:false},
      {name:'References', found:false},
      {name:'Templates & Guides', found:false}
    ]
    router.push({path:'/resources/guidelines'});
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#ul-guidelines');
    let subSections = item.findAll('.usa-sidenav__item');
    expect(subSections.length > 0).toBe(true)
    let found = false;
    for(let i=0; i<subSections.length; i++) {
      let subsec = subSections.at(i);
      if(!subsec.is('li'))
        continue;

      let a = subsec.find('a');
      if (!a.exists()){
        a = subsec.find('router-link-stub');
      }
      for(let j=0; j<expectedSubsections.length; j++){
        if(a.text() == expectedSubsections[j].name) {
          expectedSubsections[j].found = true;
        }
      }

    }
    let result =  expectedSubsections.filter( (x) => { return x.found == false;} );
    if(result.length>0)
    {
      for(let k=0; k<result.length; k++) {
        console.log(`Missing sub-section [${result[k].name}]`)
      }
    }
    expect(result.length).toEqual(0)

  });

  it('Validate Data Management subsections', () => {
    let expectedSubsections = [
      {name:'Introduction', found:false},
      {name:'Preliminary DMP', found:false},
      {name:'Post-Award DMP', found:false},
      {name:'Templates & Instructions', found:false},
    ]
    router.push({path:'/resources/data-management/data-management'});
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#ul-data-management');
    let subSections = item.findAll('li');
    expect(subSections.length > 0).toBe(true)
    let found = false;
    for(let i=0; i<subSections.length; i++) {
      let subsec = subSections.at(i);
      let o=subsec.find('a');
      if (!o.exists()){
        o = subsec.find('router-link-stub');
      }

      if (!o.exists())
        continue;

      for(let j=0; j<expectedSubsections.length; j++){
        if(o.text() == expectedSubsections[j].name) {
          expectedSubsections[j].found = true;
        }
      }

    }
    let result =  expectedSubsections.filter( (x) => { return x.found == false;} );
    if(result.length>0)
    {
      for(let k=0; k<result.length; k++) {
        console.log(`Missing sub-section [${result[k].name}]`)
      }
    }
    expect(result.length).toEqual(0)

  });

  it('Validate Data Management - Preliminary DMP subsections', () => {
    let expectedSubsections = [
      {name:'Introduction', found:false},
      {name:'Project Overview', found:false},
      {name:'Data Overview', found:false},
      {name:'Data Stewardship', found:false},
    ]
    router.push({path:'/resources/data-management/preliminary-dmp'});
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#ul-data-management-preliminary-dmp');
    let subSections = item.findAll('li');
    expect(subSections.length > 0).toBe(true)
    let found = false;
    for(let i=0; i<subSections.length; i++) {
      let subsec = subSections.at(i);
      let o=subsec.find('a');
      if (!o.exists()){
        o = subsec.find('router-link-stub');
      }

      if (!o.exists())
        continue;

      for(let j=0; j<expectedSubsections.length; j++){
        if(o.text() == expectedSubsections[j].name) {
          expectedSubsections[j].found = true;
        }
      }

    }
    let result =  expectedSubsections.filter( (x) => { return x.found == false;} );
    if(result.length>0)
    {
      for(let k=0; k<result.length; k++) {
        console.log(`Missing sub-section [${result[k].name}]`)
      }
    }
    expect(result.length).toEqual(0)

  });

  it('Validate Data Management - Post-Award DMP subsections', () => {
    let expectedSubsections = [
      {name:'Introduction', found:false},
      {name:'Project Overview', found:false},
      {name:'Data Overview', found:false},
      {name:'Data Stewardship', found:false},
      {name:'Data Standards', found:false},
      {name:'Glossary', found:false},
    ]
    router.push({path:'/resources/data-management/post-award-dmp'});
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#ul-data-management-post-award-dmp');
    let subSections = item.findAll('li');
    expect(subSections.length > 0).toBe(true)
    let found = false;
    for(let i=0; i<subSections.length; i++) {
      let subsec = subSections.at(i);
      let o=subsec.find('a');
      if (!o.exists()){
        o = subsec.find('router-link-stub');
      }

      if (!o.exists())
        continue;

      for(let j=0; j<expectedSubsections.length; j++){
        if(o.text() == expectedSubsections[j].name) {
          expectedSubsections[j].found = true;
        }
      }

    }
    let result =  expectedSubsections.filter( (x) => { return x.found == false;} );
    if(result.length>0)
    {
      for(let k=0; k<result.length; k++) {
        console.log(`Missing sub-section [${result[k].name}]`)
      }
    }
    expect(result.length).toEqual(0)

  });

  it('Validate Data Storage System subsections', () => {
    let expectedSubsections = [
      {name:'Purpose', found:false},
      {name:'Data Storage System Decision Tree', found:false},
      {name:'Decision Points', found:false},
      {name:'Data Storage Systems', found:false},
    ]
    router.push({path:'/resources/data-storage-system'});
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#ul-datastoragesystem');
    let subSections = item.findAll('li');
    expect(subSections.length > 0).toBe(true)
    let found = false;
    for(let i=0; i<subSections.length; i++) {
      let subsec = subSections.at(i);
      let o=subsec.find('a');
      if (!o.exists()){
        o = subsec.find('router-link-stub');
      }

      if (!o.exists())
        continue;

      for(let j=0; j<expectedSubsections.length; j++){
        if(o.text() == expectedSubsections[j].name) {
          expectedSubsections[j].found = true;
        }
      }

    }
    let result =  expectedSubsections.filter( (x) => { return x.found == false;} );
    if(result.length>0)
    {
      for(let k=0; k<result.length; k++) {
        console.log(`Missing sub-section [${result[k].name}]`)
      }
    }
    expect(result.length).toEqual(0)
  });
  it('test destroyed', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
    let r = null;
    window.removeEventListener = (a, b) => {
      r = a;
    }
    wrapper.destroy();
    expect(r).toEqual('popstate');
  });
  it('test moveToTag', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
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
  it('test handleScroll', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
    let mockSideMenuElement = {
      className: 'dh-resource-main_float-menu_top'
    };
    wrapper.setData({sideMenuElement:mockSideMenuElement});
    window.scrollY = 0;
    document.getElementById = function(id) {
      if(id == 'ch-footer') {
        return {
          getBoundingClientRect: function() {
            return {
              top: 10
            }
          }
        }
      } else if(id == 'dh-resources-side-menu') {
        return {
          getBoundingClientRect: function() {
            return {
              bottom: 1
            }
          }
        }
      }
    }

    wrapper.vm.handleScroll();
    expect(wrapper.vm.$data.sideMenuElement.className).toEqual('');
  });
  it('test handleScroll sy > 250', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
    let mockSideMenuElement = {
      className: 'test'
    };
    wrapper.setData({sideMenuElement:mockSideMenuElement});
    window.scrollY = 300;
    document.getElementById = function(id) {
      if(id == 'ch-footer') {
        return {
          getBoundingClientRect: function() {
            return {
              top: 300
            }
          }
        }
      } else if(id == 'dh-resources-side-menu') {
        return {
          getBoundingClientRect: function() {
            return {
              bottom: 1
            }
          },
          style: {
            top: ''
          }
        }
      }
    }

    wrapper.vm.handleScroll();
    expect(wrapper.vm.$data.sideMenuElement.className).toEqual('test dh-resource-main_float-menu_top');
  });
  it('test handleScroll sy > 250 and less than desired space', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
    let mockSideMenuElement = {
      className: 'dh-resource-main_float-menu_top'
    };
    wrapper.setData({sideMenuElement:mockSideMenuElement});
    window.scrollY = 300;
    document.getElementById = function(id) {
      if(id == 'ch-footer') {
        return {
          getBoundingClientRect: function() {
            return {
              top: 30
            }
          }
        }
      } else if(id == 'dh-resources-side-menu') {
        return {
          getBoundingClientRect: function() {
            return {
              bottom: 10
            }
          },
          style: {
            top: ''
          }
        }
      }
    }

    wrapper.vm.handleScroll();
    expect(wrapper.vm.$data.sideMenuElement.className).toEqual('');
  });
});
