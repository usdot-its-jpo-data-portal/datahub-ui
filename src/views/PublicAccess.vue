<template>
<div id="search-wrapper">
    <div id='searchTerms'>
        <div class="publicAccess public-access-page">
            <h1 id="public-access-top"><em>Draft ITS JPO Data Access Center of Excellence Requirements</em></h1><br>
            <p>Table of Contents:</p>
            <ul>
                <li><a href="#background-and-purpose">Background and Purpose</a></li>
                <li><a href="#scope">Scope</a></li>
                <li><a href="#definitions">Definitions</a></li>
                <li><a href="#requirements">Requirements</a></li>
                    <ul class="list-half-indent">
                        <li><a href="#requirements-data-management-plan">A. Data Management Plan</a></li>
                        <li><a href="#requirements-access-best-practices">B. Access Requirements</a></li>
                        <li><a href="#requirements-data-storage-retention">C. Data Storage and Retention</a></li>
                        <li><a href="#requirements-data-rights">D. Data Rights</a></li>
                        <li><a href="#requirements-data-standards">E. Data Standards</a></li>
                        <li><a href="#requirements-timing">F. Timing</a></li>
                        <li><a href="#requirements-metadata-documentation">G. Metadata and Documentation</a></li>
                    </ul>
                <li><a href="#best-practices-implementation">Implementation Roles and Responsibilities</a></li>
                <li><a href="#resources">Resources</a></li>
                <li><a href="#references">References</a></li>

            </ul>

            <br />
            <h2 id="background-and-purpose">Background and Purpose</h2>
            <p>The mission of the ITS JPO is to support "the overall advancement of ITS through investments in major research initiatives, exploratory studies and a deployment support program including technology transfer and training." To further this mission, the ITS JPO Data Center of Excellence is committed to providing timely access to public research data to support third-party research, evaluation, and application development in order to maximize the ITS JPO’s investment in ITS research initiatives.
                <br /><br />These requirements outline ITS JPO's standards for maximizing access to ITS research data while protecting data integrity, data security, data management best practices, copyright laws, privacy, confidentiality, and confidential business information.
                <br /><br />These requirements build upon broader federal and United States Department of Transportation (USDOT) data policies, including but not limited to:
            </p>
            <ul>
                <li>Open, Public, Electronic, and Necessary (OPEN) Government Data Act: Title II of <a href="https://www.congress.gov/bill/115th-congress/house-bill/4174/text#toc-H8E449FBAEFA34E45A6F1F20EFB13ED95" target="_blank" rel="noopener noreferrer">Foundations for Evidence-Based Policymaking Act (H.R. 4174)</a></li>
                <li>USDOT Public Access Plan: <a href="https://www.transportation.gov/sites/dot.gov/files/docs/Official DOT Public Access Plan.pdf" target="_blank" rel="noopener noreferrer">Increasing Access to Federally Funded Research Results</a></li>
                <li>Regulatory requirements stipulated under Title 23 and Title 49 of the United States Code (USC)</li>
                <li>Office of Science and Technology Policy (OSTP) Memorandum: <a href="https://obamawhitehouse.archives.gov/sites/default/files/microsites/ostp/ostp_public_access_memo_2013.pdf" target="_blank" rel="noopener noreferrer">Increasing Access to the Results of Federally Funded Scientific Research (February 22, 2013)</a></li>
                <li>Federal Open Data Policy: <a href="https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2013/m-13-13.pdf" target="_blank" rel="noopener noreferrer">M-13-13 memorandum for the Heads of Executive Departments and Agencies</a></li>
            </ul>
            <br>
            <h2 id="scope">Scope <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h2>
            <p>These requirements apply to all research projects funded, either fully or partially, by the ITS JPO. Any ITS JPO-funded research project, including new awards and modifications and extensions to existing awards, is subject to its requirements. These requirements may be waived by the ITS JPO for research projects that do not involve the collection or creation of any data.</p>
            
            <br />
            <h2 id="definitions">Definitions <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h2>
            <ul>
                <li id="def-applicants"><strong>Applicants</strong>: persons responding to a solicitation by the USDOT for an ITS JPO-funded grant, contract, or other funding agreement.</li>
                <li id="def-award"><strong>Award</strong>: any funding agreement, such as a contract or grant, signed by a contracting officer that permits the expenditure of government funds or use of such government resources to a provider of the goods or services requested in the funding agreement.</li>
                <li id="def-awardee"><strong>Awardee</strong>: An organizational entity or individual that receives a written agreement from a USDOT contracting officer to receive funds from the ITS JPO and/or the USDOT in order to carry out a project or activity.</li>
                <li id="def-confidentiality"><strong>Confidentiality</strong>: the ability of only authorized users to access controlled access data.</li>
                <li id="def-confidential-business-information"><strong>Confidential business information</strong>: trade secrets and commercial or financial information obtained from a person and privileged or confidential.</li>
                <li id="def-controlled-access"><strong>Controlled access</strong>: Restricting access to certain groups of persons due to data containing personally identifiable information (PII), information that threatens privacy of an individual or group, information that threatens confidentiality of a person or group, and/or contains confidential business information.</li>
                <li id="def-data"><strong>Data</strong>: recorded information, regardless of form or the media on which the data is recorded.</li>
                <li id="def-data-discovery"><strong>Data discovery</strong>: The ability to find data from search engine, such as the <a href="https://www.its.dot.gov/data/" target="_blank" rel="noopener noreferrer">ITS DataHub</a>.</li>
                <li id="def-data-integrity"><strong>Data integrity</strong>: the assurance that digital information is uncorrupted and can only be accessed or modified by those authorized to do so. Integrity involves maintaining the consistency, accuracy and trustworthiness of data over its entire life cycle.</li>
                <li id="def-data-provider"><strong>Data provider</strong>: An individual or team that collects, prepares and/or submits research data sets to the ITS JPO.</li>
                <li id="def-data-security"><strong>Data security</strong>: protective digital privacy measures that are applied to prevent unauthorized access to computers, databases and websites. Data security also protects data from corruption.</li>
                <li id="def-limited-rights-data"><strong>Limited rights data</strong>: Data, other than computer software, that embody trade secrets or are commercial or financial and confidential or privileged, to the extent that such data pertain to items, components, or processes developed at private expense, including minor modifications.</li>
                <li id="def-metadata"><strong>Metadata</strong>: Structural or descriptive information about data such as content, format, source, rights, accuracy, provenance, frequency, periodicity, granularity, publisher or responsible party, contact information, method of collection, and other descriptions.</li>
                <li id="def-personally-identifiable-information"><strong>Personally Identifiable Information (PII)</strong>: information that alone or in conjunction with additional information can threaten the privacy or identity of an individual.</li>
                <li id="def-primary-data"><strong>Primary data</strong>: Data collected during research that has not had significant analysis performed on it.</li>
                <li id="def-privacy"><strong>Privacy</strong>: The ability of an individual to keep his or her personal information to themselves.</li>
                <li id="def-public"><strong>Public</strong>: The general public, as well as qualified researchers or other similar entities.</li>
                <li id="def-public-access"><strong>Public access</strong>: Pertaining to the following requirements:</li>
                    <ul>
                        <li>The public is aware of the digital data set holdings and/or the digital data sets generated, fully or partially, through federally funded research</li>
                        <li>The public is able to download and analyze publications and/or digital data sets unless specifically precluded by privacy, confidentiality or
                            CBI</li>
                        <li>Public access may be restricted to subsets of the public based on the sensitivity of the publication and/or digital data set</li>
                        <li>Public access may be controlled by system permissions and/or user roles and responsibilities.</li>
                    </ul>
                <li><strong>Research</strong>: Creative work undertaken on a systemic basis i n order to increase the stock of knowledge, including knowledge of man, culture and society.</li>
                <li><strong>Research project</strong>: A project designed to accomplish a research objective.</li>
            </ul>
            <br />
            <h2 id="requirements">Requirements <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h2>
            <h3 id="requirements-data-management-plan">A. Data Management Plan</h3>
            <p>Applicants must include a draft Data Management Plan (DMP) in their proposal. The USDOT will use the information in the draft DMP as part of its evaluation criteria for award, and may ask for clarifications or changes from applicants prior to award to ensure the USDOT and/or public receives appropriate data access. The draft DMP must provide a preliminary overview of data that may be collected or created through the project, and include the following:</p>
            <ol>
                <li>DATA DESCRIPTION: Address the nature, scope, and scale of the data that will be collected or created. Define data elements within a detailed data dictionary.</li>
                <li>ACCESS POLICIES: Describe any access restrictions that may apply to your data.</li>
                <li>DATA STORAGE AND RETENTION: Describe where you intend to store your data and why you have chosen that particular option. Different systems may be designated for different types of data (e.g., public, non-public). Also describe how long you intend to retain your data in these systems.</li>
                <li>DATA RIGHTS: Describe who will hold the intellectual property rights for your data, and any other legal requirements that might need to be addressed.</li>
            </ol>
            <p>Awardees must submit an updated DMP within 60 days after effective date of award and receive ITS JPO approval for the approach described. The updated DMP must include the following: </p>
            <ol>
                <li>DATA DESCRIPTION: Address the nature, scope, and scale of the data that will be collected. Define data elements within a detailed data dictionary.</li>
                <li>ACCESS POLICIES: Describe any access restrictions that may apply to your data.</li>
                <li>DATA STORAGE AND RETENTION: Describe where you intend to store your data and why you have chosen that particular option. Different systems may be designated for different types of data (e.g., public, non-public). Also describe how long you intend to retain your data in these systems.</li>
                <li>DATA RIGHTS: Describe who will hold the intellectual property rights for your data, and any other legal requirements that might need to be addressed.</li>
                <li>DATA STANDARDS: Describe the anticipated formats that your data will use.</li>
                <li>TIMING: Describe when your data will be shared, and how frequently it will be updated.</li>
            </ol>
            <p>Awardees must then maintain the DMP throughout the period of performance with more detailed, updated information as it becomes available. At a minimum, the Awardee must update the DMP every six months and any time the Awardee shares a new dataset or changes data standards used. By the end of the project, the DMP must be a complete and accurate record of all data collected or created through the project.
                <br />
                The DMP must demonstrate the project's full compliance with these requirements and all applicable USDOT and federal policies and guidance.
            </p>
            <br />
            <h3 id="requirements-access-best-practices">B. Access Requirements<span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h3>
            <p>Consistent with federal policy (<a href="https://www.congress.gov/bill/115th-congress/house-bill/4174/text#toc-H8E449FBAEFA34E45A6F1F20EFB13ED95" target="_blank" rel="noopener noreferrer">OPEN Government Data Act</a>), awardees must provide public access to data collected or created through the project unless a specific privacy, confidentiality, security, or other valid restriction is identified. This presumption in favor of openness must be reflected in the research project's DMP. Where valid restrictions to public access exist, awardees must provide controlled access to data that is necessary to achieve core research goals. For example, if the purpose of a project is to evaluate effectiveness of a new technology, the awardee must provide USDOT evaluators access to enough data to support a scientifically-sound evaluation. Furthermore, awardees must make final research results and, where possible, sanitized versions of primary data available to the public.</p>
            <p>Final research results must satisfy the reporting and compliance requirements as set forth in the <a href="https://www.transportation.gov/sites/dot.gov/files/docs/Official DOT Public Access Plan.pdf" target="_blank" rel="noopener noreferrer">USDOT Public Access Plan</a>, including, but not limited to, the use of Open Researcher and Contributor ID (ORCID) numbers, the creation and maintenance of a research project record in the Transportation Research Board’s (TRB) Research in Progress (RiP) database, and the timely and complete submission of all required publications and associated digital data sets as such terms are defined in the <a href="https://www.transportation.gov/sites/dot.gov/files/docs/Official DOT Public Access Plan.pdf" target="_blank" rel="noopener noreferrer">USDOT Public Access Plan</a>. Additional information about how to comply with the requirements can be found at: <a href="https://ntl.bts.gov/public-access/how-comply" target="_blank" rel="noopener noreferrer">https://ntl.bts.gov/public-access/how-comply</a>. The ITS JPO will assist awardees in compliance with these broader USDOT requirements.</p>
            <br />
            <h3 id="requirements-data-storage-retention">C. Data Storage and Retention <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h3>
            <p>Awardees must store their data in systems that provide an appropriate level of user access, functionality and data life cycle management. Awardees must provide access to data for five years or until the data is no longer required for business purposes, whichever is later. This retention period begins when USDOT first receives access to a dataset.</p>
            <p>Awardees may use different systems to store different types of data (e.g., public, non-public, primary, derived, streaming, static). The ITS JPO has designated several public and controlled access data systems that awardees can use to meet their data access and retention requirements, including registering metadata in the <a href="https://its.dot.gov/data/" target="_blank" rel="noopener noreferrer">ITS DataHub</a>. Applicants are encouraged to use these shared resources but can propose alternative systems for storing and providing access to data via their draft DMP and supplemental information. If ITS JPO determines that a proposed system does not provide an appropriate level of user access and functionality and data life cycle management, the awardee must use the systems designated by the ITS JPO. Wherever possible, these determinations will be made prior to award.</p>
            <br />
            <h3 id="requirements-data-rights">D. Data Rights <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h3>
            <p>Consistent with federal policy (<a href="https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2013/m-13-13.pdf" target="_blank" rel="noopener noreferrer">M-13-13</a>), awardees must apply open licenses to data collected or created through the project so there are no restrictions on copying, publishing, distributing, transmitting, adapting, or otherwise using the information. The ITS JPO uses clauses in <a href="http://farsite.hill.af.mil/reghtml/regs/far2afmcfars/fardfars/far/52_227.htm#P254_51765" target="_blank" rel="noopener noreferrer">FAR 52.227-14</a> to acquire unlimited rights to data for the government, though applicants can claim exemptions and propose limited rights data as described in <a href="http://farsite.hill.af.mil/reghtml/regs/far2afmcfars/fardfars/far/52_227.htm#P254_51765" target="_blank" rel="noopener noreferrer">FAR 52.227-14</a>. Applicants must describe their proposed approach to data rights in their draft DMP, including, where applicable, a detailed rationale for limiting the government's rights to data.</p>
            <br />
            <h3 id="requirements-data-standards">E. Data Standards <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h3>
            <p>Consistent with federal policy (<a href="https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2013/m-13-13.pdf" target="_blank" rel="noopener noreferrer">M-13-13</a>), awardees must use standards to promote data interoperability and openness. Where existing standards are insufficient, awardees must describe in their DMP how they will contribute to the development of new standards.</p>
            <br />
            <h3 id="requirements-timing">F. Timing <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h3>
            <p>Awardees must provide data in near-real-time, via streaming or batch uploads, throughout the period of data collection or creation. The ITS JPO encourages awardees to provide sample or test datasets early in a project to refine data dissemination processes and formats, and use automated processes to cut down on the time from data generation to dissemination.</p>
            <br />
            <h3 id="requirements-metadata-documentation">G. Metadata and Documentation <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h3>
            <p>Awardees must provide metadata on all data described in their DMP. Awardees can provide additional metadata beyond the common core fields if desired, and reference more detailed documentation. Consistent with federal policy (<a href="https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/memoranda/2013/m-13-13.pdf" target="_blank" rel="noopener noreferrer">M-13-13</a>), ITS JPO will provide this metadata to the public via the <a href="https://its.dot.gov/data/" target="_blank" rel="noopener noreferrer">ITS DataHub</a> and other data catalogs to facilitate data discovery, unless a specific privacy, confidentiality, security, or other valid restriction is identified. Awardees can claim such restrictions when they submit their metadata.
                <br /><br />
                The ITS JPO may request more detailed documentation and data dictionaries where necessary for users to understand and use the data. 
            </p>
            <br />

            <h2 id="best-practices-implementation">Implementation Roles and Responsibilities <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h2>
            <p>There are several key roles for implementing these draft data access requirements. The roles are as follows:</p>
            <ul>
                <li>Awardee: The primary role is the project principal investigator and <a href="https://its.dot.gov/data/" target="_blank" rel="noopener noreferrer">ITS DataHub</a> data provider. Main responsibilities include: a) creating and maintaining a DMP for their respective research project; b) identifying, collecting, managing and retaining research data for their respective project as per their DMP; c) preparing and coordinating data submissions with ITS JPO; d) answering questions about their research data; e) responding to access requests for their controlled data; e) complying with all ITS JPO Data Access COE requirements outlined in these requirements outlined herein.</li>
                
                <li>USDOT Project Manager: The primary role is oversight for the research project. A USDOT Project Manager is assigned to each ITS JPO-funded project. Main responsibilities include: a) coordinating execution of the project with the ITS JPO-funded project team; b) receiving, reviewing and approving the project's DMP; c) coordinating with the ITS JPO on research project execution and data submission.</li>
                
                <li>ITS JPO: The primary role is to administer the ITS JPO Data Access COE requirements and the <a href="https://its.dot.gov/data/" target="_blank" rel="noopener noreferrer">ITS DataHub</a>, as well as provide technical assistance to ITS JPO-funded project data providersproject awardees and project managers. Main responsibilities include: a) defining requirements, data management standards and <a href="https://its.dot.gov/data/" target="_blank" rel="noopener noreferrer">ITS DataHub</a> guidelines; b) operating and maintaining the <a href="https://its.dot.gov/data/" target="_blank" rel="noopener noreferrer">ITS DataHub</a>; c) providing technical assistance to  awardees to create a DMP and successfully implement the project's DMP. While the ITS JPO expects awardees to fully implement their DMP, the ITS JPO will provide technical assistance to clarify any ambiguity around data management and assist the project in implementing their DMP.</li>
                
                <li>USDOT CIO: The primary role is promoting the effective and efficient design and operation of all major information resource management processes within USDOT.</li>
            </ul>
            <br />
            <h2 id="resources">Resources <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h2>
            <p>Information coming soon.</p>
            
            <h2 id="references">References <span class="back-to-top"><a href="#public-access-top">[ Back To Top ]</a></span></h2>
            <ul>
                <li><a href="https://www.its.dot.gov/about/its_jpo.htm">https://www.its.dot.gov/about/its_jpo.htm</a></li>
                <li><a href="https://www.law.cornell.edu/cfr/text/19/201.6">https://www.law.cornell.edu/cfr/text/19/201.6</a></li>
                <li><a href="https://project-opendata.cio.gov/v1.1/schema/">https://project-opendata.cio.gov/v1.1/schema/</a></li>
                <li><a href="https://www.transportation.gov/sites/dot.gov/files/docs/DOT%20Order%201351.18%20Privacy%20Risk%20Management%20Policy.pdf">https://www.transportation.gov/sites/dot.gov/files/docs/DOT%20Order%201351.18%20Privacy%20Risk%20Management%20Policy.pdf</a></li>
                <li><a href="https://www.techopedia.com/dictionary">https://www.techopedia.com/dictionary</a></li>
                <li><a href="http://www.sapdc.org/business/government-contracting-terms-definitions">http://www.sapdc.org/business/government-contracting-terms-definitions</a></li>
            </ul>
        </div>
    </div>
 
</div>
</template>

<script>
export default {
  name: 'publicAccess'
}
</script>
