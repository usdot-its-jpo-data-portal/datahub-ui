<template>
  <div class="dh-home_featured-search-wrapper">
    <div class="grid-container">
      <div class="grid-row">
        <div class="grid-col-auto dh-home_featured-search-title">
          <h3 id="featured-datasets-heading">FEATURED DATASETS</h3>
        </div>
      </div>
    </div>

    <div class="grid-container">
      <div class="grid-row grid-gap-6 dh-home_featured-search-layout" role="region" aria-labelledby="featured-datasets-heading">
        <div class="grid-col-4 mobile-lg:grid-col-6 dh-home_featured-search-layout-cell" v-for="dataset in datasets" :key="dataset.id" v-bind:id="dataset.id">
            <a class="featured-dataset" v-on:click="showDataDisclaimer(dataset.url)" :id="'dh-home_featured-datasets_dataset-name-'+dataset.id" tabindex="0" role="link">
              <div :id="'dh-home_featured-dataset_image-id_'+dataset.id" class="image-holder"></div>
              <div class="dh-home_featured-search_dataset-textbox">
                <div class="dh-home_featured-search_dataset-name" :id="'dh-home_featured-search_dataset-name-'+dataset.id">
                  {{dataset.name}}
                </div>
                <div class="dh-home_featured-search_dataset-description" :id="'dh-home_featured-search_dataset-description-'+dataset.id">
                  {{dataset.desc}}
                </div>
              </div>
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TEMPLATE_DATASETS from '@/data/template_datasets.json';

export default {
  name: 'DOTFeaturedData',
  props: {},
  data:  function(){
        return{
                datasets: [],
        }
    },
    created:function(){
        this.load_dataset_json();
    },       
    methods: {
      load_dataset_json: function() {
        var i;
        for (i = 0; i < Math.min(TEMPLATE_DATASETS.maxDatasetCount, TEMPLATE_DATASETS.datasets.length) ; i++) {
          this.datasets.push({
            'url': TEMPLATE_DATASETS.datasets[i].url,
            'image':TEMPLATE_DATASETS.datasets[i].image,
            'altText':TEMPLATE_DATASETS.datasets[i].altText,
            'name':TEMPLATE_DATASETS.datasets[i].name,
            'desc':TEMPLATE_DATASETS.datasets[i].description,
            'id': "fds" + i,
            'dataId': TEMPLATE_DATASETS.datasets[i].url.substring(TEMPLATE_DATASETS.datasets[i].url.length - 9, TEMPLATE_DATASETS.datasets[i].url.length)
          })
        }
      },
      showDataDisclaimer: function (datasetUrl){
        let alink = document.getElementById("data-disclaimer_navigate-to-dataset");
        let popupElement = document.getElementById("data-disclaimer");
        let overlayElement = document.getElementById("overlay");
        let bodyElement = document.getElementById("body-id");
        alink.setAttribute("href",datasetUrl);
        popupElement.setAttribute("style","");
        popupElement.setAttribute("aria-hidden","false");
        overlayElement.setAttribute("class","is-visible");
        bodyElement.classList.add("no-scroll");
      }
    }
  }
</script>

