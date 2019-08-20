<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <h1>Community Support</h1> <!--comment!-->
    <p>
      The Data Access Center of Excellence (CoE) is one of several Intelligent Transportation Systems (ITS) Joint Program Office (JPO) CoEs created as a community to promote best practices across the ITS JPO in order to maximize utility of ITS JPO-sponsored projects.
    </p>
    <p>
      The Data Access CoE aims to achieve this boarder by executing the following objectives for data access:
    </p>
    <ul>
      <li>
        Promoting data access and use across the ITS research portfolio 
      </li>
      <li>
        Piloting best practices, standards, templates, and data storage & discovery capabilities within ITS JPO that can be scaled Department-wide
      </li>
    </ul>
    <p>
      This page contains information on how the Data Access CoE can support your project team. We organize this support around the project lifecycle. Scroll across each part of the lifecycle below and click on each phase to get more information on the resources and services this community can provide Program/Project Managers and Data Providers.
    </p>

    <DOTProjectLifecycleImg height="550" width="550" active=""/>

  </div>
</template>
<script>
import DOTProjectLifecycleImg from '@/components/dot-project-lifecycle-img.vue';
import {
  COE_TOOLTIP_PLANNING,
  COE_TOOLTIP_PREAWARD,
  COE_TOOLTIP_AWARD,
  COE_TOOLTIP_POSTAWARD,
  COE_TOOLTIP_CLOSEOUT
} from '@/consts/constants.js';

export default {
  name: 'DataAccessCoEProjectLifeCycle',
  components: {
    DOTProjectLifecycleImg
  },
  data: function(){
    return {
      tooltip_planning: COE_TOOLTIP_PLANNING,
      tooltip_preaward: COE_TOOLTIP_PREAWARD,
      tooltip_award: COE_TOOLTIP_AWARD,
      tooltip_postaward: COE_TOOLTIP_POSTAWARD,
      tooltip_closeout: COE_TOOLTIP_CLOSEOUT
    }
  },
  methods: {
    ProjectLifecycleClick: function(event) {
      let id = event.target.id;
      switch(id){
        case 'planning-group':
        case 'planning-rect':
        case 'planning-tspan': {
          this.$router.push({path: '/data-access-coe/project-lifecycle/planning'});
          break;
        }
        case 'preaward-group':
        case 'preaward-rect':
        case 'preaward-tspan': {
          this.$router.push({path: '/data-access-coe/project-lifecycle/preaward'});
          break;
        }
        case 'award-group':
        case 'award-rect':
        case 'award-tspan': {
          this.$router.push({path: '/data-access-coe/project-lifecycle/award'});
          break;
        }
        case 'postaward-group':
        case 'postaward-rect':
        case 'postaward-tspan': {
          this.$router.push({path: '/data-access-coe/project-lifecycle/postaward'});
          break;
        }
        case 'closeout-group':
        case 'closeout-rect':
        case 'closeout-tspan': {
          this.$router.push({path: '/data-access-coe/project-lifecycle/closeout'});
          break;
        }
        default: return;
      }
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
<style lang="scss" scoped>
  .dh-listtype__upperalpha {
    list-style-type: upper-alpha;
    font-weight: bold;
  }
  a {
    word-wrap: break-word;
  }
</style>
