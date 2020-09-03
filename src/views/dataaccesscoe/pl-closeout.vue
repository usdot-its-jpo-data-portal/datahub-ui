<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <div class="dh-data-access-coe_project-lifecycle_subpage_title">
      <DOTProjectLifecycleImg height="170" width="170" active="closeout"/>
      <h1>Closeout</h1>
    </div>
    <p>
      The Closeout project life cycle phase occurs of the end of the project. During this phase, Program/Project Managers ensure Data Providers execute closeout as specified in the project requirements and retain all project deliverables, materials, and data from the project. Data Providers execute closeout as specified in the project and ensure the secure handoff of all project materials to the Program/Project Manager and the U.S. DOT.
    </p>

    <!-- Tab links -->
    <div class="dh-data-access-coe_tab">
      <button :class="active_tab=='id_tab1'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab1')">Program/Project Manager</button>
      <button :class="active_tab=='id_tab2'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab2')">Data Providers</button>
    </div>

    <!-- Tab content -->
    <div v-if="active_tab=='id_tab1'" id="id_tab1" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Closeout project life cycle phase, Program/Project Managers ensure Data Providers execute closeout as specified in the project and retain all project deliverables, materials, and data. The Program/Project Manager should contact
        <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>
        for help with the data management portion of Closeout and to ensure the data is retained properly in accordance with its retention schedule.
      </p>
      <p>
        During the Closeout Phase, the ITS JPO can help Program/Project Managers by:
      </p>
      <ul>
        <li>
          Identifying data management closeout requirements for the Data Provider.
        </li>
        <li>
          Implementing the project’s data retention plan/schedule.
        </li>
        <li>
          Ensuring the U.S. DOT retains all U.S. DOT-sponsored project data.
        </li>
        <li>
          Determining the project data’s retention period.
        </li>
      </ul>
      <em>Resources</em>
      <ul>
        <li>
          <router-link to="/resources/guidelines">ITS JPO Guidelines</router-link> (see Section C. Data Storage and Retention) - these are ITS JPO’s overall guidelines and requirements for data access and management throughout a project.
        </li>
        <li>
          <a target="_blank" href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.fhwa.dot.gov_legsregs_directives_orders_hoit-2Dhq-5F.cfm&d=DwMFAg&c=f4NRRID3zFYDyClb0wZXwA&r=u7RoqcKhr0ZTyUrh9-9vLPNfCjiY1PN51nvbAJRd86I&m=RJHBZQZ681YIadOiU_QhZX08QGI_Sbik_GmJHsmAyOg&s=AvfhqvHzwgtD4YBmX9XGz_Z4GeLyer-H3BMvjy12Amk&e=" rel="noopener noreferrer">ITS DataHub Records Disposition Manual<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>
          – ITS JPO’s National Archives & Records Administration (NARA)-approved disposition schedule for ITS DataHub.
        </li>
      </ul>
    </div>

    <div v-if="active_tab=='id_tab2'" id="id_tab2" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Closeout project life cycle phase, Data Providers ensure they are executing the requirements of their project for closeout and turn over all project deliverables, materials and data to their Program/Project Manager and the U.S. DOT. For help with carrying out project closeout, the ITS JPO may be able to provide support, email
        <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a> with inquiries.
      </p>
      <p>
        During the Closeout Phase, the ITS JPO can help the Data Provider by:
      </p>
      <ul>
        <li>
          Assisting with the transition of data and associated materials to the U.S. DOT.
        </li>
        <li>
          Identifying requirements for data management within project closeout.
        </li>
      </ul>
      <em>Resources</em>
      <ul>
        <li>
          <router-link to="/resources/guidelines">ITS JPO Guidelines</router-link> (see Section C. Data Storage and Retention) - - these are ITS JPO’s overall guidelines and requirements for data access and management throughout a project.
        </li>
        <li>
          The project’s charter or contract/grant/funding agreement.
        </li>
        <li>
          Contact <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>.
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
