<template>
  <div id="search-wrapper">
      <div id='searchTerms'>
          <div id="searchHead" class="searchHeader">
              <DOTSearchMain :query=sentSearchTerm ></DOTSearchMain>
          </div>
          <DOTSearchResults :query=sentSearchTerm></DOTSearchResults>
      </div>
  </div>
</template>

<!-- Google Analytics -->
<script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-32989783-1']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
</script>
<script type="text/javascript" src="js/dot_ostr_analytics.js"> </script>
<!-- End Google Analytics -->


<script>
import DOTSearchMain from '@/components/dot-search-main.vue';
import DOTSearchResults from '@/components/dot-search-results.vue';

export default {
  name: 'search',
  components: {
    DOTSearchMain,
    DOTSearchResults
  },
  computed: {
    sentSearchTerm: function() {
      return sessionStorage.getItem('sentSearchTerm');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
