<template>
  <div class="dh-metrics__wrapper">
    <div class="usa-layout-docs usa-section" id="main-content">
      <div class="grid-container">
        <div class="grid-row grid-gap">
          <aside class="usa-layout-docs__sidenav desktop:grid-col-3 dh-metrics__sidemenu">
            <nav>
              <h4>Table of Contents</h4>
              <ul class="usa-sidenav">
                <li class="usa-sidenav__item">
                  <a href="#" @click="moveToTag($event, 'dataset-highlights')">Dataset Highlights</a>
                </li>
                <li class="usa-sidenav__item">
                  <a href="#" @click="moveToTag($event, 'dtg-dataset-details')">DTG Dataset Details data.transporation.gov</a>
                </li>
                <li class="usa-sidenav__item">
                  <a href="#" @click="moveToTag($event, 'ntl-datset-details')">NTL Dataset Details National Transportation Library</a>
                </li>
                <li class="usa-sidenav__item">
                  <a href="#" @click="moveToTag($event, 'sandbox-datasets')">Sandbox Datasets</a>
                </li>
                <li class="usa-sidenav__item">
                  <a href="#" @click="moveToTag($event, 'github-repository-views')">DataHub (Microsite) & Sandbox GitHub Repository Views</a>
                </li>
                <li class="usa-sidenav__item">
                  <a href="#" @click="moveToTag($event, 'datahub-usage-metrics')">DataHub Usage Metrics</a>
                </li>
              </ul>
            </nav>
          </aside>

          <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose dh-metrics__document">
            <h1>ITS DataHub Metrics Dashboard</h1>
            <p class="usa-intro">Below is the ITS DataHub metrics dashboard. The metrics dashboard provides statistics on user activity on the ITS DataHub, data.transportation.gov (DTG), and the National Transportaion Library (NTL). Statistics include data and page views, data downloads, programmatic data access, and GitHub Repository views.</p>

            <h2 id="dataset-highlights">Dataset Highlights</h2>
            <div class="grid-container">
              <h3>Recently Downloaded Datasets (last 30 days)</h3>
              <div class="grid-row">
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame
                    class="dh-metrics__iframe dh-metrics__iframe-chart"
                    title="Top DTG Datasets Downloaded (last 30 days)"
                    src="https://datastudio.google.com/embed/reporting/1JhiZYIyIWXcU14gHOiyBdwNWRqxZex_h/page/0bOK" />
                </div>
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame
                    class="dh-metrics__iframe dh-metrics__iframe-chart"
                    title="Top NTL Datasets Downloaded (last 30 days)"
                    src="https://datastudio.google.com/embed/reporting/1kWIFrlJ1ACkAR8uydbsZZGYD52cWx2An/page/0bOK" />
                </div>
              </div>
              <h3>Frequently Downloaded Datasets (all time)</h3>
              <div class="grid-row">
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame
                    class="dh-metrics__iframe dh-metrics__iframe-chart"
                    title="Top DTG Datasets Downloaded (all time)"
                    src="https://datastudio.google.com/embed/reporting/1L6Xu1099L1yfG_4Bbsu5fz2M764Hba8g/page/0bOK" />
                </div>
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame
                    class="dh-metrics__iframe dh-metrics__iframe-chart"
                    title="Top NTL Datasets Dowloaded (all time)"
                    src="https://datastudio.google.com/embed/reporting/1PAVzzG4ypAiwTmva04pH46HDUut236rC/page/0bOK" />
                </div>
              </div>
            </div>

            <h2 id="dtg-dataset-details">DTG Dataset Details data.transporation.gov</h2>
            <div class="grid-container">
              <div class="grid-row">
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame
                    class="dh-metrics__iframe dh-metrics__iframe-chart"
                    title="Top DTG Datasets Viewed (last 30 days)"
                    src="https://datastudio.google.com/embed/reporting/1nH4nLIOsRPtHnrXtBn9IN7ibhp7oQ05J/page/0bOK" />
                </div>
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame
                    class="dh-metrics__iframe dh-metrics__iframe-chart"
                    title="Top DTG Datasets Downloaded (last 30 days)"
                    src="https://datastudio.google.com/embed/reporting/1JhiZYIyIWXcU14gHOiyBdwNWRqxZex_h/page/0bOK" />
                </div>
              </div>
              <div class="grid-row">
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame
                    class="dh-metrics__iframe dh-metrics__iframe-chart"
                    title="Top DTG Datasets Viewed (all time)"
                    src="https://datastudio.google.com/embed/reporting/1PNb5yI7miCOqeDuy4vLIgSC3_4qDyLlo/page/0bOK" />
                </div>
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame
                    class="dh-metrics__iframe dh-metrics__iframe-chart"
                    title="Top DTG Datasets Downloaded (all time)"
                    src="https://datastudio.google.com/embed/reporting/1L6Xu1099L1yfG_4Bbsu5fz2M764Hba8g/page/0bOK" />
                </div>
              </div>
              <div class="grid-row">
                <div class="desktop:grid-col-12 mobile:grid-col-12">
                  <DOTIFrame
                    class="dh-metrics__iframe dh-metrics__iframe-table"
                    title="DTG Dataset Views And Downloads (last 30 days)"
                    src="https://datastudio.google.com/embed/reporting/1tohVI_KySS-TyKQkcIAAhwtqfLnxm7Ir/page/0bOK" />
                </div>
              </div>
              <div class="grid-row">
                <div class="desktop:grid-col-12 mobile:grid-col-12">
                  <DOTIFrame
                    class="dh-metrics__iframe dh-metrics__iframe-table"
                    title="DTG Dataset Views and Downloads (all time)"
                    src="https://datastudio.google.com/embed/reporting/193GyrPXakM4z5c-lk5j9EWWCenitrDnG/page/0bOK" />
                </div>
              </div>
            </div>

            <h2 id="ntl-datset-details">NTL Dataset Details National Transportation Library</h2>
            <div class="grid-container">
              <div class="grid-row">
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame title="Testing title" src="" />
                </div>
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame title="Testing title" src="" />
                </div>
              </div>
            </div>

            <h2 id="sandbox-datasets">Sandbox Datasets</h2>
            <div class="grid-container">
              <div class="grid-row">
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame title="Testing title" src="" />
                </div>
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame title="Testing title" src="" />
                </div>
              </div>
            </div>

            <h2 id="github-repository-views" >DataHub (Microsite) & Sandbox GitHub Repository Views</h2>
            <div class="grid-container">
              <div class="grid-row">
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame title="Testing title" src="" />
                </div>
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame title="Testing title" src="" />
                </div>
              </div>
            </div>

            <h2 id="datahub-usage-metrics">DataHub Usage Metrics</h2>
            <div class="grid-container">
              <div class="grid-row">
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame title="Testing title" src="" />
                </div>
                <div class="desktop:grid-col-6 mobile:grid-col-10">
                  <DOTIFrame title="Testing title" src="" />
                </div>
              </div>
            </div>
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
  methods: {
    moveToTag: function(event,id) {
      event.preventDefault();
      let element = document.getElementById(`${id}`);
      if(element) {
        console.log(id);
        window.scroll(0,0); //resets reference;
        const y = element.getBoundingClientRect().top + window.scrollY;
        console.log(y);
        window.scroll({top: y,behavior: 'smooth'});
      }
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
