<template>
<div class="dh-resources__wrapper">
  <main class="usa-layout-docs usa-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <aside id="dh-resources-side-menu" class="usa-layout-docs__sidenav sidenav desktop:grid-col-3 dh-resource-main_float-menu">
          <nav>
            <ul id="dh-resources-main-id" :key="refreshCounter" class="usa-sidenav">
              <li id="resourceslanding" class="usa-sidenav__item">
                <router-link id="id-resources-landing" to="/resources" class="page" :class=" isVisible('resourceslanding') ? 'usa-current' : '' ">Overview</router-link>
              </li>
              <li id="guidelines" class="usa-sidenav__item" :class=" isVisible('guidelines') ? 'usa-current_left-menu' : '' ">
                <router-link id="id-guidelines" to="/resources/guidelines" class="page" :class=" isVisible('guidelines') || isVisible('guidelinestemplatesguides') ? 'usa-current' : '' ">Data Access Guidelines</router-link>
                <ul v-if="isVisible('guidelines') || isVisible('guidelinestemplatesguides')" id="ul-guidelines" class="usa-sidenav__sublist">
                  <div v-if="isVisible('guidelines')">
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Background-and-Purpose')" class="table-of-contents">Background & Purpose</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Scope')" class="table-of-contents">Scope</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Audience')" class="table-of-contents">Audience</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Access')" class="table-of-contents">Access</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Rights-and-Ownership')" class="table-of-contents">Rights & Ownership</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Storage-and-Retention')" class="table-of-contents">Storage & Retention</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Standards')" class="table-of-contents">Standards</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Security-and-Privacy')" class="table-of-contents">Security & Privacy</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Documentation')" class="table-of-contents">Documentation</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Implementation-Roles-and-Responsibilities')" class="table-of-contents">Implementation Roles & Responsibilities</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Definitions')" class="table-of-contents">Definitions</a>
                    </li>
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'References')" class="table-of-contents">References</a>
                    </li>
                  </div>
                  <li class="usa-sidenav__item sub-page-li">
                    <router-link id="guidelines-templates-guides-id" to="/resources/guidelines-templates-guides" class="sub-page" :class="isVisible('guidelinestemplatesguides') ? 'usa-current' : '' ">Templates & Guides</router-link>
                  </li>
                </ul>
              </li>
              <li id="data-managment-id" class="usa-sidenav__item">
                <router-link id="data-management-id" to="/resources/data-management/data-management" class="page" :class="isVisible('datamanagement') || isVisible('preliminarydmp') || isVisible('postawarddmp') || isVisible('templateandinstructions') ? 'usa-current' : '' ">Data Management</router-link>
                <ul v-if="isVisible('datamanagement') || isVisible('preliminarydmp') || isVisible('postawarddmp') || isVisible('templateandinstructions') " id="ul-data-management" class="usa-sidenav__sublist">
                  <div v-if="isVisible('datamanagement')">
                    <li class="usa-sidenav__item">
                      <a href="#" @click="moveToTag($event,'Introduction')" class="table-of-contents">Introduction</a>
                    </li>
                  </div>
                  <li class="usa-sidenav__item sub-page-li">
                    <router-link id="prelim-id" to="/resources/data-management/preliminary-dmp" class="sub-page" :class="isVisible('preliminarydmp') ? 'usa-current' : '' ">Preliminary DMP</router-link>
                    <ul v-if="isVisible('preliminarydmp')" id="ul-data-management-preliminary-dmp" class="usa-sidenav__sublist">
                      <li class="usa-sidenav__item"> 
                        <a href="#" @click="moveToTag($event,'prelim-introduction')" class="table-of-contents">Introduction</a>
                      </li>
                      <li class="usa-sidenav__item">
                        <a href="#" @click="moveToTag($event,'prelim-project-overview')" class="table-of-contents">Project Overview</a>
                      </li>
                      <li class="usa-sidenav__item">
                        <a href="#" @click="moveToTag($event,'prelim-data-overview')" class="table-of-contents">Data Overview</a>
                      </li>
                      <li class="usa-sidenav__item">
                        <a href="#" @click="moveToTag($event,'prelim-data-stewardship')" class="table-of-contents">Data Stewardship</a>
                      </li>
                    </ul>
                  </li>
                  <li class="usa-sidenav__item sub-page-li">
                    <router-link id="post-id" to="/resources/data-management/post-award-dmp" class="sub-page" :class="isVisible('postawarddmp') ? 'usa-current' : '' ">Post-Award DMP</router-link>
                    <ul v-if="isVisible('postawarddmp')" id="ul-data-management-post-award-dmp" class="usa-sidenav__sublist">
                      <li class="usa-sidenav__item">
                        <a href="#" @click="moveToTag($event,'post-introduction')" class="table-of-contents">Introduction</a>
                      </li>
                      <li class="usa-sidenav__item">
                        <a href="#" @click="moveToTag($event,'post-project-overview')" class="table-of-contents">Project Overview</a>
                      </li>
                      <li class="usa-sidenav__item">
                        <a href="#" @click="moveToTag($event,'post-data-overview')" class="table-of-contents">Data Overview</a>
                      </li>
                      <li class="usa-sidenav__item">
                        <a href="#" @click="moveToTag($event,'post-data-stewardship')" class="table-of-contents">Data Stewardship</a>
                      </li>
                      <li class="usa-sidenav__item">
                        <a href="#" @click="moveToTag($event,'post-data-standards')" class="table-of-contents">Data Standards</a>
                      </li>
                      <li class="usa-sidenav__item">
                        <a href="#" @click="moveToTag($event,'post-glossary')" class="table-of-contents">Glossary</a>
                      </li>
                    </ul>
                  </li>
                  <li class="usa-sidenav__item sub-page-li">
                    <router-link id="data-management-template-id" to="/resources/data-management/template-and-instructions" class="sub-page" :class="isVisible('templateandinstructions') ? 'usa-current' : '' ">Templates &amp; Instructions</router-link>
                  </li>
                </ul>
              </li>
              <li id="data-storage-system" class="usa-sidenav__item">
                <router-link id="id-data-storage-system" to="/resources/data-storage-system" class="page" :class=" isVisible('datastoragesystem') ? 'usa-current' : '' ">Data Storage Systems</router-link>
                <ul v-if="isVisible('datastoragesystem')" id="ul-datastoragesystem" class="usa-sidenav__sublist">
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'datastoragesystems-purpose')" class="table-of-contents">Purpose</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'datastoragesystems-datastoragesystemdecisiontree')" class="table-of-contents">Data Storage System Decision Tree</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'datastoragesystems-decisionpoints')" class="table-of-contents">Decision Points</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'datastoragesystems-datastoragesystems')" class="table-of-contents">Data Storage Systems</a>
                  </li>
                </ul>
              </li>
              <li id="faqs" class="usa-sidenav__item">
                <router-link id="id-faqs" to="/resources/data-management/faqs" class="page" :class=" isVisible('faqs') ? 'usa-current' : '' ">FAQs</router-link>
              </li>
              <li id="registration" class="usa-sidenav__item">
                <router-link id="id-registration" to="/resources/data-registration" class="page" :class=" isVisible('data-registration') ? 'usa-current' : '' ">Data Registration</router-link>
              </li>
              <li id="metrics" class="usa-sidenav__item">
                <router-link id="id-metrics" to="/resources/metrics" class="page" :class=" isVisible('metrics') ? 'usa-current' : '' ">Metrics</router-link>
                <ul v-if="isVisible('metrics')" class="usa-sidenav__sublist">
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event, 'dataset-highlights')" class="table-of-contents">Dataset Highlights</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event, 'dtg-dataset-details')" class="table-of-contents">DTG Dataset Details data.transportation.gov</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event, 'ntl-datset-details')" class="table-of-contents">NTL Dataset Details National Transportation Library</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event, 'sandbox-datasets')" class="table-of-contents">Sandbox Datasets</a>
                  </li>
                </ul>
              </li>
              <li id="additional-resources" class="usa-sidenav__item">
                <router-link id="id-additional-resources" to="/resources/data-management/additional-resources" class="page" :class=" isVisible('additional-resources') ? 'usa-current' : '' ">Additional Resources</router-link>
              </li>
            </ul>
          </nav>
        </aside>
          <router-view name="resources" :key="$route.fullPath" class="dh-resource-main_float-content"></router-view>
      </div>
    </div>
  </main>

