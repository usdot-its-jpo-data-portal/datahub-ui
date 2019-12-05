<template>
  <div class="dh-home_category-search-wrapper">

    <div class="grid-container">
      <div class="grid-row" style="solid 1px green;">
        <div class="grid-col-auto dh-home_category-search-title">
          <h3>RECOMMENDED DATASET SEARCHES</h3>
          <!-- Mary testing -->
        </div>
      </div>
    </div>

    <div class="grid-container">
      <div class="grid-row grid-gap-1 dh-home_category-search-layout">
        <div class="desktop:grid-col-3 tablet:grid-col-4 mobile:grid-col-6 grid-gap-1 dh-home_category-search-layout-cell" v-for="btn in buttons" :key="btn.id">
          <button
            v-bind:id="btn.id"
            v-on:click="searchSend(btn.labels)"
          >
            <img
              v-bind:src="btn.imgIcons"
              v-bind:alt="btn.altText"
            >
            <p>{{btn.labels}}</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TEMPLATE_CATEGORIES from '@/data/template_categories.json';
  import {ES_QUERY_LIMIT} from '../consts/constants.js'

  export default {
    name: 'DOTCategorySearch',
    props: {},
    data: function(){
        return{
                buttons: []
        }
    },
    created: function(){
        this.load_categories_json();
    },
    methods: {
      load_categories_json: function () {
        var i;
        for (i = 0; i < Math.min(TEMPLATE_CATEGORIES.maxButtonCount, TEMPLATE_CATEGORIES.buttons.length) ; i++) {
            this.buttons.push({ 'labels': TEMPLATE_CATEGORIES.buttons[i].CategoryName,
                                'imgIcons':TEMPLATE_CATEGORIES.buttons[i].imgIcons,
                                'rolloverImages': TEMPLATE_CATEGORIES.buttons[i].rolloverImages,
                                'altText': TEMPLATE_CATEGORIES.buttons[i].altText,
                                'id':"bterm" + i});
        }
      },
      searchSend: function (search_query) {
        let searchObj = {
          term: search_query,
          phrase: true,
          limit: ES_QUERY_LIMIT
        };
        this.$store.commit('setQueryObject', searchObj);
        this.$store.commit('setLastQueryObject', searchObj);
        this.$store.dispatch('searchDataAssets', searchObj);

        this.$router.push('search');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
