<template>
  <div class="grid-container dh-result-card__wrapper">
    <div class="grid-row">
      <div class="grid-col-fill dh-result-card__title">
        <a :href="item.link" target="_blank">
          {{ item.name }}
          <img src="/images/icons/external-tabs.svg" alt="External link">
        </a>
      </div>
    </div>
    <div class="grid-row">
      <div id="left_column_results_wrapper" class="mobile-lg:grid-col-2">
        <div id="results_date_label" class="dh-result-card__meta-text">Date Added:</div>
        <div id="results_date_data" class="dh-result-card__meta-data">{{ item.date}}</div>
        <div id="results_access_label" class="dh-result-card__meta-text">Access:</div>
        <div id="results_access_data" class="dh-result-card__meta-data">{{ item.accessLevelIsPublic}}</div>
      </div>
      <div class="grid-col-fill dh-result-card__description">
        <span v-html="itemDescription"></span>
        <button v-if="readButtonVisible" class="dh-result-card__description-readmore" v-on:click="toggleSeeMore()">
          {{readButtonText}}
        </button>
      </div>
    </div>
    <div class="grid-row">
      <div class="mobile-lg:grid-col-2">
      </div>
      <div class="grid-col-fill dh-result-card__tags">
        <div v-if="itemTags.length > 0" >
          <div class="dh-result-card__tags-title">Tags:</div>
          <div v-for="(tag, idx) in itemTags" :key="idx" class="dh-result-card__tag">
            <button @click="$emit('search',tag)">
              {{tag}}
            </button>
            <span v-if="idx < itemTags.length - 1">,&nbsp;</span>
          </div>
          <div v-if="tagsShowVisible" class="dh-result-card__tags-showmore">
            <span v-if="tagsShowMore">...&nbsp;</span>
            <button v-if="readButtonVisible" v-on:click="toggleShowMoreTags()">
              {{tagsShowButtonText}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DOTResultCard',
  props: ['index', 'data', 'search'],
  data: function() {
    return {
      item: this.data,
      idx: this.index,
      readMore: true,
      readButtonVisible: true,
      readButtonText: '',
      tagsShowMore: true,
      tagsShowVisible: true,
      tagsShowButtonText: '',
      tagsShowLimit: 11
    }
  },
  computed: {
    itemDescription: {
      get: function() {

        if(this.item.description.length > 300 && this.readMore && this.item.description.indexOf(' ', 290) != -1) {
          this.updateDescriptionTools(true, true, 'READ MORE');
          return this.item.description.substring(0,this.item.description.indexOf(' ', 290))+'...';
        }
        else if(this.item.description.length > 300 && this.readMore) {
          this.updateDescriptionTools(true, true, 'READ MORE');
          let description = this.replaceChar(this.item.description, String.fromCharCode(160), ' ');
          this.updateItemDescription(description);
          let i = this.indexOfNextSpace(description, 290);
          return description.substring(0,i)+'...';
        }
        else if(this.item.description.length > 300 && !this.readMore) {
          this.updateDescriptionTools(true, false, 'READ LESS');
          return this.item.description;
        } else if(this.item.description.length > 0) {
          this.updateDescriptionTools(false, this.readMore, this.readButtonText);
          return this.item.description;
        } else {
          this.updateDescriptionTools(false, this.readMore, this.readButtonText);
          return 'No description available';
        }
      },
      set: function() {}
    },
    itemTags: {
      get: function() {
        let result = [];
        if(!this.item) {
          return result;
        }
        if(this.item.tags.length === 0) {
          this.updateTagsTools(false,this.tagsShowMore,this.tagsShowButtonText);
          result = this.item.tags;
        } else {
          if(this.item.tags.length <= this.tagsShowLimit) {
            this.updateTagsTools(false,this.tagsShowMore,this.tagsShowButtonText);
            result = this.item.tags;
          } else {
            if(this.tagsShowMore){
              this.updateTagsTools(true,true,'SHOW MORE');
              result = this.item.tags.slice(0, this.tagsShowLimit);
            } else {
              this.updateTagsTools(true,false,'SHOW LESS');
              result = this.item.tags;
            }
          }
        }
        return result;
      },
      set: function(){}
    }
  },
  methods: {
    toggleSeeMore: function () {
      this.readMore = !this.readMore;
      this.$forceUpdate();
    },
    toggleShowMoreTags: function() {
      this.tagsShowMore = !this.tagsShowMore;
      this.$forceUpdate();
    },
    updateDescriptionTools(visible, readMore, text) {
      this.readMore = readMore;
      this.readButtonVisible = visible;
      this.readButtonText = text;
    },
    updateItemDescription(description) {
      this.item.description = description;
    },
    indexOfNextSpace(text, fromIndex) {
      if(!fromIndex) {
        fromIndex = 0;
      }
      for(let i=fromIndex; i<text.length; i++){
        let c = text[i];
        if(c == ' ' || c == '\t' || c == '\n' || c.charCodeAt(0)>127){
          return i;
        }
      }
      return null;
    },
    replaceChar(text, origChar, destChar) {
      let result = '';
      for(let i=0; i<text.length; i++) {
        if(text[i] == origChar) {
          result += destChar;
        }
        else {
          result += text[i];
        }
      }
      return result;
    },
    updateTagsTools(visible, showMore, text) {
      this.tagsShowVisible = visible;
      this.tagsShowMore = showMore;
      this.tagsShowButtonText = text;
    }
  }
}
</script>
