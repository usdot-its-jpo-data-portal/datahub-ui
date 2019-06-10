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
    <div class="usa-navbar" style="padding-top: 2rem;">
      <div class="usa-logo" id="extended-logo">
        <em class="usa-logo__text"><a href="/" title="Home" aria-label="Home">ITS DataHub</a></em>
      </div>
      <button class="usa-menu-btn">Menu</button>
    </div>
    
    <nav role="navigation" class="usa-nav" id="dh-nav">
      
      <div class="usa-nav__inner"><button class="usa-nav__close"><img src="/images/close.svg" alt="close"></button>
        <ul class="usa-nav__primary usa-accordion">
          <li class="usa-nav__primary-item">
            <router-link class="usa-nav__link" to="/">Home</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <router-link class="usa-nav__link" to="/about">About</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <router-link class="usa-nav__link" to="/resources">Resources</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <router-link class="usa-nav__link" to="/metrics">Metrics</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <router-link class="usa-nav__link" to="/search">Search</router-link>
          </li>
          <li class="usa-nav__primary-item">
            <a class="usa-nav__link" href="https://github.com/usdot-its-jpo-data-portal/microsite" target="_blank"><span>View On GitHub</span></a>
          </li>
        </ul>
        <div class="usa-nav__secondary" style="">
          
          <ul class="usa-nav__secondary-links">
            <li class="usa-nav__secondary-item">
              <a href="https://www.its.dot.gov/" target="_blank">ABOUT ITS JPO</a>
            </li>
            <li class="usa-nav__secondary-item">
              <a href="https://www.transportation.gov/mission/about-us" target="_blank">ABOUT U.S. DOT</a>
            </li>
            <li class="usa-nav__secondary-item">
              <a href="https://www.transportation.gov/briefingroom" target="_blank">U.S. DOT BRIEFING ROOM</a>
            </li>
            <li class="usa-nav__secondary-item">
              <a href="https://www.transportation.gov/our-activities" target="_blank">U.S. DOT ACTIVITIES</a>
            </li>
          </ul>
          <div>
                
                <div id="followus_wrapper">
                    <p id="followus_header">Follow Us</p>
                    <ul class="usa-nav__secondary-links">
                      <li class="usa-nav__secondary-item">
                        <a class="usa-social-link dh-follow-us" target="_blank" href="https://www.facebook.com/USDOT/">
                          <span>Follow us on Facebook</span>
                          <img src="/images/icons/facebook_logo.svg" class="header-social-icons" style="">
                        </a>
                      </li>
                      <li class="usa-nav__secondary-item">
                        <a class="usa-social-link dh-follow-us" target="_blank" href="https://twitter.com/USDOT">
                          <span>Follow us on Twitter</span>
                          <img src="/images/icons/Twitter_Social_Icon_Circle_Color.svg" class="header-social-icons" style="">
                        </a>
                      </li>
                      <li class="usa-nav__secondary-item">
                        <a class="usa-social-link dh-follow-us" target="_blank" href="https://www.instagram.com/usdot/?hl=en">
                          <span>Follow us on GitHub</span>
                          <img src="/images/icons/github_logo.svg" class="header-social-icons" style="">
                        </a>
                      </li>
                    </ul>
                </div>
                <!-- Go to www.addthis.com/dashboard to customize your tools -->
                <div id="addthis_wrapper">
                    <p id="addthis_header">Share</p>
                    <div class="addthis_inline_share_toolbox"></div>
                </div>
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

