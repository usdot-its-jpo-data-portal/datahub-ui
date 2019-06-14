<template>
<div>
  <main class="usa-layout-docs usa-section" id="main-content">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div class="usa-layout-docs__main desktop:grid-col-9 grid-offset-2 usa-prose about-vue">
          <h1>About the ITS DataHub</h1>
          <p class="usa-intro">
            The ITS DataHub provides a single point of entry to discover USDOT&rsquo;s
            publicly available ITS research data, including connected vehicle data.
            By providing access to these data, the USDOT aims to enable third-party research
            into the effectiveness of emerging ITS technologies, preliminary development of third-party applications,
            and harmonization of data across similar collections.
            Data accessible through the ITS DataHub is quality-checked,
            well-documented, and freely available to the public.
          </p>

          <h2 id="section-heading-h2">What data can I find on the ITS DataHub?</h2>
          <p>
            The ITS DataHub is home to over 100 data sets created using ITS technologies.
            The ITS DataHub&rsquo;s data sets contain various types of information,
            such as highway detector data, travel times, traffic signal timing data, incident data,
            weather data, and connected vehicle data.
            As the <a href="https://its.dot.gov/pilots/index.htm">Connected Vehicle Pilots</a>
            continue to progress, more preliminary data sets will become available to the public.
            Basic Safety Messages (BSMs) and Traveler Information Messages (TIMs) from a field test of the
            Wyoming DOT Connected Vehicle Pilot became available to the public in early 2018.
          </p>
          <p>
            The data sets are stored differently depending on how they are classified, but through the ITS DataHub,
            data sets are all searchable in one place and users do not need to know which system stores the data to access it.
            Figure 1 below describes the general classification criteria for whether the data is considered primary or derived.
            Additionally, data that is considered &ldquo;immature&rdquo;
            where the data schema may change, are stored in a &ldquo;sandbox&rdquo; data environment to allow for more
            flexibility while the data structure matures through feedback from researchers.
          </p>
          <img
            src="/images/primary-deriveddata.png"
            alt="Graphic showing comparison between Primary Research Data that goes on data.transportation.gov and Dervied Research Data that goes on National Transportation Library. Primary data is data collected during pilot deployment research, testbed, or data generated from simluations. Examples are SHRP 2, ICM, CV Pilots. Derived data are final research results (such as evaluation data). They are useful in context with a report or analysis documenting methodology. Examples are SHRP2 subprojects, or AMS."
          >
          <br>

          <h2 id="section-heading-h2">How do I find data on the ITS DataHub?</h2>
          <ol>
            <li>To begin your search for ITS data, type in a key word in the search bar or click on a <strong>POPULAR DATA SET TOPICS</strong> The <strong>FEATURED DATA SETS</strong> section also highlights the newest datasets.</li>
            <li>Once the results are populated, clicking on the title of the search result will take you to the National Transportation Library (NTL) or data.transportation.gov (DTG), where the data resides.</li>
            <li>If the data resides on NTL:</li>
          </ol>
          <ol>
            <ol>
              <li>To view the metadata for the dataset, click on the &ldquo;<strong>Viewer</strong>&rdquo; tab. You can print or download this metadata using the icons in the upper right of the viewer.</li>
              <li>To see details about the project, such as the authors, keywords, or description associated with the data, click on the &ldquo;<strong>Details</strong>&rdquo; tab.</li>
              <li>To download the dataset, click on the &ldquo;<strong>Supporting Files</strong>&rdquo; tab and you will find a downloadable zip file of the data.</li>
              <li>To see reports related to the dataset, click on the &ldquo;<strong>Related Documents</strong>&rdquo; tab.</li>
            </ol>
          </ol>
          <ol start="4">
            <li>If the data resides on DTG, please note that there are two types of dataset formats. Datasets that have been integrated into the DTG interface and datasets that have been attached.
              <ol>
                <li><u>Integrated datasets</u> give users the capability to view and work with the data within the DTG interface:
                  <ol>
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
                <li><u>Attached datasets</u> do not have the capability for users to view or work with the data within the interface<sup><strong><a href="#dh-about_footnote">1</a></strong></sup>:
                  <ol>
                    <li>To download the metadata, refer to the &ldquo;<strong>Download this Resource</strong>&rdquo; section.</li>
                    <li>To download the data, zip files of the data can be found in the &ldquo;<strong>Attachments</strong>&rdquo; section.</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
          
          <h2 id="section-heading-h2">How do I provide data to the ITS DataHub?</h2>
          <p>
            The most current information on how data providers can provide information to the ITS DataHub 
            can be found at <a href="http://www.its.dot.gov/data/public-access/">www.its.dot.gov/data/public-access/</a>. 
          </p>

          <h2 id="section-heading-h2">How do I get access to sensitive transportation datasets?</h2>
          <p>
            USDOT provides access to sensitive data via several systems. One, the proof-of-concept Secure Data Commons, 
            provides a secure and collaborative controlled-access environment for sensitive data (i.e. proprietary or containing PII). 
            To get more information or to participate, 
            contact us at <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov</a>.
          </p>

          <h2 id="section-heading-h2">Upcoming Webinars</h2>
          <ul>
            <li>Please stay tuned for exciting upcoming events!</li>
          </ul>

          <h2 id="section-heading-h2">Other Resources</h2>
          <ul>
            <li>ITS Research Data Fact Sheet: <a href="https://www.its.dot.gov/factsheets/pdf/ITS_ResearchData.pdf">https://www.its.dot.gov/factsheets/pdf/ITS_ResearchData.pdf</a></li>
          </ul>
          <ul>
            <li>U.S. DOT Work Zone Data Exchange (WZDx) Project on February 26, 2019:</li>
            <ul>
              <li>Recording Link: <a href="http://itsa.adobeconnect.com/pbniwiub81oi/">http://itsa.adobeconnect.com/pbniwiub81oi/</a></li>
              <li>Webinar Presentation: <a href="https://www.its.dot.gov/resources/pdf/WZDx_Webinar_Presentation_26FEB2019.pdf">https://www.its.dot.gov/resources/pdf/WZDx_Webinar_Presentation_26FEB2019.pdf</a></li>
            </ul>
          </ul>
          <ul>
            <li>Data Exchanges to Enable Automated Vehicle Integration on November 8, 2018:</li>
            <ul>
              <li>Recording Link: <a href="https://connectdot.connectsolutions.com/puzqp81cjws2/">https://connectdot.connectsolutions.com/puzqp81cjws2/</a></li>
              <li>Webinar Presentation: <a href="https://www.its.dot.gov/presentations/2018/DAVI_Webinar.pdf">https://www.its.dot.gov/presentations/2018/DAVI_Webinar.pdf</a></li>
            </ul>
          </ul>
          <ul>
            <li>ITS Data Update Webinar on January 25, 2018:
              <ul>
                <li>Recording Link: <a href="http://itsa.adobeconnect.com/pea1mfcm39fv/">http://itsa.adobeconnect.com/pea1mfcm39fv/</a> &nbsp;</li>
                <li>Webinar Presentation: <a href="https://www.its.dot.gov/presentations/2018/ITS_PublicDataHub_Webinar.pdf">https://www.its.dot.gov/presentations/2018/ITS_PublicDataHub_Webinar.pdf</a></li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>ITS JPO Data Program Webinar on August 15, 2017:
            <ul>
              <li>Recording Link: <a href="http://itsa.adobeconnect.com/pn2f951fsqso/">http://itsa.adobeconnect.com/pn2f951fsqso/</a></li>
            </ul>	
            </li>
          </ul>

          <h2 id="section-heading-h2">Contact Information</h2>
          <p>
            For more information about the ITS DataHub, please contact the ITS JPO Data Program support team
            at <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov</a>.
          </p>
          <br>
          <br>
          <div class="dh-about-footnote">
            <p id="dh-about_footnote">
              1)&nbsp;This legacy dataset was created before data.transportation.gov and is only currently
              available via the attached file(s). 
              Please contact the dataset owner if there is a need for users to work with this data using the
              data.transportation.gov analysis features (online viewing, API, graphing, etc.) and the USDOT will
              consider modifying the dataset to fully integrate in DTG.
            </p>
          </div>

        </div>
      </div>
    </div>
  </main>
</div>
</template>

<script>
export default {
  name: 'about'

}
</script>

<style lang="scss" scoped>

</style>

