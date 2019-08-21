<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <div class="dh-data-access-coe_project-lifecycle_subpage_title">
      <DOTProjectLifecycleImg height="170" width="170" active="preaward"/>
      <h1>Pre-Award</h1>
    </div>
    <p>
      The Pre-Award project lifecycle phase occurs after the release of a project or procurement through evaluation of project or procurement responses. During this phase, Program/Project Managers review responses to procurement requests and prepare for the start of a project. Data Providers ensure their responses to procurements and projects adhere to procurement requirements. See the appropriate page for Program/Project Manager and Data Provider resources.
    </p>
    <!-- Tab links -->
    <div class="dh-data-access-coe_tab">
      <button :class="active_tab=='id_tab1'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab1')">Program/Project Manager</button>
      <button :class="active_tab=='id_tab2'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab2')">Data Providers</button>
    </div>

    <!-- Tab content -->
    <div v-if="active_tab=='id_tab1'" id="id_tab1" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Pre-Award project lifecycle phase, Program and Project Managers prepare for and execute evaluations of data management materials and ensure projects have appropriate planning to manage project data. See resources on this page and contact
        <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>
        for assistance with this project lifecycle phase.
      </p>
      <p>
        During Pre-Award, the Data Access CoE can help Program/Project Managers by:
      </p>
      <ul>
        <li>
          Preparing for evaluation of preliminary data management plans (DMPs). The Data Access CoE can train technical evaluation teams on DMP evaluation or assist in evaluating if needed.
        </li>
        <li>
          Evaluating preliminary DMPs.
        </li>
        <li>
          Clarifying data sharing & data rights agreements.
        </li>
        <li>
          Evaluating proposed data management budgets.
        </li>
      </ul>
      <i>Resources</i>
      <ul>
        <li>
          Due to procurement sensitivity, Program/Project Managers must request preliminary DMP evaluation materials, such as evaluation checklists and evaluation training, by contacting 
          <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>.
        </li>
        <li>
          Guidelines for determining if a separate DMP evaluation panel is needed – contact
          <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>
          for help determining this.
        </li>
        <li>
          <router-link to="/resources/data-management/faqs">FAQs</router-link> – Frequently Asked Questions about the ITS JPO Guidelines and Resources.
        </li>
      </ul>
    </div>

    <div v-if="active_tab=='id_tab2'" id="id_tab2" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Pre-Award project lifecycle phase, Data Providers prepare their responses to a solicitation or project. Data Providers must ensure their responses incorporate all data management requirements listed in the solicitation, which usually includes a requirement for a preliminary data management plan (DMP).
      </p> 
      <i>Resources</i>
      <ul>
        <li>
          <router-link to="/resources/data-management/preliminary-dmp">Preliminary DMP Instructions</router-link> - a document to be used in a solicitation or early phases of a project to create a plan for data management. This document is filled out by a solicitation or project applicant.
        </li>
        <li>
          <router-link to="/resources/data-management/template-and-instructions">Preliminary DMP Template and Downloadable Instructions</router-link> – an associated template and downloadable version of the Preliminary DMP Instructions.
        </li>
        <li>
          <router-link to="/resources/data-management/faqs">FAQs</router-link> – Frequently Asked Questions about the ITS JPO Guidelines and Resources.
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
