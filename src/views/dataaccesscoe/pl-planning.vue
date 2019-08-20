<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <div class="dh-data-access-coe_project-lifecycle_subpage_title">
      <DOTProjectLifecycleImg height="170" width="170" active="planning"/>
      <h1>Planning</h1>
    </div>
    <p>
      The Planning phase occurs when planning a project or procurement begins through release of a project or procurement. During this phase, Program/Project Managers work on planning and releasing the project or procurement and Data Providers start brainstorming project ideas. See the appropriate page for Program/Project Manager and Data Provider resources.
    </p>

    <!-- Tab links -->
    <div class="dh-data-access-coe_tab">
      <button :class="active_tab=='id_tab1'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab1')">Program/Project Manager</button>
      <button :class="active_tab=='id_tab2'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab2')">Data Providers</button>
    </div>

    <!-- Tab content -->
    <div v-if="active_tab=='id_tab1'" id="id_tab1" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        To ensure the Data Access CoE provides the maximum benefit to a project or procurement, we recommend bringing our team at the beginning of the project lifecycle. To begin this engagement during the Planning phase, you can find resources on this page and contact us directly at
        <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>.
      </p>
      <p>
        During Planning, the Data Access CoE can support Program/Project Managers by:
      </p>
      <ul>
        <li>
          Advising on data access requirements clauses and solicitation language for Notice of Funding Opportunities (NOFOs), Requests for Proposals (RFPs) and internal ITS JPO-sponsored projects. We have standard language and clauses that can be tailored to your needs.
        </li>
        <li>
          Determining applicability for data access requirements for your project, including whether data can be made public and what U.S. DOT-managed systems are be available to store project data.
        </li>
        <li>
          Providing templates to begin data management in the solicitation phase (e.g. preliminary DMPs and instructions).
        </li>
        <li>
          Other resources and support upon request. Contact us at
          <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>.
        </li>
      </ul>
      <i>Resources</i>
      <ul>
        <li>
          <router-link to="/resources/guidelines">ITS DataHub Guidelines</router-link> – these are ITS JPO’s overall guidelines and requirements for data access and management.
        </li>
        <li>
          <router-link to="/resources/data-management/preliminary-dmp">Preliminary DMP</router-link> – a document to be used in the solicitation or early phases of a project, filled out by the Data Provider.
        </li>
        <li>
          Standard Solicitation Language
        </li>
      </ul>
    </div>

    <div v-if="active_tab=='id_tab2'" id="id_tab2" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        For help brainstorming potential project ideas and gathering lessons learned and cost estimates from previous ITS projects, see the
        <a target="_blank" href="https://www.itsbenefits.its.dot.gov/its/benecost.nsf/ByLink/BenefitsAbout">ITS Benefits Database<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>.
        Additionally, review ITS JPO’s data management Resources page and associated templates and guidance to anticipate requirements that might be part of the project.
      </p> 
      <i>Resources</i>
      <ul>
        <li>
          <router-link to="/resources">ITS DataHub Resources Page</router-link>
        </li>
        <li>
          <router-link to="/resources/data-management/preliminary-dmp">Preliminary DMP</router-link>
        </li>
        <li>
          <router-link to="/resources/guidelines">System Guidelines</router-link>
        </li>
        <li>
          Standard Solicitation Language
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
