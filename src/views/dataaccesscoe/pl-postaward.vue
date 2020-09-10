<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <div class="dh-data-access-coe_project-lifecycle_subpage_title">
      <DOTProjectLifecycleImg height="170" width="170" active="postaward"/>
      <h1>Post-Award</h1>
    </div>
    <p>
      The Post-Award project life cycle phase consists of the period after project kick-off where the project grows and starts producing data. During this phase, Program/Project Managers oversee adherence to the project plan and required deliverables, including data. Data Providers execute their project plan and begin producing data, executing their data management plan (DMP) and updating it as appropriate. See the appropriate page for Program/Project Manager and Data Provider resources.
    </p>
    <!-- Tab links -->
    <div class="dh-data-access-coe_tab">
      <button :class="active_tab=='id_tab1'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab1')">Program/Project Manager</button>
      <button :class="active_tab=='id_tab2'?'dh-data-access-coe_tab-active':''" @click="tabClicked($event, 'id_tab2')">Data Providers</button>
    </div>

    <!-- Tab content -->
    <div v-if="active_tab=='id_tab1'" id="id_tab1" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Post-Award project life cycle phase, Program/Project Managers oversee adherence to the project plan and required deliverables, including data. Program/Project Managers must ensure their projects produce a post-award DMP approved by ITS JPO within 60 days of project award and update the DMP as changes occur or at least every six months in accordance with the ITS JPO Guidelines. Additionally, Program/Project Managers oversee their projects produce data and make the data accessible.
      </p>
      <p>
        During the Post-Award phase, the ITS JPO can help Program/Project Managers by:
      </p>
      <ul>
        <li>
          Reviewing DMP updates and ensuring they adhere to the ITS JPO Guidelines.
        </li>
        <li>
          Providing technical assistance to PMs on data access & life cycle management – for more information, contact
          <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>.
        </li>
      </ul>
      <em>Resources</em>
      <ul>
        <li>
          <router-link to="/resources/data-management/post-award-dmp">Post-Award DMP Instructions Webpage</router-link> – all elements requested for the 60-day DMP update.
        </li>
        <li>
          <router-link to="/resources/data-management/template-and-instructions">Post-Award DMP Template & Downloadable Instructions</router-link> – associated template and downloadable and downloadable version of the Post-Award DMP Instructions.
        </li>
        <li>
          <router-link to="/resources/data-management/faqs">FAQs</router-link> – Frequently Asked Questions about the ITS JPO Guidelines and Resources.
        </li>
      </ul>
    </div>

    <div v-if="active_tab=='id_tab2'" id="id_tab2" class="usa-layout-docs__main desktop:grid-col-10 dh-data-access-coe_tab-content">
      <p>
        In the Post-Award project life cycle phase, Data Providers execute their project and begin to produce data. Data Providers must execute their DMP and provide an updated DMP approved by ITS JPO within 60 days of project award and updated as changes occur to data management or at least every six months in accordance with the ITS JPO Guidelines.
      </p> 
      <p>
        During the Award Phase, the ITS JPO can help Data Providers by:
      </p>
      <ul>
        <li>
          Providing clarification on elements in the Post-Award DMP.
        </li>
        <li>
          Evaluating Post-Award DMPs to ensure they adhere to requirements.
        </li>
        <li>
          Providing data infrastructure in certain cases.
        </li>
        <li>
          Coordinating dataset & metadata ingestion to U.S. DOT-managed data storage systems.
        </li>
        <li>
          Promoting data availability and use.
        </li>
      </ul>
      <em>Resources</em>
      <ul>
        <li>
          <router-link to="/resources/data-management/post-award-dmp">Post-Award DMP Instructions Webpage</router-link> – all elements requested for the 60-day DMP update.
        </li>
        <li>
          <router-link to="/resources/data-management/template-and-instructions">Post-Award DMP Template & Downloadable Instructions</router-link> – associated template and downloadable and downloadable version of the Post-Award DMP Instructions.
        </li>
        <li>
          <router-link to="/resources/data-management/faqs">FAQs</router-link> – Frequently Asked Questions about the ITS JPO Guidelines and Resources.
        </li>
        <li>
          <a target="_blank" href="https://github.com/usdot-its-jpo-data-portal/metadata_ingest/blob/master/forms/ITSJPO_MetadataQuestionnaire_fillable.pdf" rel="noopener noreferrer">Metadata Questionnaire<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>
          – a questionnaire to initiate dataset & metadata ingestion into U.S. DOT-managed data storage systems. The ITS JPO will request this form near the ingestion date noted in the DMP.
        </li>
        <li>
          <router-link to="/resources/data-storage-system">Data Storage Systems Web Page</router-link> – a web page describing different data storage systems available and decision points for choosing where to store data.
        </li>
        <li>
          <router-link to="/resources/metrics">Data Use Metrics</router-link> – metrics about the use of datasets hosted on U.S. DOT-management systems. Contact
          <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>
          for more help with metrics.
        </li>
        <li>
          Contact
          <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>
          for help with dataset promotion activities.
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