</div>

</template>
<script>
export default {
  name: 'Resources',
  data: function() {
    return {
      refreshCounter: 0,
      currentId: 'ul-jupiter',
      id:'',
      sideMenuElement: null
    }
  },
  computed: {
  },
  created : function(){
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted: function(){
    this.sideMenuElement = document.getElementById('dh-resources-side-menu');
  },
  destroyed: function(){
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    isVisible: function(id) {
      return this.$router.currentRoute.name == id;
    },
    moveToTag: function(event,id) {
      event.preventDefault();
      let element = document.getElementById(`${id}`);
      if(element) {
        // due to support IE11 where scrollY is not available
        let yOff = window.scrollY ? window.scrollY : window.pageYOffset;
        const y = element.getBoundingClientRect().top + yOff;
        window.scrollTo(0, y);
      }
    },
    handleScroll: function() {
      // handling scroll position to support IE11
      let sy = window.scrollY ? window.scrollY : window.pageYOffset;
      let cln = this.sideMenuElement.className;
      let topclass = 'dh-resource-main_float-menu_top';
      // handling className instead of classList to support IE11

      
      let currentFooterBoundingClientRect = document.getElementById("ch-footer").getBoundingClientRect();
      let footerTopLocationInWindow = currentFooterBoundingClientRect["top"];
      
      let asideElement = document.getElementById("dh-resources-side-menu");
      let asideBoundingClientRect = asideElement.getBoundingClientRect();
      let asideBottomLocationInWindow = asideBoundingClientRect["bottom"];

      let desiredSpaceBetweenAsideAndFooter = 30;
      let bufferBetweenAsideCssClassSwitching = desiredSpaceBetweenAsideAndFooter + 250;
      let viewportHeight = window.innerHeight;
      let valueToMoveAsideUp = 0;
      
      if(sy > 250){
        if(this.sideMenuElement && (footerTopLocationInWindow - asideBottomLocationInWindow > bufferBetweenAsideCssClassSwitching)) {
          if (cln && !cln.includes(topclass)) {
            cln += ' '+topclass;
            this.sideMenuElement.className = cln;
            asideElement.style.top = "";
          }
        }
        if(this.sideMenuElement && (footerTopLocationInWindow - asideBottomLocationInWindow <= desiredSpaceBetweenAsideAndFooter)){
          if (cln && cln.includes(topclass)) {
            let x = cln.indexOf(topclass);
            if(x>=0) {
              let v1 = cln.substring(0, x-1);
              let v2 = cln.substring(x+topclass.length, cln.length);
              this.sideMenuElement.className = v1+v2;
            }
          }
          viewportHeight = window.innerHeight;
          valueToMoveAsideUp = viewportHeight - footerTopLocationInWindow;
          asideElement.style.top = "-" + valueToMoveAsideUp + "px";
        }
      }
      else {
        if (cln && cln.includes(topclass)) {
          let x = cln.indexOf(topclass);
          if(x>=0) {
            let v1 = cln.substring(0, x-1);
            let v2 = cln.substring(x+topclass.length, cln.length);
            this.sideMenuElement.className = v1+v2;
          }
        }
      }
    }
  }
}
</script>
