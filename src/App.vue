<template>
  <div id="app">
    <DOTHeader/>
    <router-view :key="$route.fullPath"></router-view>
    <DOTEmailRegistration v-if="$router.currentRoute.name == 'home'" :active="$store.state.emailRegistrationActive"/>
    <DOTMicrositeFooter/>
  </div>
</template>

<script>
  import DOTHeader from '@/components/dot-header.vue';
  import DOTMicrositeFooter from '@/components/dot-microsite-footer.vue';
  import DOTEmailRegistration from '@/components/email-registration.vue';

  export default {
  name: 'app',
  components: {
    DOTHeader,
    DOTEmailRegistration,
    DOTMicrositeFooter
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
