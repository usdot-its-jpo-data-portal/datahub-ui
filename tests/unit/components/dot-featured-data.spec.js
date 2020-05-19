import {shallowMount} from '@vue/test-utils';
import DOTFeaturedData from '@/components/dot-featured-data.vue';

describe('DOT Microsite - Home : Featured Search', () => {
  it('contains a title', () => {
    const wrapper = shallowMount(DOTFeaturedData, {attachTo: document.body});
    let f = wrapper.find('h3');
    expect(f.is('h3')).toBe(true);
    expect(f.text()).toMatch('FEATURED DATASETS');
  });
  it('renders the right number of datasets', () => {
    const wrapper = shallowMount(DOTFeaturedData, {attachTo: document.body});
    let htmlLinks = wrapper.findAll('a');
    let h = htmlLinks.length;
    let b = wrapper.vm.datasets.length;
    expect(h).toEqual(b);
  });
  it('renders the correct image source', () => {
    const wrapper = shallowMount(DOTFeaturedData, {attachTo: document.body});
    let htmlLinks = wrapper.findAll('a');
    for(let i=0; i<htmlLinks.length; i++) {
      let target = `src="${wrapper.vm.datasets[i].image}"`;
      expect(htmlLinks.at(i).find('img').html().includes(target)).toBe(true);
    }
  });
  it('renders the correct image alt text', () => {
    const wrapper = shallowMount(DOTFeaturedData, {attachTo: document.body});
    let htmlLinks = wrapper.findAll('a');
    for(let i=0; i<htmlLinks.length; i++) {
      let target = `alt="${wrapper.vm.datasets[i].altText}"`;
      expect(htmlLinks.at(i).find('img').html().includes(target)).toBe(true);
    }
  });
  it('renders the correct dataset name', () => {
    const wrapper = shallowMount(DOTFeaturedData, {attachTo: document.body});
    let htmlLinks = wrapper.findAll('a');
    for(let i=0; i<htmlLinks.length; i++) {
      let id = `#dh-home_featured-search_dataset-name-${wrapper.vm.datasets[i].id}`;
      let d = htmlLinks.at(i).find(id);
      expect(d.text()).toMatch(wrapper.vm.datasets[i].name);
    }
  });
  it('renders the correct dataset description', () => {
    const wrapper = shallowMount(DOTFeaturedData, {attachTo: document.body});
    let htmlLinks = wrapper.findAll('a');
    for(let i=0; i<htmlLinks.length; i++) {
      let id = `#dh-home_featured-search_dataset-description-${wrapper.vm.datasets[i].id}`;
      let d = htmlLinks.at(i).find(id);
      expect(d.text()).toMatch(wrapper.vm.datasets[i].desc);
    }
  });
});
