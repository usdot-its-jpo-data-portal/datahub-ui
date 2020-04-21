<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <h1>Frequently Asked Questions (FAQs)</h1>

    <h2 id="section-heading-h2">How do I find data on the ITS DataHub?</h2>
    <ol>
      <li>To begin your search for ITS data, type in a key word in the search bar or click on a <strong>RECOMMENDED DATASET SEARCHES</strong>. The <strong>FEATURED DATASETS</strong> section also highlights the newest datasets.</li>
      <li>Once the results are populated, clicking on the title of the search result will take you to the National Transportation Library (NTL) or data.transportation.gov (DTG), where the data resides.</li>
      <li>If the data resides on NTL:</li>
      <ol type="a">
        <li>To view the metadata for the dataset, click on the &ldquo;<strong>Viewer</strong>&rdquo; tab. You can print or download this metadata using the icons in the upper right of the viewer.</li>
        <li>To see details about the project, such as the authors, keywords, or description associated with the data, click on the &ldquo;<strong>Details</strong>&rdquo; tab.</li>
        <li>To download the dataset, click on the &ldquo;<strong>Supporting Files</strong>&rdquo; tab and you will find a downloadable zip file of the data.</li>
        <li>To see reports related to the dataset, click on the &ldquo;<strong>Related Documents</strong>&rdquo; tab.</li>
      </ol>
    </ol>
    <ol start="4">
      <li>If the data resides on DTG, please note that there are two types of dataset formats. Datasets that have been integrated into the DTG interface and datasets that have been attached.
        <ol type="a">
          <li><u>Integrated datasets</u> give users the capability to view and work with the data within the DTG interface:
            <ol type="i">
              <li>To download the metadata, refer to the &ldquo;<strong>Download this Resource</strong>&rdquo; section. If this section does not exist, the metadata can be found in the &ldquo;<strong>Attachments</strong>&rdquo; section.</li>
              <li>To download the data, scroll to the &ldquo;<strong>Table Preview</strong>&rdquo; section and click on view data. A colorful menu bar will appear on the right-hand side, click on the blue &ldquo;<strong>Export</strong>&rdquo; button and choose the desired format to download the data.</li>
              <li>To work with data on the DTG interface, scroll to the &ldquo;<strong>Table Preview</strong>&rdquo; section and click on view data.
                <ol>
                  <li>To filter the data, click on the blue &ldquo;<strong>Filter</strong>&rdquo; button and then click on the &ldquo;<strong>Add a New Filter Condition</strong>&rdquo;.</li>
                  <li>To create visualizations, click on the green &ldquo;<strong>Visualize</strong>&rdquo; button.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li><u>Attached datasets</u> do not have the capability for users to view or work with the data within the interface.
          <br /> (<strong>Please note</strong>: This legacy dataset was created before data.transportation.gov and is only currently
          available via the attached file(s). 
          Please contact the dataset owner if there is a need for users to work with this data using the
          data.transportation.gov analysis features (online viewing, API, graphing, etc.) and the USDOT will
          consider modifying the dataset to fully integrate in DTG.):<br />
            <ol>
              <li>To download the metadata, refer to the &ldquo;<strong>Download this Resource</strong>&rdquo; section.</li>
              <li>To download the data, zip files of the data can be found in the &ldquo;<strong>Attachments</strong>&rdquo; section.</li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>

    <h2 id="section-heading-h2">How do I get access to sensitive transportation datasets?</h2>
    <p>
      USDOT provides access to sensitive data via several systems. The proof-of-concept <a target="_blank" href="https://its.dot.gov/data/secure/" rel="noopener noreferrer">Secure Data Commons<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, 
      provides a secure and collaborative controlled-access environment for sensitive data (i.e. proprietary or containing PII). 
      To get more information or to participate, 
      contact us at <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov</a>.
    </p>

    <h2 id="section-heading-h2">How do I provide data to ITS DataHub?</h2>
    <p>
      Please review the <router-link id="data-management-template-id-in-page" to="/resources" class="in-page-link">Guidelines page</router-link> and reach out to the ITS JPO Data Access Center of Excellence at <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov</a>. 
    </p>

    <h2 id="section-heading-h2">What kind of data should I provide?</h2>
    <p>Appropriate data will vary according to the scope and goals of the proposed project. Applicants should consider the feasibility of obtaining and sharing data in preparing their proposals. In addition, appropriate data should be collected to support evaluation of the demonstrated system.</p>

    <h2 id="section-heading-h2">What are the differences between primary research data and derived research data?</h2>
    <p>The two tables below describe the general classification criteria for whether data is considered primary or derived.</p>
    <div class="research-data__wrapper">
      <table class="research-data__table usa-table" id="primary-research-data__table">
        <tr>
          <th>Primary Research Data</th>
        </tr>
        
        <tr>
          <td id="align-tables__cell">
            <ul>
              <li>Original raw data collected during research that can be used for further analysis</li>
              <li>Examples: SHRP 2, ICM, CV</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="research-data__table-footer">data.transportation.gov
            <br>
            ITS Sandbox
          </td>
        </tr>
      </table>
      <table class="research-data__table usa-table" id="derived-research-data__table">
        <tr>
          <th>Derived Research Data</th>
        </tr>
        <tr>
          <td>
            <ul>
              <li>Data derived through analysis of other data and shared as part of a final report to communicate the methodology and findings of a research project</li>
              <li>Must reference the primary data it builds upon</li>
              <li>Examples: SHRP2 Subprojects, AMS</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td class="research-data__table-footer">National Transportation Library</td>
        </tr>
      </table>
    </div>

    <h2>What is the purpose of a preliminary DMP and a post-award DMP?</h2>
    <p>Data Management Plans (DMPs) are living documents describing how researchers will handle digital data both during and after a research project and how a research proposal conforms to U.S. DOT policy on the dissemination and sharing of research results. They are essential tool for ensuring proper data management occurs.</p>
    <p>A preliminary DMP is a document provided in the early stages of a research project, usually during the application stage of a solicitation, that offers preliminary information on data management of a project. The purpose of this document is to begin planning for data management at the beginning of a project in order to make necessary preparations for when data is produced by the project.</p>
    <p>A post-award DMP is an update to the preliminary DMP that occurs once the project has begun, usually 60 days after award of a solicitation, and is continually updated as data management details change. The purpose of this document is to maintain up-to-date information on all details of a project’s data management.</p> 
    
    <h2>Please clarify 'near real-time' -- e.g. should this be measured in milliseconds, seconds, minutes, hours, and/or days?</h2>
    <p>Near real-time means the data has been made available as soon as possible after data collection. This depends on the nature of the data, the nature of the need, and any privacy protections or processes that needs to be applied. This frequency could be streaming, so true real time, or periodic dash uploads of a frequency that could be minutes, days, weeks or months. We need you to specify your frequency of update to us in your data management plan, and it should be as near to real-time as possible.</p>
    
    <h2>Does the applicant need to submit multiple data management plans (DMPs) if they are submitting multiple projects in the same application?</h2>
    <p>The applicant may choose whether to provide one or multiple DMPs. Whichever approach they decide, the applicant should clearly indicate how all the data will be managed.</p>
  </div>
</template>
<script>
export default {
  name: 'Faqs'
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
