<template>
<div class="dh-resources__wrapper">
  <main class="usa-layout-docs usa-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <aside id="dh-resources-side-menu" class="usa-layout-docs__sidenav sidenav desktop:grid-col-3 dh-resource-main_float-menu">
          <nav>
            <ul id="dh-resources-main-id" :key="refreshCounter" class="usa-sidenav">
              <li id="guidelines" class="usa-sidenav__item">
                <router-link id="id-guidelines" to="/resources/" :class=" isVisible('guidelines') ? 'usa-current' : '' ">Guidelines</router-link>
                <ul v-if="isVisible('guidelines')" id="ul-guidelines" class="usa-sidenav__sublist">
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Background-and-Purpose')">Background and Purpose</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Scope')">Scope</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Definitions')">Definitions</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Requirements')">Requirements</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'Implementation-Roles-and-Responsibilities')">Implementation Roles and Responsibilities</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a href="#" @click="moveToTag($event,'References')">References</a>
                  </li>
                </ul>
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
      let sy = window.scrollY;
      if(sy > 250 && this.sideMenuElement) {
        this.sideMenuElement.classList.add('dh-resource-main_float-menu_top');
      } else {
        this.sideMenuElement.classList.remove('dh-resource-main_float-menu_top');
      }
    }
  }
}
</script>
