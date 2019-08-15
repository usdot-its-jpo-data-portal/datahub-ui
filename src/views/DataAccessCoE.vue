<template>
<div class="dh-data-access-coe__wrapper">
  <main class="usa-layout-docs usa-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <aside id="dh-data-access-coe" class="usa-layout-docs__sidenav sidenav desktop:grid-col-3 dh-data-access-coe_float-menu">
          <nav>
            <ul id="dh-data-access-coe-main-id" :key="refreshCounter" class="usa-sidenav">
              <!-- <li id="dataaccesscoeoverview" class="usa-sidenav__item">
                <router-link id="id-dataaccesscoeoverview" to="/data-access-coe" class="page" :class=" isVisible('dataaccesscoeoverview') ? 'usa-current' : '' ">Overview</router-link>
              </li> -->
              <li id="dataaccesscoe-pl" class="usa-sidenav__item">
                <router-link id="id-dataaccesscoe-pl" to="/data-access-coe" class="page" :class="isVisible('dataaccesscoe-pl')||isVisible('dataaccesscoe-pl-planning')||isVisible('dataaccesscoe-pl-preaward')||isVisible('dataaccesscoe-pl-award')||isVisible('dataaccesscoe-pl-postaward')||isVisible('dataaccesscoe-pl-closeout') ? 'usa-current' : '' ">Community Support</router-link>
                <ul v-if="isVisible('dataaccesscoe-pl')||isVisible('dataaccesscoe-pl-planning')||isVisible('dataaccesscoe-pl-preaward')||isVisible('dataaccesscoe-pl-award')||isVisible('dataaccesscoe-pl-postaward')||isVisible('dataaccesscoe-pl-closeout')" id="ul-dataaccesscoeprojectlifecycle" class="usa-sidenav__sublist">
                  <li class="usa-sidenav__item">
                    <router-link id="id-dataaccesscoe-pl-planning" to="/data-access-coe/project-lifecycle/planning" class="sub-page" :class="isVisible('dataaccesscoe-pl-planning') ? 'usa-current' : '' ">Planning</router-link>
                  </li>
                  <li class="usa-sidenav__item">
                    <router-link id="id-dataaccesscoe-pl-preaward" to="/data-access-coe/project-lifecycle/preaward" class="sub-page" :class="isVisible('dataaccesscoe-pl-preaward') ? 'usa-current' : '' ">Pre-Award</router-link>
                  </li>
                  <li class="usa-sidenav__item">
                    <router-link id="id-dataaccesscoe-pl-award" to="/data-access-coe/project-lifecycle/award" class="sub-page" :class="isVisible('dataaccesscoe-pl-award') ? 'usa-current' : '' ">Award</router-link>
                  </li>
                  <li class="usa-sidenav__item">
                    <router-link id="id-dataaccesscoe-pl-postaward" to="/data-access-coe/project-lifecycle/postaward" class="sub-page" :class="isVisible('dataaccesscoe-pl-postaward') ? 'usa-current' : '' ">Post-Award</router-link>
                  </li>
                  <li class="usa-sidenav__item">
                    <router-link id="id-dataaccesscoe-pl-closeout" to="/data-access-coe/project-lifecycle/closeout" class="sub-page" :class="isVisible('dataaccesscoe-pl-closeout') ? 'usa-current' : '' ">Closeout</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>
        <router-view name="dataaccesscoe" :key="$route.fullPath" class="dh-data-access-coe_float-content"></router-view>
      </div>
    </div>
  </main>
</div>
</template>
<script>
export default {
  name: 'DataAccessCoE',
  data: function() {
    return {
      refreshCounter: 0,
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
    this.sideMenuElement = document.getElementById('dh-data-access-coe');
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
      let topclass = 'dh-data-access-coe_float-menu_top';
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
