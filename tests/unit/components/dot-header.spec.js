import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import DOTHeader from '@/components/dot-header.vue';

describe('DOT Microsite Header', () => {
  let localVue;
  let router;

  beforeEach(() => {
    localVue = createLocalVue();
    localVue.use(VueRouter)
    router = new VueRouter();
  });
  it('contains USA skipnav link with text: Skip to main content', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let item = wrapper.find('.usa-skipnav');
    expect(item.is('a')).toBe(true);
    expect(item.text()).toMatch('Skip to main content');
  });
  it('contains image of USA flag', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let item = wrapper.find('.usa-banner__header-flag');
    expect(item.is('img')).toBe(true);
    expect(item.html().includes('src="/images/us_flag_small.png" alt="U.S. flag"')).toBe(true);
  });
  it('contains US banner text', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let item = wrapper.find('.usa-banner__header-text');
    expect(item.is('p')).toBe(true);
    expect(item.text()).toMatch('An official website of the United States government');
  });
  it('contains US banner header action text', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let item = wrapper.find('.usa-banner__header-action');
    expect(item.is('p')).toBe(true);
    expect(item.text()).toMatch('Here’s how you know');
  });
  it('contains US banner button text', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let item = wrapper.find('.usa-banner__button-text');
    expect(item.is('span')).toBe(true);
    expect(item.text()).toMatch('Here’s how you know');
  });
  it('contains DOT logo with Alt: Department of Transportation logo', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let item = wrapper.find('#dot_logo');
    expect(item.is('img')).toBe(true);
    expect(item.html().includes('src="/images/dot_logo.png" alt="Department of Transportation logo"')).toBe(true);
  });
  it('contains USA logo text: ITS DataHub', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let item = wrapper.find('.usa-logo__text');
    expect(item.is('em')).toBe(true);
    expect(item.text()).toMatch('ITS DataHub');
  });
  it('contains USA menu button', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let item = wrapper.find('.usa-menu-btn');
    expect(item.is('button')).toBe(true);
    expect(item.text()).toMatch('Menu');
  });
  it('contains a button to close the side menu', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let item = wrapper.find('.usa-nav__close');
    expect(item.is('button')).toBe(true);
  });
  it('contains link to Home page', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let items = wrapper.findAll('router-link-stub');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      if(items.at(i).text()==='Home'){
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  });
  it('contains link to About page', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let items = wrapper.findAll('router-link-stub');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      if(items.at(i).text()==='About'){
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  });
  it('contains link to Resources page', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let items = wrapper.findAll('router-link-stub');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      if(items.at(i).text()==='Resources'){
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  });
  it('contains link to Metrics page', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let items = wrapper.findAll('router-link-stub');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      if(items.at(i).text()==='Metrics'){
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  });
  it('contains link to Search page', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let items = wrapper.findAll('router-link-stub');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      if(items.at(i).text()==='Search'){
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  });
  it('contains link to View On GitHub', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let items = wrapper.findAll('.usa-nav__primary-item');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      if(items.at(i).text()==='View On GitHub'){
        found = true;
        break;
      }
    }
    expect(found).toBe(true);
  });
  it('contains link to ABOUT ITS JPO', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let items = wrapper.findAll('.usa-nav__secondary-item');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      let item = items.at(i).find('a');
      if(!item.is('a'))
        continue;

      if(item.text() != 'ABOUT ITS JPO')
        continue;

      expect(item.html().includes('href="https://www.its.dot.gov/"')).toBe(true);
      expect(item.html().includes('target="_blank"')).toBe(true);
      found = true;
      break;
    }
    expect(found).toBe(true);
  });
  it('contains link to ABOUT U.S. DOT', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let items = wrapper.findAll('.usa-nav__secondary-item');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      let item = items.at(i).find('a');
      if(!item.is('a'))
        continue;

      if(item.text() != 'ABOUT U.S. DOT')
        continue;

        expect(item.html().includes('href="https://www.transportation.gov/mission/about-us"')).toBe(true);
      expect(item.html().includes('target="_blank"')).toBe(true);
      found = true;
      break;
    }
    expect(found).toBe(true);
  });
  it('contains link to U.S. DOT BRIEFING ROOM', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let items = wrapper.findAll('.usa-nav__secondary-item');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      let item = items.at(i).find('a');
      if(!item.is('a'))
        continue;

      if(item.text() != 'U.S. DOT BRIEFING ROOM')
        continue;

        expect(item.html().includes('href="https://www.transportation.gov/briefingroom"')).toBe(true);
      expect(item.html().includes('target="_blank"')).toBe(true);
      found = true;
      break;
    }
    expect(found).toBe(true);
  });
  it('contains link to U.S. DOT ACTIVITIES', () => {
    const wrapper = shallowMount(DOTHeader, {localVue, router});
    let items = wrapper.findAll('.usa-nav__secondary-item');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      let item = items.at(i).find('a');
      if(!item.is('a'))
        continue;

      if(item.text() != 'U.S. DOT ACTIVITIES')
        continue;

        expect(item.html().includes('href="https://www.transportation.gov/our-activities"')).toBe(true);
      expect(item.html().includes('target="_blank"')).toBe(true);
      found = true;
      break;
    }
    expect(found).toBe(true);
  });
});
