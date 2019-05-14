<template>
  <div id="footerInfo" style="padding-top: 20px;">
    <div style="display:inline; font-size:50px; font-weight:100; text-align:center">
      <img src="/images/icons/dot_logo.png" style="height: 30px;margin-right: 3px;" alt="DOT Logo" /> 
      |
      <img src="/images/icons/ITS_JPO.png" style="height: 27px" alt="ITS JPO Logo" /> 
    </div>
    <p style="font-weight: bold;">Questions? Contact Us</p>
    <p id="contactEmail">{{ contact_email }}</p>
  </div>
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
  }
}
</script>
<style lang="scss" scoped>

</style>
