<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <h1>Data Storage Systems</h1>
    <h2 id="datastoragesystems-purpose">Purpose</h2>
    <p>
      The following web page provides information on the different data storage systems available to research projects in order to be compliant with the Intelligent Transportation Systems (ITS) Joint Program Office (JPO) Data Access Center of Excellence (CoE)
      <router-link to="/resources/guidelines">Guidelines</router-link>,
      as well as the United States Department of Transportation (U.S. DOT) Public Access Plan; the Open, Public, Electronic, and Necessary (OPEN) Government Data Act; and other applicable data policies at the United States Department of Transportation (U.S. DOT) and the federal level. To see a downloadable version of this information, please reference the
      <router-link to="/resources/data-management/template-and-instructions">Templates & Instructions</router-link>
      tab. To provide feedback or questions on this information, you can file an issue on our
      <a target="_blank" href="https://github.com/usdot-its-jpo-data-portal/data-access-coe-resources" rel="noopener noreferrer">GitHub page<img class="in-line-dot-link-new-tab" src="/images/icons/external-link_1b1b1b.svg" alt="New tab icon." title="Opens in a new tab."></a>.
    </p>
    <p>
      In order to be compliant with the ITS JPO Data Access Center of Excellence Guidelines, &ldquo;awardees must provide public access to data collected or created through the project unless a specific privacy confidentiality, security or other valid restriction is identified.&rdquo;  This web page walks through data management decision points that can help determine which data storage system may be the best fit to provide access to data, as well as details on available data storage systems.
    </p>
    <h2 id="datastoragesystems-datastoragesystemdecisiontree">Data Storage System Decision Tree</h2>
    <p>
      The below decision tree notes the decision points ITS JPO suggests using to determine the best storage system for a dataset.
    </p>
    <img src="/images/system-design_data-storage-decision-tree.png" alt="Data Storage System Decision Tree">
    <h2 id="datastoragesystems-decisionpoints">Decision Points</h2>
    <p>
      The following decision points should be considered when determining where a dataset should be stored. These decisions points are numbered in accordance with the diagram above. Unless otherwise noted under a selection, go through the decision points sequentially.
    </p>
    <ol start="1">
      <li>
        What is the dataset’s Access Level?
        <p>
          This information should be provided in the data provider’s Data Management Plan and/or Metadata Questionnaire. Options for this question are:
        </p>
        <ol type="a">
          <li>
            Public: this is the default value for this decision. All data should be accessible to the public according to U.S. DOT and federal policy and should only be made &ldquo;restricted public&rdquo; or &ldquo;non-public&rdquo; if there are specific elements of the data that cause a threat to privacy (e.g. personally identifiable information [PII]) or considered confidential business information [CBI]).
          </li>
          <li>
            &ldquo;Restricted Public&rdquo; or &ldquo;Non-Public&rdquo;: a dataset should only be made &ldquo;restricted public&rdquo; or &ldquo;non-public&rdquo; if there are specific elements of the data that cause a threat to privacy (e.g. PII or CBI).
            <ol type="i">
              <li>
                Skip to number 6.
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>
        Is the data primary or derived data?
        <p>
          Determine whether the data is:
        </p>
        <ol type="a">
          <li>
            Primary research data: original and/or raw data collected during research that can be used for further analysis.
          </li>
          <li>
            Derived research data: data derived thorough analysis of other data and shared as part of a final report to communicate the methodology and findings of a research project.
            <ol type="i">
              <li>
                <strong>End</strong>: This data is a good fit to be stored in the 
                <a target="_blank" href="https://rosap.ntl.bts.gov/" rel="noopener noreferrer">National Transportation Library’s ROSA P system.<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>
        Where will the data be accessed?
        <p>
          Will the public be able to access the data on a:
        </p>
        <ol type="a">
          <li>
            U.S. DOT System: A U.S. DOT-managed system, such as the
            <a target="_blank" href="https://www.its.dot.gov/data/" rel="noopener noreferrer">ITS DataHub<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
          </li>
          <li>
            Non-U.S. DOT System: a system managed by someone other than the U.S. DOT (i.e. managed by the data provider or a third party).
            <ol type="i">
              <li>
                Skip to number 5.
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>
        Frequency of data update?
        <p>
          Determine if the data will be updated by:
        </p>
        <ol type="a">
          <li>
            Irregular updates/one-time dump: the research project will collect a limited amount of data and will not update its data once it is deposited, or update it at a few irregular times.
            <ol type="i">
              <li>
                <strong>End</strong>: This data is a good fit to store in 
                <a target="_blank" href="https://data.transportation.gov/" rel="noopener noreferrer">data.transportation.gov (DTG)<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
              </li>
            </ol>
          </li>
          <li>
            Regular updates: the research project will collect large datasets that will be updated regularly, including updated in near-real time.
            <ol type="i">
              <li>
                <strong>End</strong>: This data is a good fit to <strong>store sample data in
                <a target="_blank" href="https://data.transportation.gov/" rel="noopener noreferrer">DTG<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
                and fully store the data in the
                <a target="_blank" href="http://usdot-its-cvpilot-public-data.s3.amazonaws.com/index.html" rel="noopener noreferrer">ITS Sandbox<img class="in-line-dot-link-new-tab" src="/images/icons/external-link_1b1b1b.svg" alt="New tab icon." title="Opens in a new tab."></a>
                </strong>.
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>
        Should a sample of the data be stored on DTG?
        <p>
          The Data Access CoE suggests storing sample data in DTG, as this provides another way for the public to access the data and maximize the data’s utility through additional analysis and development. Determine if a sample of the data should be stored on DTG:
        </p>
        <ol type="a">
          <li>
            Yes
            <ol type="i">
              <li>
                <strong>End</strong>: This data is a good fit to <strong>store sample data in </strong>
                <a target="_blank" href="https://data.transportation.gov/" rel="noopener noreferrer">DTG<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
                <strong> and fully store the data and data dictionary in a non-U.S. DOT public-access system.</strong>
              </li>
            </ol>
          </li>
          <li>
            No
            <ol type="i">
              <li>
                <strong>End</strong>: This data is a good fit to <strong>store only the dataset’s metadata in </strong>
                <a target="_blank" href="https://data.transportation.gov/" rel="noopener noreferrer">DTG<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
                <strong> and fully store the data and data dictionary in a non-U.S. DOT-managed public-access system.</strong>
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>
        What’s the dataset’s data dictionary’s Access Level?
        <p>
          Note that this decision asks the Access Level of the dataset’s data dictionary. This information should be provided in the data provider’s Data Management Plan and/or Metadata Questionnaire. Options for this question are:
        </p>
        <ol type="a">
          <li>
            Public: this is the default value for this decision. All data dictionaries should be accessible to the public and should only be made &ldquo;restricted public&rdquo; or &ldquo;non-public&rdquo; if there are specific elements of the data dictionary - not the data - that cause a threat to privacy (e.g. PII or CBI).
          </li>
          <li>
            &ldquo;Restricted Public&rdquo; or &ldquo;Non-Public&rdquo;: a data dictionary should only be made &ldquo;restricted public&rdquo; or &ldquo;non-public&rdquo; if there are specific elements of the data dictionary that cause a threat to privacy (e.g. PII or CBI).
            <ol type="i">
              <li>
                Skip to number 8.
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>
        Where will the data be accessed?
        <p>
          Will users with access be able to access the data on a:
        </p>
        <ol type="a">
          <li>
            U.S. DOT system: A U.S. DOT-managed system, such as the
            <a target="_blank" href="https://its.dot.gov/data/secure/about.html" rel="noopener noreferrer">Secure Data Commons (SDC)<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
            <ol type="i">
              <li>
                <strong>End</strong>: This data is a good fit to <strong>store metadata and the data dictionary in
                <a target="_blank" href="https://data.transportation.gov/" rel="noopener noreferrer">DTG<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
                and fully store the data in the
                <a target="_blank" href="https://its.dot.gov/data/secure/about.html" rel="noopener noreferrer">Secure Data Commons (SDC)<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
                </strong>.
              </li>
            </ol>
          </li>
          <li>
            Non-U.S. DOT system: a system managed by someone other than the U.S. DOT (i.e. managed by the data provider or a third party).
            <ol type="i">
              <li>
                <strong>End</strong>: This data is a good fit to <strong>store metadata and the data dictionary in
                <a target="_blank" href="https://data.transportation.gov/" rel="noopener noreferrer">DTG<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
                and fully store the data in a non-U.S.DOT controlled-access system</strong>.
              </li>
            </ol>
          </li>
        </ol>
      </li>
      <li>
        Where will the data be access?
        <p>
          Will users with access be able to access the data on a:
        </p>
        <ol type="a">
          <li>
            U.S. DOT system: A U.S. DOT-managed system, such as the
            <a target="_blank" href="https://its.dot.gov/data/secure/about.html" rel="noopener noreferrer">Secure Data Commons (SDC)<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
            <ol type="i">
              <li>
                <strong>End</strong>: This data is a good fit to <strong>store only metadata in
                <a target="_blank" href="https://data.transportation.gov/" rel="noopener noreferrer">DTG<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
                and fully store the data in the
                <a target="_blank" href="https://its.dot.gov/data/secure/about.html" rel="noopener noreferrer">Secure Data Commons (SDC)<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
                </strong>.
              </li>
            </ol>
          </li>
          <li>
            Non-U.S. DOT system: a system managed by someone other than the U.S. DOT (i.e. managed by the data provider or a third party).
            <ol type="i">
              <li>
                <strong>End</strong>: This data is a good fit to <strong>store only metadata in
                <a target="_blank" href="https://data.transportation.gov/" rel="noopener noreferrer">DTG<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
                and fully store the data in a non-U.S.DOT controlled-access system</strong>.
              </li>
            </ol>
          </li>
        </ol>
      </li>
    </ol>
    <h2 id="datastoragesystems-datastoragesystems">Data Storage Systems</h2>
    <p>
      Below is a description of the data storage systems mentioned in the &ldquo;Data Storage System Decision Tree.&rdquo;
    </p>
    <p>
      <a target="_blank" href="https://data.transportation.gov/" rel="noopener noreferrer">Data.transportation.gov (DTG)<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>:
      A U.S. DOT-managed public-access data storage system that stores non-sensitive, primary research data and data information such as metadata and data dictionaries. Primary research data is data collected during research that has not had significant analysis performed on it.
      </p>
    <p>
      <a target="_blank" href="http://usdot-its-cvpilot-public-data.s3.amazonaws.com/index.html" rel="noopener noreferrer">ITS Sandbox<img class="in-line-dot-link-new-tab" src="/images/icons/external-link_1b1b1b.svg" alt="New tab icon." title="Opens in a new tab."></a>:
      A U.S. DOT-managed public-access data storage system that stores non-sensitive, primary research data that is not suitable to be fully housed in DTG usually due to its large or continuously expanding size, immaturity, and/or non-standard or non-finalized format and structure. 
      </p>
      <p>Some projects currently depositing to ITS Sandbox include:
      <ul>
        <li><a target="_blank" href="http://usdot-its-cvpilot-public-data.s3.amazonaws.com/index.html" rel="noopener noreferrer">Connected Vehicle (CV) Pilot<img class="in-line-dot-link-new-tab" src="/images/icons/external-link_1b1b1b.svg" alt="New tab icon." title="Opens in a new tab."></a></li>
        <li><a target="_blank" href="http://usdot-its-workzone-public-data.s3.amazonaws.com/index.html" rel="noopener noreferrer">Work Zone Data Exchange (WZDx) Feed Archive<img class="in-line-dot-link-new-tab" src="/images/icons/external-link_1b1b1b.svg" alt="New tab icon." title="Opens in a new tab."></a></li>
      </ul>
      For more information on ITS Sandbox, please see the <a target="_blank" href="https://github.com/usdot-its-jpo-data-portal/sandbox" rel="noopener noreferrer">sandbox GitHub repository<img class="in-line-dot-link-new-tab" src="/images/icons/external-link_1b1b1b.svg" alt="New tab icon." title="Opens in a new tab."></a>.
    </p>
    <p>
      <a target="_blank" href="https://rosap.ntl.bts.gov/" rel="noopener noreferrer">National Transportation Library (NTL)<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>:
      A U.S. DOT-managed public-access data storage system that stores non-sensitive, derived research data. Derived research data is data derived thorough analysis of other data and shared as part of a final report to communicate the methodology and findings of a research project. ITS JPO derived research data is stored in NTL’s ROSA P catalog. Derived datasets tend to be smaller than primary datasets. These datasets should ensure they follow the
      <a target="_blank" href="https://ntl.bts.gov/public-access" rel="noopener noreferrer">public access instructions provided by NTL<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>,
      which the Data Access CoE references in its materials.
    </p>
    <p>
      <a target="_blank" href="https://its.dot.gov/data/secure/about.html" rel="noopener noreferrer">Secure Data Commons (SDC)<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>:
      A U.S. DOT-managed controlled-access data storage system that provides secure, cloud-based, controlled access to complex (high volume, velocity, and/or data variety) and sensitive (containing private, proprietary, and/or CBI) datasets in a secure enclave. Created to store PII, CBI and sensitive data for both ongoing, large-scale primary and derived research data, this system also contains analysis tools and/or shared computing resources. The ITS JPO adheres to the federal OPEN Government Data Act, and only restricts access to publicly funded data if necessary. To comply with these goals, data providers who submit research datasets to the SDC may need to provide a justification for why controlled-access is required for their data in their Data Management Plan and/or Metadata Questionnaire and provide a sanitized version of the data to a public-access system.
    </p>
    <p>
      <strong>Non-U.S. DOT public-access system</strong>: A system managed by a party other than the U.S. DOT, i.e. managed by the data provider or a third party, that provides public access to data. If a project has data stored in an alternative federated data system, the data provider may consult with ITS JPO to identify additional systems not listed above to store research data. The ITS JPO will review proposed alternative federated data systems and determine if the system meets Data Access CoE criteria. Data Access CoE criteria for approving a non-U.S. DOT public-access system includes but is not limited to ensuring the system provides full access to the public, both for discoverability and use, and the system is able to be queried by the
      <a target="_blank" href="https://www.its.dot.gov/data/" rel="noopener noreferrer">ITS DataHub<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>.
    </p>
    <p>
      <strong>Non-U.S. DOT controlled-access system</strong>: A system managed by a party other than the U.S. DOT, i.e. managed by the data provider or a third party, that provides controlled access to data. If a project has data stored in an alternative federated data system, the data provider may consult with ITS JPO to identify additional systems not listed above to store research data. The ITS JPO will review proposed alternative federated data systems and determine if the system meets Data Access CoE criteria. Data Access CoE criteria for approving a non-U.S. DOT controlled-access system includes but is not limited to ensuring the non-U.S. DOT controlled-access system protects PII and CBI, provides U.S. DOT analysts access to complete their work (e.g. evaluation), and enables controlled-access and collaboration at least equal to U.S. DOT’s controlled-access system (e.g. the 
      <a target="_blank" href="https://its.dot.gov/data/secure/about.html" rel="noopener noreferrer">SDC<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
      ).
    </p>
  </div>
</template>
<script>
export default {
  name: "SystemDesign"
}
</script>
<style lang="scss">

</style>
