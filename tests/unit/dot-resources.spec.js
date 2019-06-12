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
  it('has main section Guidelines', () => {
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#id-guidelines');
    expect(item.is('router-link-stub')).toBe(true);
    expect(item.text()).toMatch('Guidelines');
  });
  it('Validate Guidelines subsections', () => {
    let expectedSubsections = [
      {name:'Background and Purpose', found:false},
      {name:'Scope', found:false},
      {name:'Definitions', found:false},
      {name:'Requirements', found:false},
      {name:'Implementation Roles and Responsibilities', found:false},
      {name:'References', found:false}
    ]
    router.push('/resources/');
    const wrapper = shallowMount(Resources, {localVue, router});
    let item = wrapper.find('#id-guidelines');
    let subSections = wrapper.findAll('.usa-sidenav__item');
    expect(subSections.length > 0).toBe(true)
    let found = false;
    for(let i=0; i<subSections.length; i++) {
      let subsec = subSections.at(i);
      if(!subsec.is('li'))
        continue;

      let a = subsec.find('a');
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
  
  

});