<template>
  <div id="app">
    <div id="overlay" class="usa-overlay"></div>
    <DOTDisclaimerPopup/>
    <DOTHeader/>
    <router-view :key="$route.fullPath"></router-view>
    <DOTMicrositeFooter/>
  </div>
</template>

<script>
  import DOTDisclaimerPopup from '@/components/dot-disclaimer-popup.vue';
  import DOTHeader from '@/components/dot-header.vue';
  import DOTMicrositeFooter from '@/components/dot-microsite-footer.vue';
  export default {
  name: 'app',
  components: {
    DOTHeader,
    DOTMicrositeFooter,
    DOTDisclaimerPopup
  },
  created: function() {
    let isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent));
      if(this.$store.state.isMobile != isMobile){
        this.$store.commit('setIsMobile', isMobile);
      }
    
  }
}
</script>
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<!--<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ce6e4cf18ce2561"></script>-->

<style lang="scss">
@import './sass/main.scss';
</style>
