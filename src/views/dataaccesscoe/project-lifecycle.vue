<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <h1>Project Lifecycle</h1> <!--comment!-->
    <p>
      This page contains information on how the Data Access CoE can support your project team. We base this support of the project lifecycle. Scroll across each part of the lifecycle and click on the phase to get more information.
    </p>

    <DOTProjectLifecycleImg height="550" width="550" active=""/>
]
    <p>
      <strong id="Planning">Planning</strong>: {{tooltip_planning}} During this phase, the Data Access CoE supports project managers and data providers by:
    </p>
    <ul>
      <li>
        Advising on data access requirements clauses for Notice of Funding Opportunities (NOFOs), Requests for Proposals (RFPs) and internal ITS JPO-sponsored projects
      </li>
      <li>
        Determining applicability for data access requirements
      </li>
      <li>
        Providing templates to begin data management early on (e.g. preliminary DMPs)
      </li>
    </ul>
    <p>
      <strong id="Pre-Award">Pre-Award</strong>: {{tooltip_preaward}} During this phase, the Data Access CoE supports project managers and data providers by:
    </p>
    <ul>
      <li>
        Evaluating preliminary DMPs
      </li>
      <li>
        Clarifying data sharing & data rights agreements
      </li>
      <li>
        Evaluating proposed data management budgets
      </li>
    </ul>
    <p>
      <strong id="Award">Award</strong>: {{tooltip_award}} During this phase, the Data Access CoE supports project managers and data providers by:
    </p>
    <ul>
      <li>
        Identifying projects that may need assistance with data management
      </li>
      <li>
        Reviewing draft project schedules & DMPs for consistency
      </li>
      <li>
        Confirming timeline for the 60-day DMP update
      </li>
    </ul>
    <p>
      <strong id="Post-Award">Post-Award</strong>: {{tooltip_postaward}} During this phase, the Data Access CoE supports project managers and data providers by:
    </p>
    <ul>
      <li>
        Reviewing DMP updates
      </li>
      <li>
        Coordinating dataset & metadata ingestion (in some cases, provides data infrastructure)
      </li>
      <li>
        Promoting data availability and use
      </li>
      <li>
        Providing technical assistance to PMs & awardees on data access & lifecycle management
      </li>
    </ul>
    <p>
      <strong id="Closeout">Closeout</strong>: {{tooltip_closeout}} During this phase, the Data Access CoE supports project managers and data providers by:
    </p>
    <ul>
      <li>
        Implementing the data retention plan
      </li>
    </ul>
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
