<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <div class="dh-data-access-coe_project-lifecycle_subpage_title">
      <DOTProjectLifecycleImg height="150" width="150" active="planning"/>
      <h1>Planning</h1>
    </div>
    <p>
      {{tooltip_planning}} During this phase, the Data Access CoE supports project managers and data providers by:
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
  </div>
</template>
<script>
import DOTProjectLifecycleImg from '@/components/dot-project-lifecycle-img.vue';

export default {
  name: 'DataAccessCoEPlanning',
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
