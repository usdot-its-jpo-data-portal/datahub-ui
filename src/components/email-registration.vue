<template>
  <div id="email-registration" v-if="isActive" class="email-registration-wrapper">
    <div class="header-controls">
      <button id="email-registration-close" type="button" class="close" v-on:click="close()" aria-label="Email registration: press to close this dialog."><span aria-hidden="true"></span><img src="/images/close.svg" alt="close"></button>
    </div>
    <div class="content">
      <div class="header-text">
        <span class="title1">Want more:&nbsp;</span>
        <span id="keyword" class="title2">{{ word }}</span>
        <span class="title1">?</span>
      </div>
      <div v-if="!registerError && valid" class="message">
        {{email_message}}
      </div>
      <div v-if="!valid" class="message-alert">
        {{email_message_invalid_email}}
      </div>
      <div v-if="registerError && valid" class="message-alert">
        {{email_message_alert}}
      </div>
      <div class="controls">
        <input v-model="email" v-bind:class="valid ? 'form-control valid' : 'form-control invalid'" id="input-email-address" aria-describedby="emailHelp" placeholder="Email address" value.two-way="email" v-on:keydown="keyPress">
        <button type="button" class="btn btn-primary" v-on:click="signup()">Sign Up <img src="/images/icons/external-link_ffffff.svg" alt="External link icon"> </button>
      </div>
    </div>

  </div>
</template>
<script>
import {
  EMAIL_MESSAGE,
  EMAIL_MESSAGE_ALERT,
  EMAIL_MESSAGE_INVALID_EMAIL
} from '../consts/constants.js'
export default  {
    name: 'DOTEmailRegistration',
    props: ['active'],
    data: function(){
        let datahubwords = ['ITS Datasets', 'Features', 'Visualizations'];
        return {
            valid: true,
            email: '',
            timer: null,
            timer_fadein: null,
            timer_fadeout: null,
            words: datahubwords,
            word_index: null,
            word: datahubwords[0],
            msseconds: 4500,
            email_message: EMAIL_MESSAGE,
            email_message_alert: EMAIL_MESSAGE_ALERT,
            email_message_invalid_email: EMAIL_MESSAGE_INVALID_EMAIL
        }
    },
    computed: {
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
    mounted: function() {
            this.focus_input();
            this.timer_timeout();
    },
    watch: {
      registering: function(newValue, oldValue) {
        if (oldValue && !newValue && !this.registerError) {
          this.email_message = 'Registration completed.'
          setTimeout(() => {
            this.close();
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
        close() {
            document.querySelector("#email-registration").style.display="none";
            if(this.timer_fadeout){
                clearInterval(this.timer_fadeout);
            }
            if(this.timer_fadein){
                clearInterval(this.timer_fadein);
            }
            if(this.timer){
                clearTimeout(this.timer);
            }
            this.$store.commit('setEmailRegistrationActive', false);
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
            return re.test(this.email);
        },

        fadeOutEffect(self, id, callback) {
            if (this.$router.currentRoute.name != 'home' || !this.$store.state.emailRegistrationActive) {
              return;
            }
            let fadeTarget = document.querySelector(id);
            if(self.timer_fadeout){
                clearInterval(self.timer_fadeout);
            }
            self.timer_fadeout = setInterval(function () {
                if (!fadeTarget.style.opacity) {
                    fadeTarget.style.opacity = 1;
                }
                if (fadeTarget.style.opacity > 0) {
                    fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) - 0.1;
                } else {
                    clearInterval(self.timer_fadeout);
                    if (self.isActive) {
                      callback(self);
                    }
                }
            }, 100);
        },

        fadeInEffect(self, id, callback) {
            if (this.$router.currentRoute.name != 'home' || !this.$store.state.emailRegistrationActive) {
              return;
            }
            let fadeTarget = document.querySelector(id);
            if(self.timer_fadein){
                clearInterval(self.timer_fadein);
            }
            self.timer_fadein = setInterval(function () {
                if (!fadeTarget.style.opacity) {
                    fadeTarget.style.opacity = 0;
                }
                if (fadeTarget.style.opacity <= 1) {
                    fadeTarget.style.opacity = parseFloat(fadeTarget.style.opacity) + 0.1;
                } else {
                    clearInterval(self.timer_fadein);
                    if (self.isActive) {
                      callback(self);
                    }
                }
            }, 100);
        },

        timer_timeout() {
            this.fadeOutEffect(this, "#keyword", (self) => {
                self.word_index ++;
                if (!self.word_index || (self.word_index >= self.words.length)) {
                    self.word_index = 0;
                }
                self.word = self.words[self.word_index];
                self.fadeInEffect(self, "#keyword", (self) => {
                    if (self.timer) {
                        clearTimeout(self.timer);
                    }
                    self.timer = setTimeout( () => {
                      if (self.isActive) {
                        self.timer_timeout();
                      }
                    }, self.msseconds);
                });
            });
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