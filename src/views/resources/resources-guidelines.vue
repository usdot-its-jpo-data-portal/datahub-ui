<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <h1>Data Access Guidelines</h1>

    <h2 id="Background-and-Purpose">1. Background & Purpose</h2>
    <p>
      The mission of the Intelligent Transportation Systems Joint Program Office (ITS JPO) is to lead "collaborative and innovative research, development, and implementation of intelligent transportation systems to improve the safety and mobility of people and goods." To further this mission, the ITS JPO is committed to providing timely access to public research data to support third-party research, evaluation, and application development in order to maximize the ITS JPO’s return on investment for ITS research initiatives.
    </p>
    <p>
      These guidelines outline ITS JPO's standards for maximizing access to ITS research data while protecting data integrity, data security, data management best practices, copyright laws, privacy, confidentiality, and confidential business information.
    </p>
    <p>
      These guidelines build upon broader federal and United States Department of Transportation (U.S. DOT) data policies, including but not limited to:
    
    <ul>
      <li>
        Open, Public, Electronic, and Necessary (OPEN) Government Data Act: Title II of
        <a href="https://www.congress.gov/bill/115th-congress/house-bill/4174/text#toc-H8E449FBAEFA34E45A6F1F20EFB13ED95" target="_blank" rel="noopener noreferrer">
          Foundations for Evidence-Based Policymaking Act (H.R. 4174)<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>
      </li>
      <li>
        U.S. DOT Public Access Plan: 
        <a href="https://www.transportation.gov/sites/dot.gov/files/docs/Official DOT Public Access Plan.pdf" target="_blank" rel="noopener noreferrer">
          Increasing Access to Federally Funded Research Results<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab.">
        </a>
      </li>
      <li>
        Regulatory requirements stipulated under Title 23 and Title 49 of the United States Code (USC)
      </li>
      <li>
        Office of Science and Technology Policy (OSTP) Memorandum:
        <a href="https://obamawhitehouse.archives.gov/sites/default/files/microsites/ostp/ostp_public_access_memo_2013.pdf" target="_blank" rel="noopener noreferrer">
          Increasing Access to the Results of Federally Funded Scientific Research (February 22, 2013)<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>
      </li>
    </ul>
    </p>
    <p>
      The goal of these guidelines is to:
      <ul>
        <li>Decrease time from research to insight for ITS technologies</li>
        <li>Harmonize data ingest, formats, and analyses across similar ITS data collections</li>
        <li>Facilitate early user input into U.S. DOT research efforts to inform multi-phased research projects in real time and improve future activities</li>
        <li>Enable development of third-party ITS applications</li>
      </ul>
    </p>

    <h2 id="Scope">2. Scope</h2>
    <p>
      These guidelines apply to all research projects funded, either fully or partially, by the ITS JPO. This includes projects run by federal employees with ITS JPO funds, any new awards, and any new funding agreements. The ITS JPO may choose not to incorporate these guidelines for specific research projects, such as those not collecting or creating data.
    </p>
    <p>These guidelines do not bind the public, except as authorized by law or as incorporated into a federal project, contract, grant, or other agreement.</p>

    <h2 id="Audience">3. Audience</h2>
    <p>
      These guidelines are to be used by ITS JPO Program Managers and U.S. DOT personnel dealing with contracts, grants, or other agreements as standards for projects producing ITS-related data, as well as by project teams when creating and publishing ITS JPO-funded data. A project team is an organizational entity or individual involved with a research project creating data for the ITS JPO. A project team may include, but is not limited to, federal staff, contractors, grantees, and researchers.
    </p>

    <h2 id="Access">4. Access</h2>
    <p>
      Consistent with federal policy <a href="https://www.congress.gov/bill/115th-congress/house-bill/4174/text#toc-H8E449FBAEFA34E45A6F1F20EFB13ED95" target="_blank" rel="noopener noreferrer">(OPEN Government Data Act<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>), project teams must provide public access to data collected or created through the project (including data used to produce final research results) associated metadata, and documentation, unless a specific privacy, confidentiality, security, or other valid restriction on public access is identified. Project teams must make explicit reference to any perceived exemptions from public access in solicitation, funding agreement, project, and supplemental documentation for U.S. DOT review. Where valid restrictions to public access exist, project teams must work to make as many aspects as possible of their data publicly accessible. This may include making a redacted version of the data publicly accessible or restricting access only to sensitive portions of the data. At a minimum, controlled access to data and associated documentation necessary to achieve core research goals must be provided to the U.S. DOT. Data, including final research results, determined not to be subject to the aforementioned exemptions must be publicly accessible by default.
    </p>
    <p>
      Final research results must satisfy the reporting and compliance guidelines as set forth in the <a href="https://www.transportation.gov/sites/dot.gov/files/docs/Official%20DOT%20Public%20Access%20Plan.pdf" target="_blank" rel="noopener noreferrer">U.S.DOT Public Access Plan<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, including, but not limited to, the use of Open Researcher and Contributor ID (ORCID) numbers, the creation and maintenance of a research project record in the Transportation Research Board’s (TRB) Research in Progress (RiP) database, and the timely and complete submission of all required publications and associated digital datasets as such terms are defined in the <a href="https://www.transportation.gov/sites/dot.gov/files/docs/Official%20DOT%20Public%20Access%20Plan.pdf" target="_blank" rel="noopener noreferrer">U.S. DOT Public Access Plan<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>. Additional information about how to comply with the guidelines can be found at: <a href="https://ntl.bts.gov/public-access/how-comply" target="_blank" rel="noopener noreferrer">https://ntl.bts.gov/public-access/how-comply<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>. The ITS JPO will assist awardees in compliance with these broader U.S. DOT guidelines.
    </p>
    <p>
      All federally-funded data must be listed in the U.S. DOT's enterprise data inventory and made available in the federal catalog (<a href="http://www.data.gov/" target="_blank" rel="noopener noreferrer">www.data.gov<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>). For assistance with onboarding data to <a href="" target="_blank" rel="noopener noreferrer">Data.gov<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, especially for data that is made accessible on ITS DataHub, project teams can contact <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov</a>. 
    </p>
    <p>
      Project teams must provide data in near-real time, via streaming or batch uploads, throughout the period of data collection or creation. The ITS JPO encourages project teams to provide sample or test datasets early in a project to refine data dissemination processes and formats, and use automated processes to cut down on the time from data generation to dissemination. When made accessible, data must be available in an open format that is platform independent, use an open standard, be machine-readable, and be available to the public for free and without restrictions that would impede the reuse of the data. The priorities of public access, open format and open data should be reflected in solicitation, funding agreement, project, and supplemental documentation including the project's Data Management Plan.
    </p>

    <h2 id="Rights-and-Ownership">5. Rights & Ownership</h2>
    <p>
      The ITS JPO uses <a href="http://farsite.hill.af.mil/reghtml/regs/far2afmcfars/fardfars/far/52_227.htm#P254_51765" target="_blank" rel="noopener noreferrer">FAR 52.227-14<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a> in contracts and <a href="https://www.law.cornell.edu/cfr/text/2/200.315" target="_blank" rel="noopener noreferrer">2 C.F.R. 200.315<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a> in grants to acquire rights to data for the government. As a default position, the ITS JPO will obtain unlimited rights to all federally-funded data. Project teams must detail any claims and associated rationale for limiting the government's rights in solicitation, funding agreement, project, and supplemental documentation - including the project's Data Management Plan - for review by the U.S. DOT.
    </p>
    <p>
      Per federal guidance, project teams must also apply open licenses to federally-funded data so there are no restrictions on the use, disclosure, reproduction, preparation of derivative works, distribution of copies to the public, performance publicly and display publicly, in any manner and for any purpose, and to have or permit others to do so. The Open Source Initiative approves open source licenses that are "popular and widely used," a list of which can be found on their <a href="https://opensource.org/licenses/category" target="_blank" rel="noopener noreferrer">website<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>.
    </p>
    <p>
      The public may use ITS JPO-funded research data as the basis for wholly proprietary and commercial systems. The ITS JPO requests that users of this research data disclose its lineage, but maintain no legal right to require disclosure. 
    </p>

    <h2 id="Storage-and-Retention">6. Storage & Retention</h2>
    <p>
      Awardees must store their data in systems that provide an appropriate level of user access, functionality and data life cycle management. For more guidelines on acceptable data storage systems for U.S. DOT, see <a href="https://ntl.bts.gov/public-access/guidelines-evaluating-repositories" target="_blank" rel="noopener noreferrer">Guidelines for Evaluating Repositories for Conformance to the DOT Public Access Plan<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>. 
    </p>
    <p>
      Project teams may use different systems to store different types of data (e.g., public, non-public, primary, derived, streaming, static). The ITS JPO has designated several public and controlled access data systems that project teams can use to meet their data access and retention requirements, including registering metadata in the <a href="https://its.dot.gov/data/" target="_blank" rel="noopener noreferrer">ITS DataHub<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>. Project teams are encouraged to use these shared resources but can propose alternative systems for storing and providing access to data via their preliminary Data Management Plan (DMP) and supplemental information. If ITS JPO determines that a proposed system does not provide an appropriate level of user access, functionality and data life cycle management, the  project team must use the systems designated by the ITS JPO. Wherever possible, these determinations will be made prior to award.
    </p>
    <p>
      Datasets in ITS DataHub are required to be retained for a minimum of five years in accordance with the <a href="https://www.fhwa.dot.gov/legsregs/directives/orders/hoit-hq_.cfm" target="_blank" rel="noopener noreferrer">ITS DataHub Records Disposition Manual<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, NARA schedule number <a href="https://www.archives.gov/files/records-mgmt/rcs/schedules/departments/department-of-transportation/rg-0406/daa-0406-2014-0003_sf115.pdf" target="_blank" rel="noopener noreferrer">DAA-0406-2014-0003<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>. This retention period begins when U.S. DOT first receives access to a dataset. Project teams should be aware that the ITS DataHub Records Disposition Manual does not replace other potentially relevant disposition schedules.
    </p>

    <h2 id="Standards">7. Standards</h2>
    <p>
      Consistent with federal policy, project teams must use standards to promote data interoperability and openness, along with any other relevant standards, such as geospatial data standards. Where existing standards are insufficient, project teams must describe in their DMP how they will contribute to the development of new standards.
    </p>
    <p>
      Project teams must provide metadata on all data produced for their project prior to the data being made publicly accessible. Project teams can provide additional metadata beyond the common core fields if desired, and reference more detailed documentation. Consistent with federal policy, ITS JPO will provide this metadata to the public via the <a href="https://its.dot.gov/data/" target="_blank" rel="noopener noreferrer">ITS DataHub<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a> and other data catalogs to facilitate data discovery unless a specific privacy, confidentiality, security, or other valid restriction is identified. Project teams can claim such restrictions for approval by U.S. DOT when they submit their metadata. The ITS JPO may request more detailed documentation and data dictionaries where necessary for users to understand and use the data.
    </p>
    <p>
      ITS JPO will issue a Digital Object Identifier (DOI) for ITS JPO-funded projects for use in citations. The assigned DOI should be referenced on all research data documentation.
    </p>
    <p>
      All ITS JPO-funded data, metadata, and associated documentation must be <a href="https://its.dot.gov/data/" target="_blank" rel="noopener noreferrer"> 
      508-compliant<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a> to allow reuse and evaluation of the data by users with disabilities.
    </p>

    <h2 id="Security-and-Privacy">8. Security & Privacy</h2>
    <p>
      Consistent with federal and U.S. DOT policy (e.g., <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf" target="_blank" rel="noopener noreferrer"> FIPS 199<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, 
      <a href="https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final" target="_blank" rel="noopener noreferrer"> NIST SP 800-37<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, <a href="https://cms8.dot.gov/sites/dot.gov/files/docs/DOT%20Order%201351.37%2C%20Departmental%20Cybersecurity%20Policy.pdf" target="_blank" rel="noopener noreferrer">
      DOT Cybersecurity Policy<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a> and DOT Departmental Cybersecurity Compendium), all U.S. DOT and U.S. DOT contractor information systems that generate, store, process, transfer, display, or communicate information must be protected at a level commensurate with the potential impact of a loss of confidentiality, integrity, or availability on the U.S. DOT’s operations, assets, or individuals. This includes information systems that store ITS JPO-funded data. As such, commensurate security specifications or requirements must be incorporated into solicitation, funding agreement, project, and supplemental documentation.
    </p>
    <p>
      If data is developed that will collect, store, or process sensitive information (e.g., personally identifiable information (PII), confidential business information (CBI), etc.), project teams must work with the Program Manager and relevant modal offices (e.g, Modal Privacy Office, etc.) to identify, evaluate and mitigate risk in accordance with relevant policy and guidelines (e.g., 
      <a href="https://www.transportation.gov/individuals/privacy/privacy-risk-management-policy" target="_blank" rel="noopener noreferrer">
      DOT Privacy Risk Management Policy<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, etc.) and to ensure that project risk management obligations are upheld. The project team must report actual or suspected incidents of sensitive information handling, including breaches and violations, in accordance with relevant policies and guidelines (e.g., <a href="https://www.transportation.gov/individuals/privacy/pii-breach-notification-controls" target="_blank" rel="noopener noreferrer">DOT Order 1351.19 PII Breach Notification Controls<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, etc.).
    </p>


    <h2 id="Documentation">9. Documentation</h2>
    <h3>Data Management Plan</h3>
    <p>
      Project teams must include a preliminary DMP in their proposal, or for intramural projects prior to the beginning of the project, that summarizes how they will comply with these guidelines and manage data throughout the project. The U.S. DOT will use the information in the preliminary DMP as part of its evaluation criteria for award and may ask for clarifications or changes from project teams prior to award to ensure the U.S. DOT and/or public receives appropriate data access. The preliminary DMP must provide a preliminary overview of data that may be collected or created through the project, and include the following:
      <ul>
        <li>
          DATA DESCRIPTION: Address the nature, scope, and scale of the data that will be collected or created. Define data elements within a detailed data dictionary.
        </li>
        <li>
          ACCESS POLICIES: Describe any access restrictions that may apply to your data.
        </li>
        <li>
          DATA STORAGE AND RETENTION: Describe where you intend to store your data and why you have chosen that particular option. Different systems may be designated for different types of data (e.g., public, non-public). Also describe how long you intend to retain your data in these systems.
        </li>
        <li>
          DATA RIGHTS: Describe who will hold the intellectual property rights for your data, and any other legal requirements that might need to be addressed.
        </li>
      </ul>
    </p>
    <p>
      The updated DMP must include an updated version of all of the information in the preliminary DMP as well as the following:
      <ul>
        <li>
          TIMING: Describe when your data will be shared, and how frequently it will be updated.
        </li>
      </ul>
    </p>
    <p>
      Project teams must then maintain the DMP throughout the period of performance with more detailed, updated information as it becomes available. At a minimum, the project teams must update the DMP every six months and any time the project teams shares a new dataset or changes data standards used. By the end of the project, the DMP must be a complete and accurate record of all data collected or created through the project.
    </p>
    <p>
      The DMP must demonstrate the project's full compliance with these guidelines and all applicable U.S. DOT and federal policies and guidance.
    </p>

    <h2 id="Implementation-Roles-and-Responsibilities">10. Implementation Roles & Responsibilities</h2>
    <p>
      There are several key roles for implementing these guidelines. The roles are as follows:
      <ul>
        <li>
          Project Team: An organizational entity or individual involved with a research project creating data for the ITS JPO. A project team may include, but is not limited to, federal staff, contractors, grantees, and researchers. Their primary role is the project principal investigator and ITS DataHub data provider. Main responsibilities include: a) creating and maintaining a DMP for their respective research project; b) identifying, collecting, managing and retaining data for their respective project as per their DMP; c) preparing and coordinating data submissions with ITS JPO; d) answering questions about their data; e) responding to access requests for their controlled data; e) complying with all ITS JPO Data Access guidelines.
        </li>
        <li>
          U.S. DOT Project Manager: The primary role is oversight for the research project. A U.S. DOT Project Manager is assigned to each ITS JPO-funded project. Main responsibilities include: a) coordinating execution of the project with the ITS JPO-funded project team; b) receiving, reviewing and approving the project's DMP; c) coordinating with the ITS JPO on research project execution and data submission.
        </li>
        <li>
          ITS JPO: The primary role is to administer the ITS JPO Data Access guidelines and the <a href="" target="_blank" rel="noopener noreferrer">ITS DataHub<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>, as well as provide technical assistance to ITS JPO-funded project data providers, project awardees and project managers. Main responsibilities include: a) defining guidelines, data management standards and <a href="" target="_blank" rel="noopener noreferrer">ITS DataHub<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a> guidelines; b) operating and maintaining the <a href="" target="_blank" rel="noopener noreferrer">ITS DataHub<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>; c) providing technical assistance to project teams to create a DMP and successfully implement the project's DMP. While the ITS JPO expects project teams to fully implement their DMP, the ITS JPO will provide technical assistance to clarify any ambiguity around data management and assist the project in implementing their DMP.
        </li>
        <li>
          U.S. DOT CIO: The primary role is promoting the effective and efficient design and operation of all major information resource management processes within U.S. DOT.
        </li>
      </ul>
    </p>

    <h2 id="Definitions">Definitions</h2>
    <ul>
      <li>
        <strong>Applicants</strong>: Persons responding to a solicitation by the U.S. DOT for an ITS JPO-funded grant, contract, or other funding agreement.
      </li>
      <li>
        <strong>Award</strong>: Any funding agreement, such as a contract or grant, signed by a contracting officer that permits the expenditure of government funds or use of such government resources to a provider of the goods or services requested in the funding agreement.
      </li>
      <li>
        <strong>Awardee</strong>: An organizational entity or individual that receives a written agreement from a U.S. DOT contracting officer to receive funds from the ITS JPO and/or the U.S. DOT in order to carry out a project or activity.
      </li>
      <li>
        <strong>Confidentiality</strong>: The ability of only authorized users to access controlled access data.
      </li>
      <li>
        <strong>Confidential business information</strong>: Trade secrets and commercial or financial information obtained from a person and privileged or confidential.
      </li>
      <li>
        <strong>Controlled access</strong>: Restricting access to certain groups of persons due to data containing personally identifiable information (PII), information that threatens privacy of an individual or group, information that threatens confidentiality of a person or group, and/or contains confidential business information.
      </li>
      <li>
        <strong>Data</strong>: Recorded information, regardless of form or the media on which the data is recorded.
      </li>
      <li>
        <strong>Data discovery</strong>: The ability to find data from search engines, such as the ITS DataHub.
      </li>
      <li>
        <strong>Data integrity</strong>: The assurance that digital information is uncorrupted and can only be accessed or modified by those authorized to do so. Integrity involves maintaining the consistency, accuracy and trustworthiness of data over its entire life cycle.
      </li>
      <li>
        <strong>Data owner</strong>: The person or organization that has the authority, ability, and responsibility to access, create, modify, store, use, share, and protect data. Data owners have the right to delegate these privileges and responsibilities to other parties. Please note, for U.S. DOT-funded projects this may be U.S. DOT.
      </li>
      <li>
        <strong>Data provider</strong>: An individual or team that collects, prepares and/or submits research datasets to the ITS JPO.
      </li>
      <li>
        <strong>Data security</strong>: Protective digital privacy measures that are applied to prevent unauthorized access to computers, databases and websites. Data security also protects data from corruption.
      </li>
      <li>
        <strong>Data steward</strong>: At the direction of the data owner, the person or organization that is delegated the privileges and responsibilities to manage, control, and maintain the quality of a data asset throughout the data life cycle. The data steward may also apply appropriate protections, restrictions, and other safeguards depending on the nature of the data, subject to the direction of the data owner.
      </li>
      <li>
        <strong>Derived data</strong>: Data derived thorough analysis of other data and shared as part of a final report to communicate the methodology and findings of a research project.
      </li>
      <li>
        <strong>Limited rights data</strong>: Data, other than computer software, that embody trade secrets or are commercial or financial and confidential or privileged, to the extent that such data pertain to items, components, or processes developed at private expense, including minor modifications.
      </li>
      <li>
        <strong>Metadata</strong>: Structural or descriptive information about data such as content, format, source, rights, accuracy, provenance, frequency, periodicity, granularity, publisher or responsible party, contact information, method of collection, and other descriptions.
      </li>
      <li>
        <strong>Personally Identifiable Information (PII)</strong>: Information that alone or in conjunction with additional information can threaten the privacy or identity of an individual.
      </li>
      <li>
        <strong>Primary data</strong>: Data collected during research that has not had significant analysis performed on it.
      </li>
      <li>
        <strong>Privacy</strong>: The ability of an individual to keep his or her personal information to themselves.
      </li>
      <li>
        <strong>Public</strong>: The general public, as well as qualified researchers or other similar entities.
      </li>
      <li>
        <strong>Public access</strong>: Data asset is or could be made publicly available to all without restrictions.
      </li>
      <li>
        <strong>Research</strong>: Creative work undertaken on a systemic basis in order to increase the stock of knowledge, including knowledge of man, culture and society.
      </li>
      <li>
        <strong>Research project</strong>: A project designed to accomplish a research objective.
      </li>
    </ul>

    <h2 id="References">References</h2>
    <ul>
      <li><strong>About ITS JPO.</strong> U.S. Department of Transportation.
        <a href="https://www.its.dot.gov/about/its_jpo.htm" target="_blank" rel="noopener noreferrer">
          https://www.its.dot.gov/about/its_jpo.htm<img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab.">
        </a>
      </li>
      <li><strong>Confidential Business Information, 19 C.F.R. § 201.6.</strong> 
        <a href="https://www.law.cornell.edu/cfr/text/19/201.6" target="_blank" rel="noopener noreferrer">
          https://www.law.cornell.edu/cfr/text/19/201.6<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>
      </li>

      <li><strong>Data.gov.</strong> U.S. General Services Administration.
        <a href="https://www.data.gov/" target="_blank" rel="noopener noreferrer">
          https://www.data.gov/<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>
      </li>
      <li><strong>DCAT-US Schema v1.1 (Project Open Data Metadata Schema).</strong>
      &nbsp;U.S. General Services Administration, November 6, 2014.
        <a href="https://resources.data.gov/resources/dcat-us/" target="_blank" rel="noopener noreferrer">
          https://resources.data.gov/resources/dcat-us/
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>DOT Departmental Cybersecurity Compendium:</strong>
        The Departmental Cybersecurity Policy (DOT Order 1351.37) serves as the overarching, foundational directive for cybersecurity for the U.S. DOT and authorizes the U.S. DOT Chief Information Officer to develop and disseminate supplemental policies, guidance, procedures, standards and processes that implement mandatory cybersecurity requirements required of the U.S. DOT by other entities. These entities include, but are not limited to, Congress, OMB, NIST, and DHS. This collection of supplemental policies and guidance is collectively referred to as the Departmental Cybersecurity Compendium. The Departmental Cybersecurity Compendium:
        <ul>
          <li>Incorporates and cross references cybersecurity requirements and national standards such as NIST Special Publication (SP) 800-53, according to information assurance control families in a manner that clearly presents scope and applicability.</li>
          <li>Presents all U.S. DOT cybersecurity directives in a manner that enables the U.S. DOT to scale and supplement baseline Departmental directives to meet unique requirements, if necessary.</li>
          <li>Exists as a living document, subject to additions, deletions, and/or content modifications based on changing requirements, technology, and threats, as deemed necessary by the U.S. DOT CIO.</li>
        </ul>
      </li>
      <li><strong>DOT Order 1351.18: Departmental Privacy Risk Management Policy.</strong>
          U.S. Department of Transportation, September 30, 2014.
        <a href=" https://www.transportation.gov/individuals/privacy/privacy-risk-management-policy" target="_blank" rel="noopener noreferrer">
           https://www.transportation.gov/individuals/privacy/privacy-risk-management-policy.
          <img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab.">
        </a>.
      </li>
      <li><strong>DOT Order 1351.19: Personally Identifiable Information (PII) Breach Notification Controls.</strong>
        U.S. Department of Transportation, May 5, 2009.
        <a href="https://www.transportation.gov/individuals/privacy/pii-breach-notification-controls" target="_blank" rel="noopener noreferrer">
          https://www.transportation.gov/individuals/privacy/pii-breach-notification-controls
          <img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab.">
        </a>.
      </li>
      <li><strong>DOT Order 1351.28: Records Management Policy.</strong>
        U.S. Department of Transportation, August 11, 2016.
        <a href="https://www.transportation.gov/sites/dot.gov/files/2020-03/Policy%20-%20Records%20Management%20%281351%2028%29%20-%20Policy%20-%20Final_signed.pdf" target="_blank" rel="noopener noreferrer">
          https://www.transportation.gov/sites/dot.gov/files/2020-03/Policy%20-%20Records%20Management%20%281351%2028%29%20-%20Policy%20-%20Final_signed.pdf
          <img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab.">
        </a>.
      </li>
      <li><strong>DOT Order 1351.37: Departmental Cybersecurity Policy.</strong>
        U.S. Department of Transportation, June 21, 2011.
        <a href="https://cms8.dot.gov/sites/dot.gov/files/docs/DOT%20Order%201351.37%2C%20Departmental%20Cybersecurity%20Policy.pdf" target="_blank" rel="noopener noreferrer">
          https://cms8.dot.gov/sites/dot.gov/files/docs/DOT%20Order%201351.37%2C%20Departmental%20Cybersecurity%20Policy.pdf
          <img class="in-line-external-link-icon" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Federal Plain Language Guidelines.</strong>
        U.S. General Services Administration.
        <a href="https://www.plainlanguage.gov/guidelines/" target="_blank" rel="noopener noreferrer">
          https://www.plainlanguage.gov/guidelines/
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>FHWA Records Disposition Manual (Washington Headquarters) - ITS DataHub.</strong>
        U.S. Department of Transportation.
        <a href="https://www.fhwa.dot.gov/legsregs/directives/orders/hoit-hq_.cfm" target="_blank" rel="noopener noreferrer">
          https://www.fhwa.dot.gov/legsregs/directives/orders/hoit-hq_.cfm
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>FIPS PUB 199: Standards for Security Categorization of Federal Information and Information Systems.</strong>
        National Institute of Standards and Technology, U.S. Department of Commerce, February 2004.
        <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf" target="_blank" rel="noopener noreferrer">
          https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.199.pdf
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Foundations for Evidence-Based Policymaking Act,</strong>
        Pub.L. 115–435, 2019.
        <a href="https://www.congress.gov/bill/115th-congress/house-bill/4174/text#toc-H8E449FBAEFA34E45A6F1F20EFB13ED95" target="_blank" rel="noopener noreferrer">
          https://www.congress.gov/bill/115th-congress/house-bill/4174/text#toc-H8E449FBAEFA34E45A6F1F20EFB13ED95
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Geospatial Data Act of 2018.</strong>
        43 USC 2801-2811 (2018).
        <a href="https://www.fgdc.gov/gda/43-usc-ch-46-geospatial-data-geospatial-data-act.pdf" target="_blank" rel="noopener noreferrer">
          https://www.fgdc.gov/gda/43-usc-ch-46-geospatial-data-geospatial-data-act.pdf
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Geospatial Standards.</strong>
        Geo Platform.gov, August 12, 2019.
        <a href="https://communities.geoplatform.gov/ngda-transportation/geospatial-standards/" target="_blank" rel="noopener noreferrer">
          https://communities.geoplatform.gov/ngda-transportation/geospatial-standards/
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Government Contracting Terms & Definitions.</strong>
        Southern Alleghenies Planning & Development Commission.
        <a href="http://www.sapdc.org/business/government-contracting-terms-definitions" target="_blank" rel="noopener noreferrer">
          http://www.sapdc.org/business/government-contracting-terms-definitions
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Guidelines for Evaluating Repositories for Conformance with the DOT Public Access Plan.</strong>
        U.S. Department of Transportation, January 26, 2018.
        <a href="https://ntl.bts.gov/public-access/guidelines-evaluating-repositories" target="_blank" rel="noopener noreferrer">
          https://ntl.bts.gov/public-access/guidelines-evaluating-repositories
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Highways,</strong>
        23 U.S.C. 101-610.
        <a href=" https://www.law.cornell.edu/uscode/text/23" target="_blank" rel="noopener noreferrer">
           https://www.law.cornell.edu/uscode/text/23
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>How to Comply.</strong>
        U.S. Department of Transportation, April 18, 2018.
        <a href="https://ntl.bts.gov/public-access/how-comply" target="_blank" rel="noopener noreferrer">
          https://ntl.bts.gov/public-access/how-comply
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Increasing Access to the Results of Federally Funded Scientific Research.</strong>
        Office of Science and Technology Policy, February 22, 2013.
        <a href="https://obamawhitehouse.archives.gov/sites/default/files/microsites/ostp/ostp_public_access_memo_2013.pdf" target="_blank" rel="noopener noreferrer">
          https://obamawhitehouse.archives.gov/sites/default/files/microsites/ostp/ostp_public_access_memo_2013.pdf
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Intangible Property,</strong> 2 C.F.R. § 200.315 (2014).
      </li>
      <li><strong>IT Accessibility Laws and Policies.</strong>
        U.S. General Services Administration, July 2020. 
        <a href="https://www.section508.gov/manage/laws-and-policies" target="_blank" rel="noopener noreferrer">
          https://www.section508.gov/manage/laws-and-policies
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>ITS DataHub.</strong>
         U.S. Department of Transportation.
        <a href="https://www.its.dot.gov/data/" target="_blank" rel="noopener noreferrer">
          https://www.its.dot.gov/data/
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>The Open Source Definition.</strong>
        Open Source Initiative, March 22, 2007.
        <a href="https://opensource.org/osd" target="_blank" rel="noopener noreferrer">
          https://opensource.org/osd
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Plan to Increase Public Access to the Results of Federally-Funded Scientific Research Results.</strong>
        U.S. Department of Transportation, December 16, 2015.
        <a href="https://www.transportation.gov/sites/dot.gov/files/docs/Official%20DOT%20Public%20Access%20Plan%20ver%201.1.pdf" target="_blank" rel="noopener noreferrer">
          https://www.transportation.gov/sites/dot.gov/files/docs/Official%20DOT%20Public%20Access%20Plan%20ver%201.1.pdf
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Request for Records Disposition Authority.</strong>
        National Archives and Records Administration, March 4, 2016.
        <a href="https://www.archives.gov/files/records-mgmt/rcs/schedules/departments/department-of-transportation/rg-0406/daa-0406-2014-0003_sf115.pdf" target="_blank" rel="noopener noreferrer">
          https://www.archives.gov/files/records-mgmt/rcs/schedules/departments/department-of-transportation/rg-0406/daa-0406-2014-0003_sf115.pdf
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Rights in Data – General,</strong>
        FAR § 52.227-14 (2014).
      </li>
      <li><strong>Rights in Data and Copyrights,</strong>
        FAR § 27.4.
      </li>
      <li><strong>SP 800-37 Rev. 2: Risk Management Framework for Information Systems and Organizations: A System Life Cycle Approach for Security and Privacy.</strong>
        National Institute of Standards and Technology, U.S. Department of Commerce, December 2018.
        <a href="https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final" target="_blank" rel="noopener noreferrer">
          https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Technology Dictionary.</strong>
        Techopedia.
        <a href="https://www.techopedia.com/dictionary" target="_blank" rel="noopener noreferrer">
          https://www.techopedia.com/dictionary
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
      <li><strong>Transportation,</strong>
        49 U.S.C. 101-80504.
        <a href="https://www.law.cornell.edu/uscode/text/49" target="_blank" rel="noopener noreferrer">
          https://www.law.cornell.edu/uscode/text/49
          <img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab.">
        </a>.
      </li>
    </ul>
    <p class="date-last-updated">Last updated: Wednesday, September 30, 2020</p>
  </div>
</template>
<script>
export default {
  name: 'ResourcesGuidelines'
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
  .date-last-updated{
    padding-top: 1em;
  }
</style>
