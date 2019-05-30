import {shallowMount} from '@vue/test-utils';
import DOTMicrositeFooter from '@/components/dot-microsite-footer.vue';

describe('DOT Microsite Footer', () => {
  it('constains a text to the SDC page', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_sdc-link');
    expect(v.text()).toMatch('Secure Data Commons');
  });
  it('the link of the SDC Page contains an icon', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_sdc-link');
    expect(v.html().includes('<img src="')).toBe(true);
  });
  it('constains a text Sandbox Data', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_sandbox-link');
    expect(v.text()).toMatch('Sandbox Data');
  });
  it('the link of the Sandbox contains an icon', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_sandbox-link');
    expect(v.html().includes('<img src="')).toBe(true);
  });
  it('constains a text Link to CodeHub', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_codehub-link');
    expect(v.text()).toMatch('CodeHub Beta');
  });
  it('the link of the Sandbox contains an icon', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_codehub-link');
    expect(v.html().includes('<img src="')).toBe(true);
  });
  it('constains a text Link to Visualizations', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_visualizations-link');
    expect(v.text()).toMatch('Visualizations');
  });
  it('the link of the Visualizations contains an icon', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_visualizations-link');
    expect(v.html().includes('<img src="')).toBe(true);
  });
  it('has a logo image for DOT', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#usa-footer__logo-img');
    expect(v.is('img')).toBe(true);
  });
  it('has a logo image for ITS', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#usa-footer__logo-img-its');
    expect(v.is('img')).toBe(true);
  });
  it('has a link to Facebook', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_social-facebook');
    expect(v.is('a')).toBe(true);
    expect(v.text()).toMatch('Facebook');
  });
  it('has a link to Twitter', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_social-twitter');
    expect(v.is('a')).toBe(true);
    expect(v.text()).toMatch('Twitter');
  });
  it('has a link to Instagram', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_social-instagram');
    expect(v.is('a')).toBe(true);
    expect(v.text()).toMatch('Instagram');
  });
  it('has contact us text title', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_contact-us-title');
    expect(v.is('h3')).toBe(true);
    expect(v.text()).toMatch('Contact ITS DataHub');
  });
  it('has contact us email link', () => {
    const wrapper = shallowMount(DOTMicrositeFooter, { attachTo: document.body });
    let v = wrapper.find('#dh-footer_contact-us-email');
    expect(v.is('a')).toBe(true);
    expect(v.text()).toMatch('data.itsjpo@dot.gov');
  });

});