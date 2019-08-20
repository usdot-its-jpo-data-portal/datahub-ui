<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <div class="dh-data-access-coe_project-lifecycle_subpage_title">
      <DOTProjectLifecycleImg height="170" width="170" active="closeout"/>
      <h1>Closeout</h1>
    </div>
    <p>
      The Closeout phase consists of the end of the project and ensuring data is properly retained. During this phase, Program/Project Managers ensure Data Providers execute closeout as specified in the project and retain all project deliverables, materials, and data. Data Providers execute closeout as specified in the project and ensure the secure handoff of all project materials to the Program/Project Manager and the U.S. DOT. 
    </p>

    <!-- Tab links -->
    <div class="dh-data-access-coe_tab">
      <button :class="active_tab=='id_tab1'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab1')">Program/Project Manager</button>
      <button :class="active_tab=='id_tab2'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab2')">Data Providers</button>
    </div>

    <!-- Tab content -->
    <div v-if="active_tab=='id_tab1'" id="id_tab1" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Closeout Phase, Program/Project Managers ensure Data Providers execute closeout as specified in the project and retain all project deliverables, materials, and data. The Program/Project Manager should contact
        <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>
        for help with the data management portion of closeout and ensure the data is retained properly in accordance with its retention schedule.
      </p>
      <p>
        During the Closeout Phase, the Data Access CoE can help Program/Project Managers by:
      </p>
      <ul>
        <li>
          Identifying data management closeout requirements for the Data Provider
        </li>
        <li>
          Implementing the project’s data retention plan/schedule
        </li>
        <li>
          Ensuring the U.S. DOT retains all U.S. DOT-sponsored project data
        </li>
        <li>
          Determining the data’s retention period
        </li>
      </ul>
      <i>Resources</i>
      <ul>
        <li>
          ITS JPO Guidelines (see Section C. Data Storage and Retention)
        </li>
        <li>
          <a target="_blank" href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.fhwa.dot.gov_legsregs_directives_orders_hoit-2Dhq-5F.cfm&d=DwMFAg&c=f4NRRID3zFYDyClb0wZXwA&r=u7RoqcKhr0ZTyUrh9-9vLPNfCjiY1PN51nvbAJRd86I&m=RJHBZQZ681YIadOiU_QhZX08QGI_Sbik_GmJHsmAyOg&s=AvfhqvHzwgtD4YBmX9XGz_Z4GeLyer-H3BMvjy12Amk&e=">ITS DataHub Records Disposition Manual<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>
        </li>
        <li>
          ITS DataHub Records Disposition Schedule
        </li>
      </ul>
    </div>

    <div v-if="active_tab=='id_tab2'" id="id_tab2" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Closeout Phase, Data Providers ensure they are executing the requirements of their project for closeout and turn over all project deliverables, materials and data to their Program/Project Manager and the U.S. DOT. For help with carrying out project closeout, the Data Access CoE may be able to provide support. To contact the Data Access CoE, email
        <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>.
      </p>
      <p>
        During the Closeout Phase, the Data Access CoE can help Data Provider by:
      </p>
      <ul>
        <li>
          Assisting with the transition of data and associated materials to the U.S. DOT
        </li>
        <li>
          Identifying requirements for data management within project closeout
        </li>
      </ul>
      <i>Resources</i>
      <ul>
        <li>
          ITS JPO Guidelines
        </li>
        <li>
          The project’s charter or contract
        </li>
        <li>
          <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>
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
