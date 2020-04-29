<template>
  <div class="grid-container dh-result-card__wrapper">
    <div class="grid-row">
      <div class="grid-col-fill dh-result-card__title">
        <a :href="item.sourceUrl" target="_blank" class="search-result-link">
          {{ item.name }}
          <img class="in-line-dot-link-new-tab search-results" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab.">
        </a>
      </div>
    </div>
    <div class="grid-row">
      <div id="left_column_results_wrapper" class="mobile-lg:grid-col-3">
        <div id="results_date_label" class="dh-result-card__meta-text">Date Added:</div>
        <div id="results_date_data" class="dh-result-card__meta-data">{{ item.lastUpdate | filterDate}}</div>
        <div id="results_access_label" class="dh-result-card__meta-text">Access:</div>
        <div id="results_access_data" class="dh-result-card__meta-data">{{ item.accessLevel}}</div>
      </div>
      <div class="grid-col-fill dh-result-card__description">
        <span v-html="itemDescription"></span>
        <button v-if="readButtonVisible" class="dh-result-card__description-readmore" v-on:click="toggleSeeMore()">
          {{readButtonText}}
        </button>
      </div>
    </div>
    <div class="grid-row">
      <div class="mobile-lg:grid-col-3 dh-result-card__tags">
        <div id="results_access_label" class="dh-result-card__meta-data">Related projects<br/>on ITS CodeHub:</div>
        <ul>
          <li v-for="(rel, index) in relatedItems" :key="index">
            <a :href="rel.url" target="_blank" rel="noopener noreferrer">
              {{rel.name}}
              <img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab.">
            </a>
          </li>
        </ul>
        <div v-if="relatedShowVisible" class="dh-result-card__tags-showmore">
          <span v-if="relatedShowMore">...&nbsp;</span>
          <button v-if="relatedShowVisible" v-on:click="toggleShowMoreRelated()">
            {{relatedShowMoreText}}
          </button>
        </div>
        <div v-if="!relatedShowVisible && relatedItems.length===0" class="dh-result-card__meta-text">None</div>
      </div>
      <div class="grid-col-fill dh-result-card__tags">
        <div v-if="itemTags.length > 0" >
          <div class="dh-result-card__tags-title">Tags:</div>
          <div v-for="(tag, idx) in itemTags" :key="idx" class="dh-result-card__tag">
            <button @click="tagClicked(tag)">
              {{tag}}
            </button>
            <span v-if="idx < itemTags.length - 1">,&nbsp;</span>
          </div>
          <div v-if="tagsShowVisible" class="dh-result-card__tags-showmore">
            <span v-if="tagsShowMore">...&nbsp;</span>
            <button v-if="tagsShowVisible" v-on:click="toggleShowMoreTags()">
              {{tagsShowButtonText}}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import {ES_QUERY_LIMIT} from '../consts/constants.js';

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
      tagsShowVisible: false,
      tagsShowButtonText: '',
      tagsShowLimit: 11,
      relatedShowMore: true,
      relatedShowMoreText: '',
      relatedShowLimit: 3,
      relatedShowVisible: false
    }
  },
  filters: {
    filterDate: function(date) {
      if (date) {
        let utc = moment.utc(date).toDate()
        return moment(utc).local().format('MMM DD YYYY');
      }
      return '';
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

        let result = this.manageListToogle(
          this.item.tags,
          this.updateTagsTools,
          this.tagsShowLimit,
          this.tagsShowVisible,
          this.tagsShowMore,
          this.tagsShowMoreText);
        return result;
      },
      set: function(){}
    },
    relatedItems: {
      get: function() {

        let result = this.manageListToogle(
          this.item.related,
          this.updateRelatedTools,
          this.relatedShowLimit,
          this.relatedShowVisible,
          this.relatedShowMore,
          this.relatedShowMoreText);

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
    toggleShowMoreRelated: function() {
      this.relatedShowMore = !this.relatedShowMore;
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
    updateRelatedTools(visible, showMore, text) {
      this.relatedShowVisible = visible;
      this.relatedShowMore = showMore;
      this.relatedShowMoreText = text;
    },
    manageListToogle(list, fxUpdate, limit, visible, showMore, text) {
      let result = [];
      if(!list) {
        return result;
      }
      if(list.length === 0) {
        fxUpdate(false,showMore,text);
        result = list;
      } else {
        if(list.length <= limit) {
          fxUpdate(false,showMore,text);
          result = list;
        } else {
          if(showMore){
            fxUpdate(true,true,'SHOW MORE');
            result = list.slice(0, limit);
          } else {
            fxUpdate(true,false,'SHOW LESS');
            result = list;
          }
        }
      }
      return result;
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
    },
    tagClicked(text) {
      let searchObj = {
        term: text,
        phrase: true,
        limit: ES_QUERY_LIMIT
      }
      this.$emit('search',searchObj);
    }
  }
}
</script>
