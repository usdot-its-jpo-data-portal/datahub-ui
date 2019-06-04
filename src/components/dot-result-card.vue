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
      <div class="grid-col-2">
        <div class="dh-result-card__meta-text">Date Added:</div>
        <div class="dh-result-card__meta-data">{{ item.date}}</div>
        <div class="dh-result-card__meta-text">Access:</div>
        <div class="dh-result-card__meta-data">{{ item.accessLevelIsPublic}}</div>
      </div>
      <div class="grid-col-fill dh-result-card__description">
        <span v-html="itemDescription"></span>
        <button v-if="readButtonVisible" class="dh-result-vard__description-readmore" v-on:click="toggleSeeMore()">
          {{readButtonText}}
        </button>
      </div>
    </div>
    <div class="grid-row">
      <div class="grid-col-2">
      </div>
      <div class="grid-col-fill dh-result-card__tags">
        <div v-if="item.tags.length > 0" >
          <div v-for="(tag, idx) in item.tags" :key="idx" class="dh-result-card__tag">
            <button @click="$emit('search',tag)">
              {{tag}}
            </button>
            <span v-if="idx < item.tags.length - 1">,&nbsp;</span>
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
      readButtonText: ''
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
    }
  },
  methods: {
    toggleSeeMore: function () {
      this.readMore = !this.readMore;
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
    }
  }
}
</script>
