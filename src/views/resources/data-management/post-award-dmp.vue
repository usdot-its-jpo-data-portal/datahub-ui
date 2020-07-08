<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <h1>Post-Award DMP Instructions</h1>
    <h2 id="post-introduction">Introduction</h2>
    <p>
      This page provides instructions for creating a post-award Data Management Plan (DMP) using a consistent format. To view a downloadable version of these instructions, as well as an associated template, please reference the <router-link id="data-management-template-id-in-page" to="/resources/data-management/template-and-instructions" class="in-page-link">Templates &amp; Instructions</router-link> tab. To contribute content and updates to these instructions or the associated template, please provide comments on our <a target=”_blank” href="https://github.com/usdot-its-jpo-data-portal/data-access-coe-resources">GitHub page<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>.
    </p>
    <p>
      These instructions are based off of the United States Department of Transportation’s (U.S. DOT’s) National Transportation Library’s <a target=”_blank” href="https://ntl.bts.gov/public-access/creating-data-management-plans-extramural-research">Guidance for Creating Data Management Plans for Extramural Research<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, and provide additional clarification for the ITS JPO’s expectations for DMPs. While these instructions inform applicants of DMP elements preferred by the ITS JPO, they do not serve as an approved government form or template. Applicants should use their best judgement when determining what information to include or if additional information should be incorporated into the DMP.
    </p>
    <p>
      The DMP is a living document describing how researchers will handle digital data both during and after a research project, and how the research proposal conforms to U.S. DOT policy on the dissemination and sharing of research results. The DMP should adequately identify the data to be collected, how the data will further the goals of the U.S. DOT, how the data will be made accessible, how the data will be stored, and what data standard(s) will be used.
    </p>
    <p>
      The post-award DMP should build on any preliminary DMP submitted during the application phase of a project and be updated regularly to capture changes to a project's data management procedures and/or data, including schema changes. It is recommended that the post-award DMP does not initially exceed the project’s preliminary DMP length by more than five pages, however, project teams should refer to any solicitation or project documentation for specific page requirements. The post-award DMP should grow and evolve over the course of the project as more data is added and processes change.
    </p>
    
    <h2 id="post-project-overview">1. Project Overview</h2>
    <p>Provide summary information about the project and its goals, as well as how the project’s data helps achieve U.S. DOT research goals.</p>
      <p>Suggested elements for this section include, but are not limited to:
      <ul>
        <li>
          <strong>Project Title:</strong> Please provide the title of the project.
        </li>
        <li>
          <strong>Project Goals and Objectives:</strong> Briefly describe the goals and objectives of this project, as well as how the data collected helps the U.S. DOT achieve its goals and objectives.
        </li>
        <li>
          <strong>Project Description:</strong> Briefly describe the research project, including project design and execution.
        </li>
        <li>
          <strong>Project Life Cycle Phase:</strong> Please provide the phase of the project life cycle as of the date of the DMP or updated DMP. Phases include: planning, pre-award, award, post award, and closeout.
        </li>
        <li>
          <strong>Project Performance Measurements:</strong> Briefly describe any performance measurements the project will use and if appropriate, how the data collected support these measurements.
        </li>
      </ul>
    </p>

    <h3>1.1	Change Control</h3>
    <p>
      Briefly describe the plans for modifications and updates to the DMP over time, including how those changes will be controlled. If there are planned updates, then provide the estimated release dates.
    </p>

    <h3>1.2	Relevant Documents</h3>
    <p>
      List any reference documents with information relevant to data management for the project, including the name and the source of the document. If some of the information requested by  this template is available in other documents, those documents may be referenced to avoid duplicating content and maintenance of redundant documentation.
    </p>

    <h2 id="post-data-overview">2. Data Overview</h2>
    <p>
      Please provide a description of the nature, scope, and scale of the data that is collected and/or produced. For each unique dataset, please provide all the elements in this section.
    </p>
    <p>Suggested elements for this section include, but are not limited to:
    <ul>
      <li>
        <strong>ID:</strong> Provide all U.S. DOT, state DOT or transportation-related identification numbers for this dataset. This may include, but is not limited to, ORCHID ID numbers, Transportation Research Board (TRB) RiP database numbers, contract numbers etc.
      </li>
      <li>
        <strong>Dataset Title:</strong> Provide the dataset title.
      </li>
      <li>
        <strong>Description:</strong> A) Describe the purpose of the dataset including how it relates to the broader purpose of the research project. B) If using existing data, describe the relationship between the data you are collecting and the existing data. C) Discuss the potential long-term value the dataset will have to the research project and other consumers.
      </li>
      <li>
        <strong>Type/Scale:</strong> Specify the type and scale of the data that is generated (e.g., numerical data, image data, text sequences, positional data, video data, audio data, database data, modeling data, source code, etc.).
      </li>
      <li>
        <strong>Collection Method:</strong> Describe the methods for collecting the data (e.g., simulated, observed, experimental, software, physical collections, sensors, satellite, enforcement activities, researcher-generated databases, tables, and/or spreadsheets, instrument generated digital data output such as images and video, etc.).
      </li>
      <li>
        <strong>Data File Format(s):</strong> Provide the data file format(s) the data and/or datasets are anticipated to be in when they are made accessible to the U.S. DOT (e.g. .csv, .txt, json, newline json, etc.). If not yet known, explain to the best of your ability.
      </li>
    </ul>
      
    <h2 id="post-data-stewardship">3. Data Stewardship</h2>
    <p>Please provide details concerning data stewardship. Data stewardship involves proper data management throughout the data life cycle, including but not limited to, maintaining data quality and safeguarding the data.</p>
    
    <h3>3.1 Data Owner and Steward</h3>
    <p>
      Please define the data owner and data steward for this project’s datasets. It is acceptable for multiple datasets to have the same data owner and/or data steward. 
    </p>
    <p> 
      Suggested elements for this section include, but are not limited to:
      <ul>
        <li>
          <strong>Dataset Title:</strong> Please provide the title of the data and/or datasets that are assigned to the designated data owner and/or data steward. Data and/or datasets with different data owners and/or data stewards may be listed separately.
        </li>
        <li>
          <strong>Data Owner:</strong> List the data owner of the dataset. The data owner is the person or organization with the authority, ability, and responsibility to access, create, modify, store, use, share, and protect the data. Data owners have the right to delegate these privileges and responsibilities to other parties. Please note the data owner may be the U.S. DOT Program or Project Manager for U.S. DOT-funded research projects.
        </li>
        <li>
          <strong>Data Steward:</strong> List the data steward for the dataset. The data steward, at the direction of the data owner, is the person or organization that is delegated the privileges and responsibilities to manage, control, and maintain the quality of a data asset throughout the data life cycle. The data steward may also apply appropriate protections, restrictions, and other safeguards depending on the nature of the data, subject to the direction of the data owner. The data steward may be the recipient of U.S. DOT-funded research projects or one of the recipient’s partner organizations.
        </li>
        <li>
          <strong>Federal Sponsor:</strong> Please list the U.S. DOT sponsor or project manager for this/these dataset(s).
        </li>
      </ul>
    </p>
    <h3>3.2 Access Level</h3>
    <p>
      Providing appropriate data access to safeguard data is a key aspect of data stewardship. In accordance with the OPEN Government Data Act, datasets must be made publicly accessible unless specific concerns require the data to have controlled-access. Please detail what, if any data requires controlled-access, reasons for controlling access, and methods taken to safeguard.
    </p>
    <p>
      Controlled-access is defined as restricting access to certain groups of persons due to data containing personally identifiable information (PII), confidential business information (CBI), or any other information that threatens the privacy of an individual or group. 
    </p>
    
    <h4>3.2.1 Can all of the data from this project be shared with the public, or is controlled-access required for at least some of the data?</h4>
    <p>
      Please complete this section based on what best describes the access level for the project’s data:
      <ul>
        <li>
          <strong>All Public Access:</strong> If there is no data requiring controlled-access, select the ‘Public Access’ checkbox.
        </li>
        <li>
          <strong>Some/All Controlled-Access:</strong> If there is data in one or more datasets requiring controlled-access (e.g. PII or CBI) select the ‘Controlled-Access’ checkbox.
        </li>
      </ul>
    </p>
    
    <h4>3.2.2	Datasets Requiring Controlled-Access</h4>
    <p>
      This section is only required if “Controlled-Access” is selected above.
    </p>
    <p>
      In this section, list all datasets that require controlled-access and why the datasets require controlled-access. Please provide all elements for each anticipated dataset that requires controlled-access.  
      <ul>
        <li>
          <strong>Dataset Title:</strong> Provide the the dataset title.
        </li>
        <li>
          <strong>Reasons for Controlled-Access:</strong> For any data requiring controlled-access, please detail why the data requires controlled-access.
        </li>
        <li>
          <strong>Safeguarding Methods and Processes:</strong> Describe the methods and processes that are taken to safeguard the data requiring controlled-access, such as redacting data before providing public access to the dataset. Please elaborate on the specific methods (e.g. blurring license plates in videos, geofencing sensor data, removing persistent IDs, etc.). Any privacy, ethical or confidentiality concerns raised due to data sharing should be described.
        </li>
      </ul>
    </p>

    <h4>3.2.3	Informed Consent</h4>
    <p>
      If this project contains human subject research, please describe how informed consent forms will permit sharing with the research community and whether additional steps, such as an Institutional Review Board (IRB), may be used to protect privacy and confidentiality. Please refer to <a target="_blank" href="https://ntl.bts.gov/public-access/creating-data-management-plans-extramural-research" rel="noopener noreferrer"> NTL's web page on Creating Data Management Plans for Extramural Research<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a> for more information.
    </p>

    <h4>3.2.4 Access Requests</h4>
    <p>
      For each dataset, describe what processes this project will follow to allow full access to this data if requested, including criteria a user must pass to gain access (e.g. for a specific business purpose or if the user is a part of a certain group like a member of the research team, etc.).
    </p>

    <h4>3.2.5 Related Tools, Software and/or Code</h4>
    <p>
      List any specialized tools that are needed to access, analyze or manipulate the data to support reuse or replication, and name(s) of the needed tool(s) and software. Specify how any needed tools can be accessed (i.e., open source and freely available, generally available for a fee in the marketplace, or available only from the research team or another source).
    </p>

    <h4>3.2.6 Relevant Privacy and/or Security Agreements</h4>
    <p>
      If applicable, for each dataset provide a list of relevant privacy and/or security agreements (e.g., non-disclosure agreements, rules of behavior, memoranda of understanding, confidentiality agreements, sub-contracts, etc.) that apply to these data and its users, including circumstances when these agreements would be used.  
    </p> 
    
    <h3>3.3	Re-Use, Redistribution, and Derivative Products Policies</h3>
    <p>
      In accordance with the <a target=”_blank” href="https://www.congress.gov/bill/115th-congress/house-bill/1770/text">OPEN Government Data Act<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, to the extent practicable, data must be made available through an open license that places no restrictions on copying, publishing, distributing, transmitting, citing or adapting such asset. 
    </p>
    <p> 
      In this section, please provide the applicable licenses for each dataset and specify if an open license will be used. If the project is U.S. DOT-funded, an open license should be used for the dataset, unless otherwise restricted by controlled access or prohibited by other intellectual property concerns. If a non-open license is used for this data, include a justification for why a non-open license is used.
    </p>
    <p>
      Suggested elements for this section include, but are not limited to:
      <ul>
        <li>
          <strong>Dataset Title:</strong> Please provide the title of the dataset(s).
        </li>
        <li>
          <strong>License Used:</strong> List the license used for this/these dataset(s) (e.g. CC0 1.0 Universal) and provide a URL linking to where the full text of the license is maintained. Specify whether the license is an open license or a non-open license. An “’open license’ means a legal guarantee that a data asset is made available (A) at no cost to the public and (B) with no restrictions on copying publishing, distributing, transmitting, citing or adapting such asset” (definition from <a target="_blank" href="https://www.congress.gov/bill/115th-congress/house-bill/1770/text" rel="noopener noreferrer">congress.gov's webpage for H.R.1770<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, see SEC. 4. OPEN GOVERNMENT DATA).  A non-open license fails to adhere to some or all of the open license criteria.  
        </li>
        <li>
          <strong>Reason(s) for Non-Open License:</strong> If no license is applied or a non-open license is used for a dataset, provide the reason(s).
        </li>
      </ul>
    </p>

    <h3>3.4	Data Storage and Retention</h3>
    <p>
      Storing and retaining the data is a key part of the data steward’s responsibilities to manage, control, and maintain the quality of a data asset throughout the data life cycle.  
    </p>
    <p>
      In this section, list all of the data storage systems used to store the project’s data, providing details on those data systems, and specifying how long the data will be stored in each system.
    </p>
    <p>
      A public access system provides full data access to the public. A controlled-access system restricts access to certain groups due to data containing PII, CBI, or any other information that threatens the privacy of an individual or group.  
    </p>
    <p>
      An applicant system is managed by the applicant, a U.S. DOT system is managed by the U.S. DOT, and a third-party system is one that is managed by a person, group or organization other than the U.S. DOT or the applicant.
    </p>
    <p>
      Suggested elements for this section include, but are not limited to:
    </p>
    <h4>3.4.1	Storage Systems</h4>
    <p>
      <ul>
        <li>
          <strong>Data Storage System Name:</strong> Provide the name of the data storage system(s) the dataset(s) will be stored in. Provide URLs or other means of accessing the data storage system.
        </li>
        <li>
          <strong>Data Storage System Type:</strong> For each data storage system, state whether the data storage system is:
          <ul>
            <li>“Applicant &mdash; Public System”</li>
            <li>“Applicant &mdash; Controlled System”</li>
              <ul>
                <li>If you are using an applicant-managed system, please state whether the system is currently operational, under development, or will be developed as part of this project.</li>
              </ul>
            <li>“U.S. DOT-managed &mdash; Public System”</li>
            <li>“U.S. DOT-managed &mdash; Controlled-Access System”</li>
            <li>“Third-party &mdash; Public System”</li>
            <li>“Third-party &mdash; Controlled-Access System”</li>
          </ul>  
        </li>
        <li>
          <strong>Dataset Title(s):</strong> Provide all datasets that are anticipated to be stored in each data storage system. 
        </li>
        <li>
          <strong>Initial Storage Date:</strong> Provide the initial date that data will be available in each data storage system. If you are live-streaming data, this may be the initial ingest date.
        </li>
        <li>
          <strong>Frequency of Update:</strong> Provide how frequently the data will be updated in the data storage system once ingestion begins (i.e., "Continually," "Daily," "Weekly," "Monthly," "Annually," "Unknown," "As needed," "Irregular," or "None planned"). Please note the U.S. DOT prefers obtaining the data as quickly as possible after collection, preferably in near real-time and/or through automated uploads.
        </li>
        <li>
          <strong>Archiving and Preservation Period:</strong> Provide the duration for which the dataset will be maintained in each data storage system.
        </li>
      </ul>
    </p>

    <h4>3.4.2	Data Storage System Description</h4>
    <p>
      Provide a description of the data storage system, including any URLs or other means that provide additional details or documentation about the system, details on the system’s data backup, and details on access or controlled-access. If using an applicant or third-party data storage system, please provide additional details demonstrating that the system adheres to the U.S. DOT’s policies for data storage systems, including:
      <ul>
        <li>
          <a target=”_blank” href="https://ntl.bts.gov/public-access/guidelines-evaluating-repositories">Guidelines for Evaluating Repositories for Conformance with the DOT Public Access Plan<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
        </li>
        <li>
          For controlled-access systems, describe how the system enables privacy protection, controlled-access, and collaboration equal to or exceeding the U.S. DOT’s controlled-access system, the <a target=”_blank” href="https://its.dot.gov/data/secure/index.html">Secure Data Commons<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
        </li>
      </ul>
    </p>

    <h4>3.4.3 Cybersecurity Policies</h4>
    <p>
      State any cybersecurity policies that apply to the data storage system or the entirety of this DMP.
    </p>

    <h4>3.4.4	Data Security Policies and Procedures</h4>
    <p>
      Provide the data security policies and procedures this system uses, as well as any actions the awardee has or will take to augment them.
    </p>

    <h4>3.4.5	Back-up and Recovery Policies and Procedures</h4>
    <p>
      Provide the back-up and recovery policies and procedures this data storage system uses, as well as any actions the awardee has or will take to augment them.
    </p>

    <h2 id="post-data-standards">4. Data Standards</h2>
    <h3>4.1	Data Standards</h3>
    <p>
      Please provide details on the data standard(s) used for each dataset and provide access to the data’s metadata and data dictionary.
    </p>
    <p>
      Suggested elements for this section include, but are not limited to:
      <ul>
        <li>
          <strong>Dataset Title:</strong> Provide the dataset title. 
        </li>
        <li>
          <strong>Data Standard(s):</strong> List the name(s) of the data standard(s) in which the data are made available to the U.S. DOT.
        </li>
        <li>
          <strong>Data Standard(s) Digital Object Identifier(s) (DOI[s]):</strong> List the DOI(s) of the standard(s) for the data. If possible, provide a URL to the data standard(s).
        </li>
        <li>
          <strong>Open or Proprietary?:</strong> Indicate whether the data standard(s) is/are “Open” or “Proprietary.” It is important to note that data submitted to the ITS JPO should be platform-independent and non-proprietary to ensure accessibility.
        </li>
        <li>
          <strong>Data Standard(s) Rationale:</strong> Provide an explanation for using the chosen data standard(s). If you are using a proprietary or non-standard data standard, discuss your rationale for using that standard here. If you are using a non-proprietary data standard, state that here and indicate why the standard applies to this dataset.
        </li>
      </ul>
    </p>

    <h3>4.2	Versioning</h3>
    <p>
      Briefly outline the procedures for ensuring that different versions of the dataset(s) are identifiable, properly controlled and properly used. Include any standards used for version control in the outline.
    </p>

    <h3>4.3	Metadata and Data Dictionary</h3>
    <p>
      The ITS JPO requires a metadata schema with each dataset submission to enable search and discovery. Review the <a target=”_blank” href="https://dot-jpo.atlassian.net/wiki/spaces/RDA2/pages/517767201/Metadata+Questionnaire" >Metadata Questionnaire<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a> and provide access and metadata summary information in this section. Note that the U.S. DOT expects metadata in several contexts, including:
      <ul>
        <li>
          At the field level, describing the elements in the data and/or dataset, 
        </li>
        <li>
          At the asset level, describing the contents of the data or dataset generally, in accordance with the Project Open <a target=”_blank” href="https://project-open-data.cio.gov/v1.1/schema/">Data Metadata Schema<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a> or another appropriate standard, or 
        </li>
        <li>
          At any other level that may be appropriate for the data and/or dataset,
        </li>
      </ul>
    </p>
    <p>
      Suggested elements for this section include, but are not limited to:
      <ul>
        <li>
          <strong>Dataset Title:</strong> Provide the dataset title.
        </li>
        <li>
          <strong>Metadata Standards Used:</strong> List the metadata standards used for the dataset. Provide any URLs or documentation for these metadata standards.
        </li>
        <li>
          <strong>Metadata Discoverable:</strong> Indicate whether metadata can be made discoverable by the ITS JPO. 
        </li>
        <li>
          <strong>Data Dictionary Discoverable:</strong> Indicate whether a data dictionary for the dataset can be made discoverable by the ITS JPO.
        </li>
        <li>
          <strong>Metadata and Data Dictionary Access:</strong> Provide any URLs that provide access to the dataset’s metadata and data dictionary.
        </li>
      </ul>
    </p>

    <h4>4.3.1 Metadata Description</h4>
    <p>Describe how metadata will be provided for each dataset, as well as the different contexts metadata will be provided in (e.g. for individual datasets, a group of datasets, etc.).</p>

    <h2 id="post-glossary">5.	Glossary of Terms</h2>
    <p>Provide a list of uncommon terms used when filling out the template and their corresponding definitions.</p>
  </div>
</template>
<script>
export default {
  name: 'post-file-name'
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
