<template>
<div>
  <a class="usa-skipnav" href="#main-content">Skip to main content</a>
  <div class="usa-banner site-banner">
    <div class="usa-accordion">
      <header class="usa-banner__header">
        <div class="usa-banner__inner">
          <div class="grid-col-auto">
            <img class="usa-banner__header-flag" src="/images/us_flag_small.png" alt="U.S. flag">
          </div>
          <div class="grid-col-fill tablet:grid-col-auto">
            <p class="usa-banner__header-text">An official website of the United States government</p>
            <p class="usa-banner__header-action" aria-hidden="true">Here’s how you know</p>
          </div>
          <button
            class="usa-accordion__button usa-banner__button"
            aria-expanded="false"
            aria-controls="gov-banner">
            <span class="usa-banner__button-text">Here’s how you know</span>
          </button>
        </div>
      </header>
      <div class="usa-banner__content usa-accordion__content" id="gov-banner">
        <div class="grid-row grid-gap-lg">
          <div class="usa-banner__guidance tablet:grid-col-6">
            <img
              class="usa-banner__icon usa-media-block__img"
              src="/images/icons/icon-dot-gov.svg"
              alt="Dot gov">
            <div class="usa-media-block__body">
              <p>
                <strong>The .gov means it’s official.</strong>
                <br>Federal government websites often end in .gov or .mil. Before sharing sensitive information,
                make sure you’re on a federal government site.
              </p>
            </div>
          </div>
          <div class="usa-banner__guidance tablet:grid-col-6">
            <img
              class="usa-banner__icon usa-media-block__img"
              src="/images/icons/icon-https.svg"
              alt="Https">
            <div class="usa-media-block__body">
              <p>
                <strong>The site is secure.</strong>
                <br>The
                <strong>https://</strong> ensures that you are connecting to the official website and
                that any information you provide is encrypted and transmitted securely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="usa-overlay"></div>
  <header class="usa-header usa-header--extended" role="banner">
    <div id="nav_dot_banner" class="usa-banner__header">
      <div class="usa-banner__inner">
        <a style="background: none" href="https://transportation.gov">
          <img id="dot_logo" src="/images/dot_logo.png" style="" alt="Department of Transportation logo">
        </a>
      </div>
    </div>
    <div class="usa-navbar">
      <div class="usa-logo" id="extended-logo">
        <em class="usa-logo__text">
          <a href="/" title="Home" aria-label="Home">
            ITS DataHub
            <div class="dh-logo__text-subtitle">Intelligent Transportation Systems</div>
          </a>
        </em>
      </div>
      <button class="usa-menu-btn" aria-controls="dh-nav">Menu</button>
    </div>
    
    <nav role="navigation" class="usa-nav" id="dh-nav">
      
      <div class="usa-nav__inner">
        <button class="usa-nav__close">
          <img src="/images/close.svg" alt="close">
        </button>
        <ul class="usa-nav__primary usa-accordion">
          <li class="usa-nav__primary-item">
            <router-link aria-controls="dh-nav1" to="/" exact-active-class="router-link-exact-active" exact>Home</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <router-link aria-controls="dh-nav2" to="/about" active-class="router-link-active">About</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <router-link to="/resources" active-class="router-link-active">Resources</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <router-link to="/metrics" active-class="router-link-active">Metrics</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <router-link to="/data-access-coe" active-class="router-link-active">Community</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <router-link to="/search" active-class="router-link-active">Search</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <a href="https://github.com/usdot-its-jpo-data-portal/microsite" target="_blank" rel="noopener noreferrer">
              <span>View On GitHub</span>
              <img class="usa-header__primary-link-icon-social" src="/images/icons/external-link_142350.svg" alt>
            </a>
            
          </li>
        </ul>
        <div class="usa-nav__secondary" style="">
          <div class="dh-header__secondary-links">
            <ul class="usa-nav__secondary-links">
              <li class="usa-nav__secondary-item">
                <a href="https://www.its.dot.gov/" target="_blank" rel="noopener noreferrer">ABOUT ITS JPO</a>
              </li>
              <li class="usa-nav__secondary-item">
                <a href="https://www.transportation.gov/mission/about-us" target="_blank" rel="noopener noreferrer">ABOUT U.S. DOT</a>
              </li>
              <li class="usa-nav__secondary-item">
                <a href="https://www.transportation.gov/briefingroom" target="_blank" rel="noopener noreferrer">U.S. DOT BRIEFING ROOM</a>
              </li>
              <li class="usa-nav__secondary-item">
                <a href="https://www.transportation.gov/our-activities" target="_blank" rel="noopener noreferrer">U.S. DOT ACTIVITIES</a>
              </li>
            </ul>
          </div>
          
            
        </div>
      </div>
    </nav>
  </header>
</div>
</template>

<script>
export default {
  name: "DOTHeader",
  props: {}
};
</script>

<style scoped lang="scss">
</style>

