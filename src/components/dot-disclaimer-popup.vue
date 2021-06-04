<template>
  <div id="data-disclaimer" class="data-disclaimer-wrapper" style="display: none;" aria-hidden="true">
      <div id="data-disclaimer_inside-wrapper">
      <h2 id="data-disclaimer_header"><span class="triangle-alert"><i title="warning" alt="warning" class="fas fa-exclamation-triangle"></i></span>Disclaimer <button id="data-disclaimer-close" type="button" class="close" v-on:click="close()" aria-label="Email registration: press to close this dialog."><i class="fas fa-window-close"></i></button></h2>
      <div id="content">
        <div id="content_inner">
          <p>The data discoverable through ITS DataHub is offered as a public service by the U.S. Department of Transportation (U.S. DOT) and is expressly provided “AS IS” and “AS AVAILABLE”.</p>
          <p>No warranty or guarantee is made by the U.S. DOT as to the accuracy, reliability, relevancy, timeliness, utility, quality, availability, or completeness of the data. No active effort has been or will be made to monitor the format and any risks related to the format of the data becoming obsolete. The U.S. DOT assumes no responsibility for errors or omissions found in data discovered through ITS DataHub. The U.S. DOT reserves the right to discontinue availability of content on ITS DataHub at any time and for any reason.</p>
          <p>U.S. DOT disclaims any responsibility or legal liability whatsoever, including payment of any damages of any kind, such as, lost profits, lost savings, or any other incidental or consequential damages. U.S. DOT makes such disclaimer of any and all claims based on its provision of the data, your use or reliance on the data, or on any requests for technical assistance through <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov</a> or the U.S. DOT. The user assumes the entire risk associated with the use or misuse of the data.</p>
          <p>Users should also review any relevant disclaimers found within storage systems used by ITS DataHub and/or datasets discoverable through ITS DataHub.</p>
          <p> If you choose to not accept, you will be unable to access the data discoverable through ITS DataHub. Please contact <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov</a> with any questions or concerns.</p>
        </div>
      </div>
      <div id="data-disclaimer_buttons-wrapper">
        <a id="data-disclaimer_navigate-to-dataset" class="lightcyan-button" v-on:click="close()" href="" target="_blank" rel="noopener noreferrer">Accept &amp; Continue<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
        <p id="data-disclaimer_stay-on-page" v-on:click="close()" role="button" style="">I do NOT accept &mdash; Unable to access data</p>
      </div>
    </div>
  </div>
</template>
<script>
export default  {
    name: 'DOTDataDisclaimerPopup',
    
    mounted: function() {
      this.focus_input();
    },
    methods:{
        close() {
          let overlayElement = document.getElementById("overlay");
          overlayElement.classList.remove("is-visible");
          let popupElement = document.getElementById("data-disclaimer");
          popupElement.setAttribute("style","display: none");
          popupElement.setAttribute("aria-hidden","true");
          let bodyElement = document.getElementById("body-id");
          bodyElement.classList.remove("no-scroll");
        },
        focus_input() {
            let elem = document.querySelector('data-disclaimer_header');
            if (elem) {
                elem.focus();
            }
        }
    }
}
</script>
