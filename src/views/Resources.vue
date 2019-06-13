<template>
<div class="dh-resources__wrapper">
  <main class="usa-layout-docs usa-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <aside class="usa-layout-docs__sidenav sidenav desktop:grid-col-3">
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
        <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
          <router-view name="resources" :key="$route.fullPath"></router-view>
        </div>
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
      id:''
    }
  },
  computed: {
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
    }
  }
}
</script>
