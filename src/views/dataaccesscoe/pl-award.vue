<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <div class="dh-data-access-coe_project-lifecycle_subpage_title">
      <DOTProjectLifecycleImg height="170" width="170" active="award"/>
      <h1>Award</h1>
    </div>
    <p>
      The Award phase consists of the period of time from when award occurs to project kick-off. During this phase Program/Project Managers and Data Providers prepare for and conduct project kick-off. See the appropriate page for Program/Project Manager and Data Provider resources.
    </p>
    <!-- Tab links -->
    <div class="dh-data-access-coe_tab">
      <button :class="active_tab=='id_tab1'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab1')">Program/Project Manager</button>
      <button :class="active_tab=='id_tab2'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab2')">Data Providers</button>
    </div>

    <!-- Tab content -->
    <div v-if="active_tab=='id_tab1'" id="id_tab1" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Award project lifecycle phase, Program/Project Managers prepare for the project and conduct project kick-off. See resources on this page and contact
        <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>
        for assistance with this project lifecycle phase.
      </p>
      <p>
        During Award, the Data Access CoE can help Program/Project Managers by:
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
      <i>Resources</i>
      <ul>
        <li>
          ITS JPO Guidelines
        </li>
        <li>
          Reach out to
          <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>
          for any additional support/resources
        </li>
      </ul>
    </div>

    <div v-if="active_tab=='id_tab2'" id="id_tab2" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Award Phase, Data Providers prepare to kick-off and transition onto the project. To ensure they are adhering to the data management requirements for ITS JPO projects, Data Providers should review the ITS JPO Guidelines, solicitation language, their proposal, and the ITS JPO Resources page and incorporate requirements into their project plan.
      </p> 
      <i>Resources</i>
      <ul>
        <li>
          ITS JPO Guidelines
        </li>
        <li>
          ITS JPO Resources
        </li>
      </ul>

    </div>
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
  name: 'DataAccessCoEPlanning',
  components: {
    DOTProjectLifecycleImg
  },
  data: function(){
    return {
      tooltip_planning: COE_TOOLTIP_PLANNING,
      tooltip_preaward: COE_TOOLTIP_PREAWARD,
      tooltip_award: COE_TOOLTIP_AWARD,
      tooltip_postaward: COE_TOOLTIP_POSTAWARD,
      tooltip_closeout: COE_TOOLTIP_CLOSEOUT,
      active_tab: 'id_tab1'
    }
  },
  methods: {
    tabClicked: function(event, tabId) {
      this.active_tab = tabId;
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
