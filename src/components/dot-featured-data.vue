<template>
  <div id="DatasetDiv" style="text-align: center;">
      <img class="contentIndicator" style="top: -30px" src="/images/icons/ContentIndicator.png" alt="Content Indicator Arrow"/>
      <div id="FeaturedDataArea">
        <p class="headingFont" style="background-color: #152350; color: white; padding-top: 3%;">FEATURED DATA SETS</p>
      </div>
      <div class="contentArea" style="background-color: #152350;">
        <div style="display: flex; margin-left: 8%; margin-right: 8%; " id="datasetArea">
          <div id="bulmaDatasetFDS" class="columns is-multiline">
            <div v-for="dataset in datasets" :key="dataset.id" class="column is-one-quarter" style="background: #FFFFFF; margin: 5% auto; padding: 0; max-width: 50%; min-width: 300px;" v-bind:id="dataset.id">
                <a v-bind:href="dataset.url" target="_blank">
                  <img v-bind:src="dataset.image" v-bind:alt="dataset.altText" class="featuredDataThumbnail">
                  <p class="featuredHeading">{{dataset.name}}</p>
                  <p style="color: black; margin-left: 7%; margin-right: 7%; text-align: left">{{dataset.desc}}</p>
                  <br>
                </a>
            </div>
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
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
