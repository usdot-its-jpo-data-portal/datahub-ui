<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <h1>Community Support</h1> <!--comment!-->
    <p>
      The Data Access Community of Excellence (CoE) is one of several Intelligent Transportation Systems (ITS) Joint Program Office (JPO) CoEs created to promote best practices across the ITS JPO to maximize utility of ITS JPO-sponsored projects.
    </p>
    <p>
      The Data Access CoE aims to maximize access to ITS JPO-funded research data and promote the following objectives:
    </p>
    <ul>
      <li>
        Promote data access and use across the ITS research portfolio
      </li>
      <li>
        Operationalize existing data access policies and systems
      </li>
      <li>
        Pilot best practices, standards, templates, & data storage & discovery capabilities within ITS JPO that can be scaled Department-wide
      </li>
    </ul>
    <p>
      This page contains information on how the Data Access CoE can support your project team. We base this support of the project lifecycle. Scroll across each part of the lifecycle and click on the phase to get more information.
    </p>

    <DOTProjectLifecycleImg height="550" width="550" active=""/>

  </div>
</template>
<script>
import DOTProjectLifecycleImg from '@/components/dot-project-lifecycle-img.vue';
export default {
  name: 'DataAccessCoEProjectLifeCycle',
  components: {
    DOTProjectLifecycleImg
  },
  data: function(){
    return {
      tooltip_planning: 'The Planning phase consists of planning for a project or procurement.',
      tooltip_preaward: 'The Pre-Award phase consists of preparing for responses to procurement requests and the start of a project.',
      tooltip_award: 'The Award phase consists of the phase after the award of a procurement to a data provider and the start of the project.',
      tooltip_postaward: 'The Post-Award phase consists of the period after initial award where the project grows and starts producing data.',
      tooltip_closeout: 'The Closeout phase consists of the end of the project and ensuring data is properly retained.'
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
