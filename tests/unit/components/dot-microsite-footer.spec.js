import {shallowMount} from '@vue/test-utils';
import DOTMicrositeFooter from '@/components/dot-microsite-footer.vue';

describe('DOT Microsite Footer', () => {
  let $store;
  let storeCommitKey;
  let storeCommitVal;
  let dispatchKey;
  let dispatchVal;

  beforeEach(() => {
    $store = {
      state: {
        version: '1.1.987654321',
        registering: false,
        registerError: false,
        registerMessage: ''
      },
      commit: function(a,b){
        storeCommitKey = a;
        storeCommitVal = b;
      },
      dispatch: function(a, b) {
        dispatchKey = a;
        dispatchVal = b;
      }
    };
  });

  it('has a logo image for DOT', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let v = wrapper.find('#usa-footer__logo-img');
    expect(v.is('img')).toBe(true);
  });
  it('has a link to Facebook', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let v = wrapper.find('#dh-footer_social-facebook');
    expect(v.is('a')).toBe(true);
    expect(v.text()).toMatch('Facebook');
  });
  it('has a link to Twitter', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let v = wrapper.find('#dh-footer_social-twitter');
    expect(v.is('a')).toBe(true);
    expect(v.text()).toMatch('Twitter');
  });
  it('has a link to Instagram', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let v = wrapper.find('#dh-footer_social-instagram');
    expect(v.is('a')).toBe(true);
    expect(v.text()).toMatch('Instagram');
  });
  it('has contact us text title', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let v = wrapper.find('#dh-footer_contact-us-title');
    expect(v.is('h3')).toBe(true);
    expect(v.text()).toMatch('Contact ITS DataHub');
  });
  it('has contact us email link', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let v = wrapper.find('#dh-footer_contact-us-email');
    expect(v.is('a')).toBe(true);
    expect(v.text()).toMatch('data.itsjpo@dot.gov');
  });
  it('contains follow us link to Facebook', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let items = wrapper.findAll('.dh-follow-us');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      if(!items.at(i).html().includes('https://www.facebook.com/USDOT/'))
        continue;

      let item = items.at(i).find('img');
      if(!item.is('img'))
        continue;

      expect(item.html().includes('src="/images/icons/facebook_follow_svg.svg"')).toBe(true);
      found = true;
      break;
    }
    expect(found).toBe(true);
  });
  it('contains follow us link to Twitter', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let items = wrapper.findAll('.dh-follow-us');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      if(!items.at(i).html().includes('https://twitter.com/USDOT'))
        continue;

      let item = items.at(i).find('img');
      if(!item.is('img'))
        continue;

      expect(item.html().includes('src="/images/icons/twitter_follow_svg.svg"')).toBe(true);
      found = true;
      break;
    }
    expect(found).toBe(true);
  });
  it('contains follow us link to Github', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let items = wrapper.findAll('.dh-follow-us');
    let found = false;
    for(let i=0 ; i<items.length; i++) {
      if(!items.at(i).html().includes('https://github.com/usdot-its-jpo-data-portal/microsite'))
        continue;

      let item = items.at(i).find('img');
      if(!item.is('img'))
        continue;
      let hasSrc = item.html().includes('src="/images/icons/github_follow_svg.svg"');
      expect(hasSrc).toBe(true);
      found = true;
      break;
    }
    expect(found).toBe(true);
  });
  it('test versionId null', () => {
    $store.state.version = null;
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.versionId;
    expect(r).toBeNull();
  });
  it('test versionId no complain', () => {
    $store.state.version = '1.2';
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.versionId;
    expect(r).toEqual('1.2');
  });
  it('test versionId complain', () => {
    $store.state.version = '1.2.3';
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.versionId;
    expect(r).toEqual('1.2');
  });
  it('test buildId null', () => {
    $store.state.version = null;
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.buildId;
    expect(r).toBeNull();
  });
  it('test buildId no complain', () => {
    $store.state.version = '1.2';
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.buildId;
    expect(r).toBeNull();
  });
  it('test buildId complain', () => {
    $store.state.version = '1.2.3';
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.buildId;
    expect(r).toEqual('3');
  });
  it('test buildId complain zero', () => {
    $store.state.version = '1.2.0';
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let r = wrapper.vm.buildId;
    expect(r).toBeNull();
  });
  it('test registering get', () => {
    $store.state.registering = true;
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    expect(wrapper.vm.registering).toBeTruthy();
  });
  it('test registering set', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    wrapper.vm.registering = true;
    expect(storeCommitKey).toEqual('setRegistering');
    expect(storeCommitVal).toBeTruthy();
  });
  it('test registerError get', () => {
    $store.state.registerError = true;
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    expect(wrapper.vm.registerError).toBeTruthy();
  });
  it('test registerError set', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    wrapper.vm.registerError = true;
    expect(storeCommitKey).toEqual('setRegisterError');
    expect(storeCommitVal).toBeTruthy();
  });
  it('test registerMessage get', () => {
    $store.state.registerMessage = 'msg';
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    expect(wrapper.vm.registerMessage).toEqual('msg');
  });
  it('test registerMessage set', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    wrapper.vm.registerMessage = 'msg';
    expect(storeCommitKey).toEqual('setRegisterMessage');
    expect(storeCommitVal).toEqual('msg');
  });
  it('test watch registering', (done) => {
    $store.state.registerError = false;
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let mockElement = {
      classList: {
        add: function(a){}
      }
    }
    wrapper.setData({element: mockElement});
    wrapper.vm.$options.watch.registering.call(wrapper.vm, false, true);
    setTimeout(() => {
      expect(wrapper.vm.$data.email).toEqual('Email address submitted!');
      done();
    }, 1600);
  }, 3000);
  it('test signup valid email', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let testEmail = 'test@test.tst';
    wrapper.setData({email: testEmail});
    wrapper.vm.signup();
    expect(dispatchKey).toEqual('registerEmail');
    expect(dispatchVal).toEqual(testEmail);
  });
  it('test signup invalid email', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let testEmail = 'test';
    wrapper.setData({email: testEmail});
    document.querySelector = function(v) {
      return {
        focus: function(){}
      }
    };
    wrapper.vm.signup();
    expect(wrapper.vm.$data.valid).toBeFalsy();
    expect(wrapper.vm.$data.email).toEqual('');
  });

  it('test keyPress Enter', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    let testEmail = 'test';
    wrapper.setData({email: testEmail});
    wrapper.vm.keyPress({key:'Enter'});
    expect(wrapper.vm.$data.valid).toBeFalsy();
    expect(wrapper.vm.$data.email).toEqual('');
  });
  it('test keyPress Enter not valid and register error', () => {
    $store.state.registerError = true;
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    wrapper.setData({valid: false});
    wrapper.vm.registerError = true;
    wrapper.vm.keyPress({key:'other'});
    wrapper.vm.$nextTick();
    expect(wrapper.vm.$data.valid).toBeTruthy();
  });
  it('test vHandler', (done) => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body, mocks: { $store }});
    wrapper.vm.vHandler({altKey: true});
    setTimeout(() => {
      expect(wrapper.vm.$data.vVisible).toBeFalsy();
      done();
    }, 3100)
  }, 3500);

});
