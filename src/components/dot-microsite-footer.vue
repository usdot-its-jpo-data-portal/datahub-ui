<template>
  <footer class="usa-footer" role="contentinfo">
    <div class="usa-footer__primary-section">
      <nav class="usa-footer__nav">
        <div class="dh-footer__social-wrapper">
          <div class="dh-footer__social-add">
            <p class="social-share">Share</p>
            <div class="addthis_inline_share_toolbox_yi93"></div>
          </div>
          <div class="dh-footer__social-share">
            <p id="follow_header" class="social-share">Follow</p>
            <a class="usa-social-link dh-follow-us" target="_blank" href="https://www.facebook.com/USDOT/" rel="noopener noreferrer">
              <img src="/images/icons/facebook_follow_svg.svg" class="footer-share-social-icons" alt="Follow us on Facebook">
              <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link_142350.svg" alt>
            </a>
            <a class="usa-social-link dh-follow-us" target="_blank" href="https://twitter.com/USDOT" rel="noopener noreferrer">
              <img src="/images/icons/twitter_follow_svg.svg" class="footer-share-social-icons" alt="Follow us on Twitter">
              <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link_142350.svg" alt>
            </a>
            <a class="usa-social-link dh-follow-us" target="_blank" href="https://www.instagram.com/usdot/?hl=en" rel="noopener noreferrer">
              <img src="/images/icons/instagram_follow_svg.svg" class="footer-share-social-icons" alt="Follow us on Instagram">
              <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link_142350.svg" alt>
            </a>
            <a class="usa-social-link dh-follow-us" target="_blank" href="https://github.com/usdot-its-jpo-data-portal/microsite" rel="noopener noreferrer">
              <img src="/images/icons/github_follow_svg.svg" class="footer-share-social-icons" alt="Follow us on GitHub">
              <img class="usa-footer__primary-link-icon-social" src="/images/icons/external-link_142350.svg" alt>
            </a>
          </div>
        </div>
      </nav>
    </div>

    <div class="usa-footer__secondary-section">
      <div class="grid-container">
        <div class="grid-row grid-gap cdh_usa-footer__secondary-section_inner-wrapper">
          <div class="usa-footer__logo grid-row tablet:grid-col-6 left-column">
            <div class="tablet:grid-col-auto">
              <div class="grid-row grid-gap">
                <div class="grid-col-auto cdh_usa-footer__logo-img-wrapper">
                  <img id="usa-footer__logo-img" class="usa-footer__logo-img" src="/images/usdepartmentoftransportation_white.svg" alt>
                </div>
              </div>
              <hr class="footer-divider" id="footer-divider_top">
              <div class="usa-footer__contact-info grid-row grid-gap">
                <div class="grid-col-auto contact-datahub" id="contact-datahub">
                  <h3 id="dh-footer_contact-us-title" class="usa-footer__contact-heading">Contact ITS DataHub</h3>
                  <address class="usa-footer__address">
                    <div class=" grid-row grid-gap">
                      <div class="grid-col-auto">
                        <a id="dh-footer_contact-us-email" :href="`mailto:${contact_email}`">{{contact_email}}</a>
                        <!-- <div class="dh-footer__version-id">
                          Version: {{versionId}}
                          <span v-if="buildId" ><br>Build: {{buildId}}</span>
                        </div> -->
                      </div>
                    </div>
                  </address>
                </div>

                
              </div>
            </div>
          </div>

          <div class="grid-row tablet:grid-col-6 content right-column email-registration-wrapper">
            <hr class="footer-divider" id="footer-divider_bottom">
            <div class="tablet:grid-col-auto">
            <div v-if="!registerError && valid" class="message">
              {{email_message}}
            </div>
            <div v-if="!valid" class="message-alert">
              <br>{{email_message_invalid_email}}
            </div>
            <div v-if="registerError && valid" class="message-alert">
              {{email_message_alert}}
            </div>
            <div class="controls">
              <input v-model="email" v-bind:class="valid ? 'form-control valid' : 'form-control invalid'" id="input-email-address" aria-describedby="emailHelp" placeholder="Email address" value.two-way="email" v-on:keydown="keyPress">
              <button type="button" class="btn btn-primary" v-on:click="signup()" id="btn_submit-email-address">Sign Up <img src="/images/icons/external-link_ffffff.svg" alt="External link icon"> </button>
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
            
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import TEMPLATE_CATEGORY from '@/data/template_categories.json';
import {
  EMAIL_MESSAGE,
  EMAIL_MESSAGE_ALERT,
  EMAIL_MESSAGE_INVALID_EMAIL
} from '../consts/constants.js';
export default {
  name: 'DOTMicrositeFooter',
  props: {},
  data: function(){
    return {
            valid: true,
            contact_email:"",
            email: '',
            element: '',
            email_message: EMAIL_MESSAGE,
            email_message_alert: EMAIL_MESSAGE_ALERT,
            email_message_invalid_email: EMAIL_MESSAGE_INVALID_EMAIL
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
    },
    isActive: {
            get: function() {return this.active;},
            set: function(val) {this.active = val;}
        },
        registering: {
          get: function() { return this.$store.state.registering; },
          set: function(val) { this.$store.commit('setRegistering', val)}
        },
        registerError: {
          get: function() { return this.$store.state.registerError;},
          set: function(val) {this.$store.commit('setRegisterError', val)}
        },
        registerMessage: {
          get: function() { return this.$store.state.registerMessage; },
          set: function(val) {this.$store.commit('setRegisterMessage', val)}
        }
  },
  watch: {
    registering: function(newValue, oldValue) {
      if (oldValue && !newValue && !this.registerError) {
        this.element.classList.add("registration-complete");
        this.email_message = 'Registration completed.'
        setTimeout(() => {
          this.email="Email address submitted!";
        }, 1500)
      }
    }
  },
  methods:{
        signup() {
            if (this.validate_email()) {
                this.$store.dispatch('registerEmail', this.email);
            } else {
                this.valid = false;
                this.email = '';
                this.focus_input();
            }
        },
        focus_input() {
            let elem = document.querySelector('#input-email-address');
            if (elem) {
                elem.focus();
            }
        },
        validate_email() {
            //do not remove eslint-disable-next-line
            //eslint-disable-next-line  
            let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            this.element = document.getElementById("input-email-address");
            return re.test(this.email);
            
        },
        keyPress(event) {
          if (event && event.key==='Enter') {
            this.signup();
          } else {
            if (!this.valid) {
              this.valid = true;
            }
            if (this.registerError) {
              this.registerError = false;
            }
          }
          return true;
        }
    }
}
</script>
<style lang="scss" scoped>
  input.registration-complete{
          background-color: #CEF2C5;
          font-weight: bold;
          color: #2d2d2d;
  }
</style>
