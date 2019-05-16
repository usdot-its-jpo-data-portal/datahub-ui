<template>
  <div id="categoryDiv">
    <img
      class="contentIndicator"
      style="top: -57px"
      src="images/icons/ContentIndicator.png"
      alt="Content Indicator Arrow"
    >
    <div id="CategoryAreaHead">
      <p class="headingFont" style="color: #3585B2">POPULAR DATA SET TOPICS</p>
    </div>

    <div id="categoryArea" class="contentArea categorylayout">
      <div id="bulmaDataset" class="columns is-multiline" style="padding: 0 0 5% 0; height: 100%">
        <div class="bulmaCategories column is-one-quarter" v-for="btn in buttons" :key="btn.id">
          <button
            v-bind:id="btn.id"
            class="topic"
            vertical-align="middle"
            style="padding-bottom: 10px;"
            v-on:click="searchSend(btn.labels)"
          >
            <img
              v-bind:src="btn.imgIcons"
              v-bind:alt="btn.altText"
              style="width: 55%; height: 55%; margin-bottom: 20%;"
              class="RegularThumbnail"
            >
            <img v-bind:src="btn.rolloverImages" v-bind:alt="btn.altText" class="HoverThumbnail">
            <p class="categoryText" style="text-transform: uppercase;">{{btn.labels}}</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TEMPLATE_CATEGORIES from '@/data/template_categories.json';

  export default {
    name: 'DOTCategorySearch',
    props: {},
    data: function(){
        return{
                // Entries for template data
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
      //===============================================SEARCH FUNCTIONS===============================================        
      //Sets search term and sends it to search html page
      searchSend: function (search_query) {
        this.$store.commit('searchText', search_query);
        this.$store.commit('setLastQueryString', search_query);
        this.$store.dispatch('getSocrataData', search_query);

        this.$router.push('search');
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
