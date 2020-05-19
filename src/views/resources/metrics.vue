<template> 
  <div class="usa-layout-docs__main desktop:grid-col-9 dh-metrics__document ">
    <div class="dh-metrics__wrapper usa-prose">
    <h1>ITS DataHub Metrics Dashboard</h1>
    <p class="usa-intro">Below is the ITS DataHub metrics dashboard. The metrics dashboard provides statistics on user activity on the ITS DataHub, data.transportation.gov (DTG), and the National Transportation Library (NTL). Statistics include data and page views, data downloads, programmatic data access, and GitHub Repository views.</p>
    <!-- implementation based on https://usdotjpoode.atlassian.net/wiki/spaces/RDA/pages/678494209/New+iframes+for+DataHub+-+USWDS -->

    <h2 v-if="!isMobile" id="dataset-highlights">Dataset Highlights</h2>
    <div v-if="!isMobile" class="grid-container">
      <h3>Recently Downloaded Datasets (last 30 days)</h3>
      <div class="grid-row">
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 1 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top DTG Datasets Downloaded (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/1JhiZYIyIWXcU14gHOiyBdwNWRqxZex_h/page/0bOK" />
        </div>
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 2 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top NTL Datasets Downloaded (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/1kWIFrlJ1ACkAR8uydbsZZGYD52cWx2An/page/0bOK" />
        </div>
      </div>
      <h3>Frequently Downloaded Datasets (all time)</h3>
      <div class="grid-row">
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 3 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top DTG Datasets Downloaded (all time)"
            src="https://datastudio.google.com/embed/reporting/1L6Xu1099L1yfG_4Bbsu5fz2M764Hba8g/page/0bOK" />
        </div>
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 4 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top NTL Datasets Dowloaded (all time)"
            src="https://datastudio.google.com/embed/reporting/1PAVzzG4ypAiwTmva04pH46HDUut236rC/page/0bOK" />
        </div>
      </div>
    </div>

    <h2 id="dtg-dataset-details">DTG Dataset Details&nbsp;&nbsp;&nbsp;<span> data.transportation.gov</span></h2>
    <div class="grid-container">
      <div class="grid-row">
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 5 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top DTG Datasets Viewed (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/1nH4nLIOsRPtHnrXtBn9IN7ibhp7oQ05J/page/0bOK" />
        </div>
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 6 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top DTG Datasets Downloaded (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/1JhiZYIyIWXcU14gHOiyBdwNWRqxZex_h/page/0bOK" />
        </div>
      </div>
      <div v-if="!isMobile" class="grid-row">
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 7 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top DTG Datasets Viewed (all time)"
            src="https://datastudio.google.com/embed/reporting/1PNb5yI7miCOqeDuy4vLIgSC3_4qDyLlo/page/0bOK" />
        </div>
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 8 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top DTG Datasets Downloaded (all time)"
            src="https://datastudio.google.com/embed/reporting/1L6Xu1099L1yfG_4Bbsu5fz2M764Hba8g/page/0bOK" />
        </div>
      </div>
      <div v-if="!isMobile" class="grid-row">
        <div class="desktop:grid-col-12 mobile:grid-col-12">
          <!-- 9 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-table"
            title="DTG Dataset Views And Downloads (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/1tohVI_KySS-TyKQkcIAAhwtqfLnxm7Ir/page/0bOK" />
        </div>
      </div>
      <div v-if="!isMobile" class="grid-row">
        <div class="desktop:grid-col-12 mobile:grid-col-12">
          <!-- 10 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-table"
            title="DTG Dataset Views and Downloads (all time)"
            src="https://datastudio.google.com/embed/reporting/193GyrPXakM4z5c-lk5j9EWWCenitrDnG/page/0bOK" />
        </div>
      </div>
      <div v-if="!isMobile" class="grid-row">
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 11 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="DTG Dataset API Rows Accessed (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/126BBqpIEREiHWB-cXYlhrZDh5yGLz6ll/page/0bOK" />
        </div>
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 12 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="DTG Dataset API Rows Downloaded (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/1GZSvnTSFSC0esKSDLM6zhCRP84EsXPbM/page/0bOK" />
        </div>
      </div>
      <div v-if="!isMobile" class="grid-row">
        <div class="desktop:grid-col-12 mobile:grid-col-12">
          <!-- *13 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-table"
            title="DTG Dataset API Rows Accessed and Downloaded (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/1nmjLomopZUgV64UhUfzSG7efcAptsYwR/page/0bOK" />
        </div>
      </div>
    </div>

    <h2 id="ntl-datset-details">NTL Dataset Details&nbsp;&nbsp;&nbsp;<span> National&nbsp;Transportation&nbsp;Library</span></h2>
    <div class="grid-container">
      <div class="grid-row">
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 14 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top NTL Dataset Views (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/1K0uYPKrJTY1BhdyRXnuT6KGen0UUCFDq/page/0bOK" />
        </div>
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 15 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top NTL Datasets Downloaded (all time)"
            src="https://datastudio.google.com/embed/reporting/1kWIFrlJ1ACkAR8uydbsZZGYD52cWx2An/page/0bOK" />
        </div>
      </div>
      <div v-if="!isMobile" class="grid-row">
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 16 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top NTL Dataset Views (all time)"
            src="https://datastudio.google.com/embed/reporting/1LewfQCFWIXBoiVlB7GRwinfqbxvABH4k/page/0bOK" />
        </div>
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <!-- 17 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart"
            title="Top NTL Dataset Downloads (all time)"
            src="https://datastudio.google.com/embed/reporting/1CBTZhW0lANvTcoquWKktCHOmpVaEOW50/page/0bOK" />
        </div>
      </div>
      <div v-if="!isMobile" class="grid-row">
        <div class="desktop:grid-col-12 mobile:grid-col-12">
          <!-- 18 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-table"
            title="NTL Dataset Views and Downloads (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/1ocfAs5j6LskVxzwp56-wuo-yMJC-x9s0/page/0bOK" />
        </div>
      </div>
      <div v-if="!isMobile" class="grid-row">
        <div class="desktop:grid-col-12 mobile:grid-col-12">
          <!-- 19 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-table-xl"
            title="NTL Dataset Views and Downloads (all time)"
            src="https://datastudio.google.com/embed/reporting/1a8k6Imi01k0DXA1y2vEYMRGQa7oOm8RZ/page/0bOK" />
        </div>
      </div>
    </div>

    <h2 v-if="!isMobile" id="sandbox-datasets">Sandbox Datasets</h2>
    <div v-if="!isMobile" class="grid-container">
      <div class="grid-row">
        <!-- text description -->
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <div class="dh-metrics__iframe-description">
            <h4>What is the Sandbox?</h4>
            <p>The sandbox is our data repository that uses Amazon Web Services (AWS) Simple Storage System (S3).
              Large data streams and immature data whose schemas are still subject to change are stored in our sandbox.</p>
          </div>
        </div>
        <div class="desktop:grid-col-6 mobile:grid-col-12">
          <div class="dh-metrics__iframe-description">
            <h4>How do I view the Sandbox and its datasets?</h4>
            <p>Users can access the data in the sandbox using any existing tools that interact with AWS S3 as well as
              browse the sandbox bucket via the online AWS S3 explorer.</p>
          </div>
        </div>
      </div>
      <div class="grid-row">
        <div class="desktop:grid-col-12 mobile:grid-col-12">
          <!-- 20 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-chart-xl"
            title="Sandbox Web Interface Pageviews"
            src="https://datastudio.google.com/embed/reporting/1kKAh-y6GxuNeiIZR__DMEy17QE_kuRFS/page/0bOK" />
        </div>
      </div>
      <div class="grid-row">
        <div class="desktop:grid-col-12 mobile:grid-col-12">
          <!-- 21 -->
          <DOTIFrame
            class="dh-metrics__iframe dh-metrics__iframe-table"
            title="Sandbox Dataset Download Stats (last 30 days)"
            src="https://datastudio.google.com/embed/reporting/1q3k6nQudo2Fu646guGiLXybdtdjVi0wi/page/0bOK" />
        </div>
      </div>
    </div>
  
  
  
  
  
  
    </div>
  </div>
</template>

<script>
import DOTIFrame from '@/components/dot-iframe.vue';

export default {
  name: 'metrics',
  components: {
    DOTIFrame
  },
  computed: {
    isMobile : {
      get: function() { return this.$store.state.isMobile; },
      set: function(){}
    }
  },
  methods: {
    moveToTag: function(event,id) {
      event.preventDefault();
      let element = document.getElementById(`${id}`);
      if(element) {
        // due to support IE11 where scrollY is not available
        let yOff = window.scrollY ? window.scrollY : window.pageYOffset;
        const y = element.getBoundingClientRect().top + yOff;
        window.scrollTo(0, y);
      }
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
