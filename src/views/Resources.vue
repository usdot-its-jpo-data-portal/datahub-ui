<template>
<div class="dh-resources__wrapper">
  <main class="usa-layout-docs usa-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <aside id="dh-resources-side-menu" class="usa-layout-docs__sidenav sidenav desktop:grid-col-3 dh-resource-main_float-menu">
          <nav>
            <ul id="dh-resources-main-id" :key="refreshCounter" class="usa-sidenav">
              <li id="resourceslanding" class="usa-sidenav__item">
                <router-link id="id-resources-landing" to="/resources" class="page" :class=" isVisible('resourceslanding') ? 'usa-current' : '' ">General</router-link>
              </li>
              <li id="guidelines" class="usa-sidenav__item">
                <!-- <router-link id="id-guidelines" to="/resources/" :class=" isVisible('guidelines') ? 'usa-current' : '' ">Guidelines</router-link> -->
                <router-link id="id-guidelines" to="/resources/guidelines" class="page" :class=" isVisible('guidelines') ? 'usa-current' : '' ">Guidelines</router-link>
                <ul v-if="isVisible('guidelines')" id="ul-guidelines" class="usa-sidenav__sublist">
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Background-and-Purpose')" class="table-of-contents">Background and Purpose</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Scope')" class="table-of-contents">Scope</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Definitions')" class="table-of-contents">Definitions</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Requirements')" class="table-of-contents">Requirements</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Implementation-Roles-and-Responsibilities')" class="table-of-contents">Implementation Roles and Responsibilities</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'References')" class="table-of-contents">References</a>
                  </li>
                </ul>
              </li>
              <li id="data-managment-id" class="usa-sidenav__item">
                <router-link id="data-management-id" to="/resources/data-management/data-management" class="page" :class="isVisible('datamanagement') || isVisible('preliminarydmp') || isVisible('postawarddmp') || isVisible('templateandinstructions') ? 'usa-current' : '' ">Data Management</router-link>
                <!-- <router-link id="id-data-management" to="/resources/data-management/" class="usa-current">Data Management</router-link> -->
                <ul v-if="isVisible('datamanagement') || isVisible('preliminarydmp') || isVisible('postawarddmp') || isVisible('templateandinstructions') " id="ul-data-management" class="usa-sidenav__sublist">
                  <div v-if="isVisible('datamanagement')"><li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Introduction')" class="table-of-contents">Introduction</a>
                  </li>
                  <!-- <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Scope')" class="table-of-contents">Project Overview</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Definitions')" class="table-of-contents">Data Overview</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Requirements')" class="table-of-contents">Data Stewardship</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Implementation-Roles-and-Responsibilities')" class="table-of-contents">Data Standards</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Implementation-Roles-and-Responsibilities-2')" class="table-of-contents">Glossary</a>
                  </li> -->
                  </div>
                  <li class="usa-sidenav__item sub-page-li">
                    <!-- <a href="#" @click="moveToTag($event,'References')" class="sub-page">Template</a> -->
                    <router-link id="prelim-id" to="/resources/data-management/preliminary-dmp" class="sub-page" :class="isVisible('preliminarydmp') ? 'usa-current' : '' ">Preliminary DMP</router-link>
                    <ul v-if="isVisible('preliminarydmp')" id="ul-guidelines" class="usa-sidenav__sublist">
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
                    <!-- <a href="#" @click="moveToTag($event,'References')" class="sub-page">Template</a> -->
                    <router-link id="post-id" to="/resources/data-management/post-award-dmp" class="sub-page" :class="isVisible('postawarddmp') ? 'usa-current' : '' ">Post-Award DMP</router-link>
                    <ul v-if="isVisible('postawarddmp')" id="ul-guidelines" class="usa-sidenav__sublist">
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
                    <!-- <a href="#" @click="moveToTag($event,'References')" class="sub-page">Template</a> -->
                    <router-link id="data-management-template-id" to="/resources/data-management/template-and-instructions" class="sub-page" :class="isVisible('templateandinstructions') ? 'usa-current' : '' ">Templates &amp; Instructions</router-link>
                  </li>
                </ul>
              </li>
              <li id="data-storage-system" class="usa-sidenav__item">
                <router-link id="id-data-storage-system" to="/resources/data-storage-system" class="page" :class=" isVisible('datastoragesystem') ? 'usa-current' : '' ">Data Storage System</router-link>
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
    // window.scrollTo(0, 240);
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
      if(sy > 250 && this.sideMenuElement) {
        if (cln && !cln.includes(topclass)) {
          cln += ' '+topclass;
          this.sideMenuElement.className = cln;
        }
      } else {
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
