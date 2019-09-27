<template>
  <footer class="usa-footer" role="contentinfo">
    <div class="usa-footer__primary-section">
      <nav class="usa-footer__nav">
        <!--<ul class="add-list-reset grid-row grid-gap">
          <li class="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
            <a id="dh-footer_sandbox-link" class="usa-footer__primary-link" href="http://usdot-its-cvpilot-public-data.s3.amazonaws.com/index.html" target="_blank">
              Sandbox Data
              <img class="usa-footer__primary-link-icon" src="/images/icons/external-link.svg" alt>
            </a>
          </li>
          <li class="mobile-lg:grid-col-6 desktop:grid-col-3 usa-footer__primary-content" id="dh-footer_sdc-link_li">
            <a id="dh-footer_sdc-link" class="usa-footer__primary-link" href="https://its.dot.gov/data/secure/index.html" target="_blank">
              Secure Data Commons
              <img class="usa-footer__primary-link-icon" src="/images/icons/external-tabs.svg" alt>
            </a>
          </li>
          <li class="mobile-lg:grid-col-4 desktop:grid-col-2 usa-footer__primary-content">
            <a id="dh-footer_codehub-link" class="usa-footer__primary-link" href="https://its.dot.gov/code/ " target="_blank">
              CodeHub Beta
              <img class="usa-footer__primary-link-icon" src="/images/icons/external-tabs.svg" alt>
            </a>
          </li>
          <li class="mobile-lg:grid-col-4 desktop:grid-col-3 usa-footer__primary-content">
            <a id="dh-footer_visualizations-link" class="usa-footer__primary-link" href="/visualizations/index.html" target="_blank">
              Data Visualizations
              <img class="usa-footer__primary-link-icon" src="/images/icons/external-tabs.svg" alt>
            </a>
          </li>
        </ul>-->
        <div class="dh-footer__social-wrapper">
          <div class="dh-footer__social-add">
            <p class="social-share">Share</p>
            <div class="addthis_inline_share_toolbox_yi93"></div>
          </div>
          <div class="dh-footer__social-share">
            <p id="follow_header" class="social-share">Follow</p>
            <a class="usa-social-link dh-follow-us" target="_blank" href="https://www.facebook.com/USDOT/" rel="noopener noreferrer">
                <!--<span>Follow us on Facebook</span>-->
              <img src="/images/icons/facebook_follow_svg.svg" class="footer-share-social-icons" alt="Follow us on Facebook">
              <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link_142350.svg" alt>
            </a>
            <a class="usa-social-link dh-follow-us" target="_blank" href="https://twitter.com/USDOT" rel="noopener noreferrer">
              <!--<span>Follow us on Twitter</span>-->
              <img src="/images/icons/twitter_follow_svg.svg" class="footer-share-social-icons" alt="Follow us on Twitter">
              <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link_142350.svg" alt>
            </a>
            <a class="usa-social-link dh-follow-us" target="_blank" href="https://www.instagram.com/usdot/?hl=en" rel="noopener noreferrer">
              <!--<span>Follow us on GitHub</span>-->
              <img src="/images/icons/instagram_follow_svg.svg" class="footer-share-social-icons" alt="Follow us on Instagram">
              <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link_142350.svg" alt>
            </a>
            <a class="usa-social-link dh-follow-us" target="_blank" href="https://github.com/usdot-its-jpo-data-portal/microsite" rel="noopener noreferrer">
              <!--<span>Follow us on GitHub</span>-->
              <img src="/images/icons/github_follow_svg.svg" class="footer-share-social-icons" alt="Follow us on GitHub">
              <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link_142350.svg" alt>
            </a>
          </div>
        </div>
      </nav>
    </div>

    <div class="usa-footer__secondary-section">
      <div class="grid-container">
        <div class="grid-row grid-gap">
          <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
            <div class="mobile-lg:grid-col-auto">
              <div class="grid-row grid-gap">
                <div class="grid-col-auto">
                  <img id="usa-footer__logo-img" class="usa-footer__logo-img" src="/images/icons/dot_logo.png" alt>
                </div>
              </div>
              <div class="grid-row grid-gap">
                <div class="grid-col-auto">
                  <img id="usa-footer__logo-img-its" class="usa-footer__logo-img-its" src="/images/icons/its_jpo_footer.svg" alt>
                </div>
              </div>
            </div>
          </div>
          <div class="usa-footer__contact-links mobile-lg:grid-col-6">
            <div class="usa-footer__social-links grid-row grid-gap-1">
              <div class="grid-col-auto">
                <a id="dh-footer_social-facebook" class="usa-social-link usa-social-link--facebook" href="https://www.facebook.com/USDOT/" target="_blank" rel="noopener noreferrer">
                  <span>Facebook</span>
                  <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link-alt-hover.svg" alt>
                </a>
              </div>
              <div class="grid-col-auto">
                <a id="dh-footer_social-twitter" class="usa-social-link usa-social-link--twitter" href="https://twitter.com/USDOT" target="_blank" rel="noopener noreferrer">
                  <span>Twitter</span>
                  <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link_142350.svg" alt>
                </a>
              </div>
              <div class="grid-col-auto">
                <a id="dh-footer_social-instagram" class="usa-social-link usa-social-link--instagram" href=" https://www.instagram.com/usdot/?hl=en" target="_blank">
                  <span>Instagram</span>
                  <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link-alt-hover.svg" alt>
                </a>
              </div>
            </div>
            <div class="grid-col-auto contact-datahub" id="contact-datahub">
            <h3 id="dh-footer_contact-us-title" class="usa-footer__contact-heading">Contact ITS DataHub</h3>
            <address class="usa-footer__address">
              <div class="usa-footer__contact-info grid-row grid-gap">
                <div class="grid-col-auto">
                  <a id="dh-footer_contact-us-email" href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov</a>
                  <div class="dh-footer__version-id">
                    Version: {{versionId}}
                    <span v-if="buildId" ><br>Build: {{buildId}}</span>
                  </div>
                </div>
              </div>
            </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import TEMPLATE_CATEGORY from '@/data/template_categories.json';

export default {
  name: 'DOTMicrositeFooter',
  props: {},
  data: function(){
    return{
        contact_email:""
    }
  },
  created: function(){
    this.contact_email = TEMPLATE_CATEGORY.contact_email;
  },
  computed: {
    versionId : {
      get: function() {
        if(!this.$store.state.version)
          return null;
        let parts = this.$store.state.version.split('.');
        if(parts.length != 3)
          return this.$store.state.version;

        return parts[0]+'.'+parts[1];
      },
      set: function(){}
    },
    buildId : {
      get: function() {
        if(!this.$store.state.version)
          return null;
        let parts = this.$store.state.version.split('.');
        if(parts.length != 3)
          return null;

        if(parts[2] === "0")
          return null;

        return parts[2];

      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
