<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <div class="dh-data-access-coe_project-lifecycle_subpage_title">
      <DOTProjectLifecycleImg height="170" width="170" active="postaward"/>
      <h1>Post-Award</h1>
    </div>
    <p>
      The Post-Award phase consists of the period after project kick-off where the project grows and starts producing data. During this phase, Program/Project Managers oversee adherence to the project plan and required deliverables, including data. Data Providers execute their project plan and begin producing data, updating their data management plan as appropriate and executing their data management plan. See the appropriate page for Program/Project Manager and Data Provider resources.
    </p>
    <!-- Tab links -->
    <div class="dh-data-access-coe_tab">
      <button :class="active_tab=='id_tab1'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab1')">Program/Project Manager</button>
      <button :class="active_tab=='id_tab2'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab2')">Data Providers</button>
    </div>

    <!-- Tab content -->
    <div v-if="active_tab=='id_tab1'" id="id_tab1" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Post-Award phase, Program/Project Managers oversee adherence to the project plan and required deliverables, including data. Program/Project Managers must ensure their projects produce a post-award DMP approved by ITS JPO within 60 days of project award and update the DMP as changes occur (at least every six months) in accordance with the ITS JPO Guidelines. Additionally, Program/Project Managers oversee their projects produce data and make them accessible.
      </p>
      <p>
        During the Post-Award phase, the Data Access CoE can help Program/Project Managers by:
      </p>
      <ul>
        <li>
          Reviewing DMP updates and ensuring they adhere to the ITS JPO Guidelines
        </li>
        <li>
          Providing technical assistance to PMs on data access & lifecycle management – for more information, contact
          <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>
        </li>
      </ul>
      <i>Resources</i>
      <ul>
        <li>
          <router-link to="/resources/data-management/post-award-dmp">Post-Award DMP Instructions Webpage</router-link>
        </li>
        <li>
          <router-link to="/resources/data-management/template-and-instructions">Post-Award DMP Template & Downloadable Instructions</router-link>
        </li>
        <li>
          <router-link to="/resources/data-management/faqs">FAQs</router-link>
        </li>
      </ul>
    </div>

    <div v-if="active_tab=='id_tab2'" id="id_tab2" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Post-Award Phase, Data Providers execute their project and begin to produce data. Data Provider should be sure to execute on their DMP, providing an updated DMP approved by ITS JPO within 60 days of project award and updated as changes occur to data management and at least every six months in accordance with the ITS JPO Guidelines.
      </p> 
      <p>
        During the Award phase, the Data Access CoE can help Data Provider by:
      </p>
      <ul>
        <li>
          Providing clarification on elements in the Post-Award DMP
        </li>
        <li>
          Evaluating Post-Award DMPs to ensure they adhere to requirements
        </li>
        <li>
          Coordinating dataset & metadata ingestion 
        </li>
        <li>
          Providing data infrastructure in certain cases
        </li>
        <li>
          Promoting data availability and use
        </li>
      </ul>
      <i>Resources</i>
      <ul>
        <li>
          <router-link to="/resources/data-management/post-award-dmp">Post-Award DMP Instructions Webpage</router-link>
        </li>
        <li>
          <router-link to="/resources/data-management/template-and-instructions">Post-Award DMP Template & Downloadable Instructions</router-link>
        </li>
        <li>
          <router-link to="/resources/data-management/faqs">FAQs</router-link>
        </li>
        <li>
          Metadata Questionnaire
        </li>
        <li>
          System Guidelines
        </li>
        <li>
          Data Use Reports
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
