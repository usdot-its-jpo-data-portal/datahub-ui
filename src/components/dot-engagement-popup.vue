<template>
  <div v-if="data && isVisible" :class="isClose ? 'engpopup_wrapper engpopup_hide' : 'engpopup_wrapper'">
    <a id="id-engpopup-close" class="engpopup_close" @click="close()" :style="`background-color: ${backgroundColor};`">
      <MDClose id="id-engpopup-close-img" title="Close Engagement Popup" :fillColor="data.controlsColor" :size="18"/>
    </a>
    <div id="id-engpopup-content" v-html="data ? data.content : ''"></div>
    <div class="engpopup_noshow">
      <div class="engpopup_noshow-content" :style="`background-color:${backgroundColor};`">
        <input id="id-engpopup-input" type="checkbox" v-model="noShowChecked" @change="noShowClicked()">
        <span id="id-engpopup-input-message" :style="`color:${data.controlsColor};text-shadow: 0px 0px 2px ${data.controlsShadow};`">Click here if you would like to stop seeing this message</span>
      </div>
    </div>
  </div>
</template>
<script>
import MDClose from 'vue-material-design-icons/Close';
import {LS_DATAHUB_ENGAGEMENT_POPUP} from  '@/consts/constants.js';
export default {
  name: 'DOTEngagementPopup',
  components: {
    MDClose
  },
  data: function() {
    return {
      noShowChecked: false,
      opacity: 0.6,
      isVisible: true,
      isClose: false
    }
  },
  created: function() {
    this.$store.dispatch('getEngagementPopups');
  },
  computed: {
    data: {
      get: function() {
        return this.$store.state.engagementPopup;
      }
    },
    backgroundColor: {
      get: function() {
        let result = `rgba(0,0,0,${this.opacity})`;
        if (!this.$store.state.engagementPopup) {
          return result;
        }
        switch(this.$store.state.engagementPopup.controlsShadow) {
          case 'black': return result;
          case 'white': return `rgba(255,255,255,${this.opacity})`;
          case 'navy': return `rgba(22,46,81,${this.opacity})`;
          case 'gray': return `rgba(204,204,204,${this.opacity})`;
          case 'darkgray': return `rgba(128,128,128,${this.opacity})`;
          case 'green': return `rgba(0,128,0,${this.opacity})`;
          case 'red': return `rgba(255,0,0,${this.opacity})`;
          case 'darkred': return `rgba(217,0,0,${this.opacity})`;
          case 'blue': return `rgba(0,0,255,${this.opacity})`;
          case 'orange': return `rgba(255,165,0,${this.opacity})`;
          case 'transparent': return `rgba(0,0,0,0)`;
        }
        return result;
      }
    }
  },
  watch: {
    data: function(newValue, oldValue) {
      if (!oldValue && newValue) {
        this.isVisible = this.getUserSelection(newValue);
      }
    }
  },
  methods: {
    close: function() {
      this.isClose = true;
      setTimeout(()=>{
        this.isVisible = false;
      },500);
    },
    noShowClicked: function() {
      if(this.data) {
        window.localStorage.setItem(LS_DATAHUB_ENGAGEMENT_POPUP, this.data.id);
        this.close();
      }
    },
    getUserSelection(data) {
      let val = window.localStorage.getItem(LS_DATAHUB_ENGAGEMENT_POPUP);
      if (!val) {
        return true;
      }
      return val != data.id;
    }
  }
}
</script>
