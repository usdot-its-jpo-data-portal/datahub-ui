import {shallowMount} from '@vue/test-utils';
import about from '@/views/About.vue';

describe('DOT Microsite About', () => {
  it('constains main title', () => {
    const wrapper = shallowMount(about, { attachTo: document.body });
    let v = wrapper.find('h1');
    expect(v.text()).toMatch('About the ITS DataHub');
  });
  it('has the expected number of H2 elements', () => {
    const wrapper = shallowMount(about, { attachTo: document.body });
    let h2s = wrapper.findAll('h2');
    expect(h2s.length).toEqual(7);
  });
  it('has the expected H2 elements', () => {
    const wrapper = shallowMount(about, { attachTo: document.body });
    let h2s = wrapper.findAll('h2');
    let expected = [
      'What data can I find on the ITS DataHub?',
      'How do I find data on the ITS DataHub?',
      'How do I provide data to the ITS DataHub?',
      'How do I get access to sensitive transportation datasets?',
      'Upcoming Webinars',
      'Other Resources',
      'Contact Information'
    ];
    for(let i=0; i<h2s.length; i++){
      expect(h2s.at(i).text()).toMatch(expected[i]);
    }
  });

});