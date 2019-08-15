<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <div class="dh-data-access-coe_project-lifecycle_subpage_title">
      <DOTProjectLifecycleImg height="170" width="170" active="closeout"/>
      <h1>Closeout</h1>
    </div>
    <p>
      {{tooltip_closeout}} During this phase, the Data Access CoE supports project managers and data providers by:
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
