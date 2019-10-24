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
      <div class="message">
        Join our mailing list! Stay up to date on new features and repositories!
      </div>
      <div class="controls">
        <input v-model="email" v-bind:class="valid ? 'form-control valid' : 'form-control invalid'" id="input-email-address" aria-describedby="emailHelp" placeholder="Email address" value.two-way="email">
        <button type="button" class="btn btn-primary" v-on:click="signup()">Sign Up <img src="/images/icons/external-link_ffffff.svg" alt="External link icon"> </button>
      </div>
    </div>

  </div>
</template>
<script>
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
            msseconds: 4500
        }
    },
    computed: {
        isActive: {
            get: function() {return this.active;},
            set: function(val) {this.active = val;}
        }
    },
    mounted: function() {
            this.focus_input();
            this.timer_timeout();
    },
    
    methods:{
        signup() {
            if (this.validate_email()) {
                // TODO: Insert backend call here 
                document.querySelector("#email-registration").style.display="none";
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

                    callback(self);
                }
            }, 100);
        },

        fadeInEffect(self, id, callback) {
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
                    callback(self);
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

                        self.timer_timeout();
                    }, self.msseconds);
                });                
            });
        }
    }
}
</script>