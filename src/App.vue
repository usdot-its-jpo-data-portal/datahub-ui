<template>
  <div id="app" class="gio">
    <DOTHeader/>
    <!-- <div id="searchHead">
      <div id="nav" class="navigation-bar navBarLinks">
        <a class="headHovers navBarLinks" href="https://its.dot.gov" target="_blank">ITS JPO SITE</a> <div style="font-size: 15px; padding:3px 7px 3px 7px; display: inline;">|</div>
        <router-link class="headHovers navBarLinks" to="/">HOME</router-link> <div style="font-size: 15px; padding:3px 5px 7px 7px; display: inline;">|</div>
        <router-link class="headHovers navBarLinks" to="/about">ABOUT</router-link> <div style="font-size: 15px; padding:3px 7px 3px 7px; display: inline;">|</div>
        <router-link class="headHovers navBarLinks" to="/publicAccess">PUBLIC ACCESS</router-link> <div style="font-size: 15px; padding:3px 7px 3px 7px; display: inline;">|</div>
        <router-link class="headHovers navBarLinks" to="/metrics">METRICS</router-link> <div style="font-size: 15px; padding:3px 7px 3px 7px; display: inline;">|</div>
        <a class="headHovers navBarLinks" href="https://its.dot.gov/data/visualizations/" target="_blank">VISUALIZATIONS</a> <div style="font-size: 15px; padding:3px 7px 3px 7px; display: inline;">|</div>
        <router-link class="headHovers navBarLinks" to="/search">SEARCH</router-link> 
        <a class="headHovers navBarLinks" href="https://github.com/usdot-its-jpo-data-portal/microsite" target="_blank" style="float:right; text-align:right;padding:3px 7px 3px 7px;">VIEW THIS PROJECT ON GITHUB</a>
      </div>
    </div> -->
    <router-view :key="$route.fullPath"></router-view>
    <DOTMicrositeFooter/>
  </div>
</template>

<script>
  import DOTHeader from '@/components/dot-header.vue';
  import DOTMicrositeFooter from '@/components/dot-microsite-footer.vue';

  export default {
  name: 'app',
  components: {
    DOTHeader,
    DOTMicrositeFooter
  },
  created: function() {
  }
}
</script>
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<!--<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ce6e4cf18ce2561"></script>-->


<style lang="scss">
@import './sass/main.scss';


</style>
