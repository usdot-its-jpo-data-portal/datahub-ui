<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose images-in-right-column registration-page">
    <h1>Data Registration</h1>
    <p>
      ITS DataHub is committed to providing the ITS community with simplified access to the most relevant and useful ITS research data. All data asset(s) produced by ITS JPO-funded projects in the <router-link to="/data-access-coe/community-support/postaward" class="in-page-link">Post-Award phase</router-link> must be cataloged and discoverable through ITS DataHub and <a target=”_blank” href="https://ntl.bts.gov/public-access/creating-data-management-plans-extramural-research">Data.gov<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>. These data assets are also eligible for JPO-funded data hosting.
      
    </p>
    <p>
        See the <router-link to="/resources/data-storage-system" class="in-page-link">Data Storage Systems page</router-link> for an overview of JPO-funded data systems and follow the steps below.
    </p>
   
    <div class="grid-row step-one">
        <div class="tablet:grid-col-10 left-column_div usa-prose">
            <h2>Step 1: Registration</h2>
            <p>
                To register your data asset, email your <router-link to="/resources/data-management/template-and-instructions" class="in-page-link">Data Management Plan</router-link> to <a id="dh-footer_contact-us-email" :href="`mailto:${contact_email}`">{{contact_email}}</a>.
            </p>
            <p>
                If you do not have a Data Management Plan or were not required by the <router-link to="/resources/guidelines" class="in-page-link">Data Access Guidelines</router-link> to create a Data Management Plan, please download and fill out the <a target=”_blank” href="https://github.com/usdot-its-jpo-data-portal/metadata_ingest/raw/master/forms/ITSJPO_MetadataQuestionnaire_fillable.pdf" class="in-page-link">ITS DataHub Metadata Questionnaire<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a> and email it to <a id="dh-footer_contact-us-email" :href="`mailto:${contact_email}`">{{contact_email}}</a>. 
            </p>
        </div>
        <div class="tablet:grid-col-1 right-column_div">
            <img class="right-column" src="/images/ITSJPO_DataHub_RepositoryRegistration_Registration.png" alt="New tab icon." title="Opens in a new tab.">
        </div>
    </div>

    <div class="grid-row step-two">
        <div class="tablet:grid-col-10 left-column_div usa-prose">       
            <h2>Step 2: Registration Form Review</h2>
            <p>
                Upon receipt of the Data Management Plan or the Metadata Questionnaire, the ITS DataHub support team will check to ensure all required information has been provided.
            </p>
            <p>
                If more details on how to provide access to the data are needed, the support team may schedule a meeting with the data provider to discuss. An estimated readiness date will be sent to the data provider within a week.
            </p>
        </div>
        <div class="tablet:grid-col-1 right-column_div">
            <img class="right-column" src="/images/ITSJPO_DataHub_RepositoryRegistration_Review.png" alt="New tab icon." title="Opens in a new tab.">
        </div>
    </div>
    
    <div class="grid-row step-three">
        <div class="tablet:grid-col-10 left-column_div usa-prose">
            <h2>Step 3: Review and Approval</h2>
            <p>
                Once registration is complete (in 1-4 weeks), the ITS DataHub support team may schedule a short, 15-minute review. After the review, the data provider will have <strong>two to three days</strong> to provide additional feedback regarding the data asset.
            </p>
            <p>
                If no additional feedback is received within three business days after the review is completed, approval for publication from the data provider will be assumed.
            </p>
        </div>
        <div class="mobile-lg:grid-col-1 right-column_div">
            <img class="right-column" src="/images/ITSJPO_DataHub_RepositoryRegistration_Approval.png" alt="New tab icon." title="Opens in a new tab.">
        </div>
    </div>
    

    <div class="grid-row step-four">
        <div class="mobile-lg:grid-col-10 left-column_div usa-prose">
            <h2>Step 4: Publication and Promotion</h2>
            <p>
                After approval, the ITS DataHub support team will make the data asset discoverable through ITS DataHub and <a target=”_blank” href="http://data.gov/">Data.gov<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>. ITS DataHub may promote the data asset externally as appropriate.
            </p>
        </div>
        <div class="mobile-lg:grid-col-1 right-column_div">
            <img class="right-column" src="/images/ITSJPO_DataHub_RepositoryRegistration_PublicationPromotion.png" alt="New tab icon." title="Opens in a new tab.">
        </div>
    </div>

    <div class="grid-row step-five">
        <div class="mobile-lg:grid-col-10 left-column_div usa-prose">
            <h2>Deprecation</h2>
            <p>
                ITS DataHub follows the <a target=”_blank” href="https://www.fhwa.dot.gov/legsregs/directives/orders/hoit-hq_.cfm">data retention schedule of Federal Highway Administration (FHWA)<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>. 
            </p>
        </div>
        <div class="mobile-lg:grid-col-1 right-column_div">
            <img class="right-column" src="/images/ITSJPO_CodeHub_RepositoryRegistration_012820_delete.png" alt="New tab icon." title="Opens in a new tab.">
        </div>
    </div> 
  </div>
</template>
<script>
import TEMPLATE_CATEGORY from '@/data/template_categories.json';
export default {
  name: "Registration",
  data: function(){
    return {
            contact_email:"" 
        }
  },
  created: function(){
    this.contact_email = TEMPLATE_CATEGORY.contact_email;
  }
}
</script>
