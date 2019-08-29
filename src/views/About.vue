<template>
<div class="dh-about__wrapper">
  <main class="usa-layout-docs usa-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <aside id="dh-about-side-menu" class="usa-layout-docs__sidenav sidenav desktop:grid-col-3 dh-about-main_float-menu">
          <nav>
            <ul class="usa-sidenav">
              <li class="usa-sidenav__item">
                <a id="id-about_overview" href="#" @click="moveToTag($event,'about')" class="page" :class="isVisible(['id-about_overview']) ? 'usa-current' : '' ">About the ITS DataHub</a>
              </li>
              <li class="usa-sidenav__item">
                <a id="id-about_data-available" href="#" @click="moveToTag($event,'data-available')" class="page" :class="isVisible(['id-about_data-available']) ? 'usa-current' : '' ">Data Available</a>
              </li>
              <li class="usa-sidenav__item">
                <a id="id-about_data-classification" href="#" @click="moveToTag($event,'data-classification')" class="page" :class="isVisible(['id-about_data-classification']) ? 'usa-current' : '' ">Data Classification and Storage</a>
              </li>
              <li class="usa-sidenav__item">
                <a id="id-about_data-discovery" href="#" @click="moveToTag($event,'data-discovery')" class="page" :class="isVisible(['id-about_data-discovery','id-about_data-discovery_ntl','id-about_data-discovery_dtg']) ? 'usa-current' : '' ">Data Discovery</a>
                <ul v-if="isVisible(['id-about_data-discovery','id-about_data-discovery_ntl','id-about_data-discovery_dtg','id-about_data-discovery_sandbox'])" class="usa-sidenav__sublist">
                  <li class="usa-sidenav__item">
                    <a id="id-about_data-discovery_ntl" href="#" @click="moveToTag($event,'data-discovery_ntl')" class="table-of-contents" :class="isVisible(['id-about_data-discovery_ntl']) ? 'usa-current' : '' ">National Transportation Library (NTL)</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a id="id-about_data-discovery_dtg" href="#" @click="moveToTag($event,'data-discovery_dtg')" class="table-of-contents" :class="isVisible(['id-about_data-discovery_dtg']) ? 'usa-current' : '' ">Data.transportation.gov (DTG)</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a id="id-about_data-discovery_sandbox" href="#" @click="moveToTag($event,'data-discovery_sandbox')" class="table-of-contents" :class="isVisible(['id-about_data-discovery_sandbox']) ? 'usa-current' : '' ">ITS Sandbox</a>
                  </li>
                </ul>
              </li>
              <li class="usa-sidenav__item">
                <a id="id-about_data-submission" href="#" @click="moveToTag($event,'data-submission')" class="page" :class="isVisible(['id-about_data-submission']) ? 'usa-current' : '' ">Data Submission</a>
              </li>
              <li class="usa-sidenav__item">
                <a id="id-about-resources" href="#" @click="moveToTag($event,'resources')" class="page" :class="isVisible(['id-about-resources','id-about-resources_additional-information','id-about-resources_upcomming-webinars','id-about-resources_past-webinars','id-about-resources_links','id-about-resources_contact-information']) ? 'usa-current' : '' ">Resources</a>
                <ul v-if="isVisible(['id-about-resources','id-about-resources_additional-information','id-about-resources_upcomming-webinars','id-about-resources_past-webinars','id-about-resources_links','id-about-resources_contact-information'])" id="ul-resources" class="usa-sidenav__sublist" >
                  <li class="usa-sidenav__item">
                    <a id="id-about-resources_upcomming-webinars" href="#" @click="moveToTag($event,'resources_upcoming-webinars')" class="table-of-contents" :class="isVisible(['id-about-resources_upcomming-webinar']) ? 'usa-current' : '' ">Upcoming Webinars</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a id="id-about-resources_past-webinars" href="#" @click="moveToTag($event,'resources_past-webinars')" class="table-of-contents" :class="isVisible(['id-about-resources_past-webinars']) ? 'usa-current' : '' ">Past Webinars</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a id="id-about-resources_links" href="#" @click="moveToTag($event,'resources_links')" class="table-of-contents" :class="isVisible(['id-about-resources_links']) ? 'usa-current' : '' ">Links</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a id="id-about-resources_additional-information" href="#" @click="moveToTag($event,'resources_aditional-information')" class="table-of-contents" :class="isVisible(['id-about-resources_additional-information']) ? 'usa-current' : '' ">Additional Information</a>
                  </li>
                  <li class="usa-sidenav__item">
                    <a id="id-about-resources_contact-information" href="#" @click="moveToTag($event,'resources_contact-information')" class="table-of-contents" :class="isVisible(['id-about-resources_contact-information']) ? 'usa-current' : '' ">Contact Information</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>
        <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose dh-about-main_float-content">
          <img class="dh-about-main_image" src="images/ITSJPO_DataHub_081619Overview.png" alt="DataHub overview image">
          <h1 id="about">About the ITS DataHub</h1>
          <p class="usa-intro">
            The ITS DataHub provides a single point of entry to discover available intelligent transportation systems (ITS) primary and derived research data from the U.S. Department of Transportation (U.S. DOT). By providing access to these data, the U.S. DOT aims to enable third-party research into the effectiveness of emerging ITS technologies, preliminary development of third-party applications, and harmonization of data across similar collections.
          </p>
          <p>
            Data accessible through the ITS DataHub is
            <strong>quality-checked</strong>,
            <strong>well-documented</strong>, and
            <strong>freely available</strong>
            to the public.
          </p>

          <h2 id="data-available">Data Available</h2>
          <p>
            The ITS DataHub allows discovery of datasets created using ITS technologies. The datasets contain various types of information, such as the U.S. DOT’s
            <a target="_blank" href="https://its.dot.gov/pilots/index.htm">Connected Vehicle Pilot Deployment program<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>.
          </p>
          <img class="dh-about-main_image" src="images/ITSJPO_DataHub_081619_CVPilots3.png" alt="DataHub data available image">
          <p>
            The Connected Vehicle Pilot Deployment program pioneers the deployment of connected vehicle technologies in three U.S. locations—New York City, NY; Tampa, FL; and Wyoming (interstate I-80 data within Wyoming). One of the key goals of the program is to produce and provide open data from the pilots to the public in a quick and useful manner for use by third-party researchers and developers. Two of the pilots (Wyoming and Tampa) have already started providing sanitized data to the public through the ITS DataHub.
          </p>
          <p>
            Other datasets include: Highway detector data, Travel time data, Traffic signal timing data, Incident data, Weather data, Automated vehicle data, And more!
          </p>


          <h2 id="data-classification">Data Classification and Storage</h2>

          <p class="dh-about_color-blue">
            One central location for discovering data...
          </p>
          <p>
            The ITS DataHub enables users to easily search and access transportation datasets in
            <strong>one central location</strong>
            —regardless of where they are stored.
          </p>
          <p>
            The datasets available are stored differently depending on how they are classified—as either primary or derived based on several criteria. Additionally, “immature” data (i.e., the data schema may change) are stored in a “sandbox” data environment to allow more flexibility while the data structure matures through feedback from researchers.
          </p>
          <img
            class="dh-about-main_image"
            src="/images/ITSJPO_DataHub_081619_PrimaryDerived.png"
            alt="Graphic showing comparison between Primary Research Data that goes on data.transportation.gov and Dervied Research Data that goes on National Transportation Library. Primary data is data collected during pilot deployment research, testbed, or data generated from simluations. Examples are SHRP 2, ICM, CV Pilots. Derived data are final research results (such as evaluation data). They are useful in context with a report or analysis documenting methodology. Examples are SHRP2 subprojects, or AMS."
          >

          <h2 id="data-discovery">Data Discovery</h2>
          <p class="dh-about_color-blue">
            Easy access to data via a user-friendly interface...
          </p>
          <img class="dh-about-main_image" src="images/ITSJPO_DataHub_081619_DataDiscovery.png" alt="DataHub data available image">
          <ul class="dh-about_list-nobullet">
            <li>
              <p>
                There are several ways to discover data via the ITS DataHub:
              </p>
              <ul>
                <li>
                  <strong>Keyword Search</strong> – Type a keyword in the search bar.
                </li>
                <li>
                  <strong>Popular Dataset Topic Search</strong> – Select from a predefined list of popular dataset topics.
                </li>
                <li>
                  <strong>Featured Datasets</strong> – Explore the latest datasets highlighted on the ITS DataHub Home page.
                </li>
              </ul>
            </li>
            <li>
              <p>
                Once the results are populated, select the title of the search result to access the data where it resides—either the National Transportation Library (NTL) or data.transportation.gov (DTG).
              </p>
              <h3 id="data-discovery_ntl">National Transportation Library (NTL)</h3>
              <p>
                If the data resides on NTL:
              </p>
              <ul>
                <li>
                  To view the metadata for the dataset, click on the “<strong>Viewer</strong>” tab. You can print or download this metadata using the icons in the upper right of the viewer.
                </li>
                <li>
                  To see details about the project, such as the author(s), keyword(s), or description associated with the data, click on the “<strong>Details</strong>” tab.
                </li>
                <li>
                  To download the dataset, click on the “<strong>Supporting Files</strong>” tab. This will provide a downloadable zip file of the data.
                </li>
                <li>
                  To see reports related to the dataset, click on the “<strong>Related Documents</strong>” tab.
                </li>
              </ul>
              <h3 id="data-discovery_dtg">Data.transportation.gov (DTG)</h3>
              <p>
                There are two types of dataset formats for data that reside on DTG – integrated datasets and added as attachments.
              </p>
              <ol type="1">
                <li>
                  <p>
                    <strong>Integrated datasets</strong> give users the capability to view and work with the data within the DTG web browser interface:
                  </p>
                  <ul>
                    <li>
                      To download the metadata, refer to the “<strong>Download This Resource</strong>” section. If this section does not exist, the metadata can be found in the “<strong>Attachments</strong>” section.
                    </li>
                    <li>
                      To download the data, scroll to the “<strong>Table Preview</strong>” section and click on view data. A colorful menu bar will appear on the right-hand side. Click on the blue “<strong>Export</strong>” button and choose the desired format to download the data.
                    </li>
                    <li>
                      To work with data on the DTG interface, scroll to the “<strong>Table Preview</strong>” section and click on view data.
                      <ul>
                        <li>
                          To filter the data, click on the blue “<strong>Filter</strong>” button and then click on the “<strong>Add a New Filter Condition</strong>”.
                        </li>
                        <li>
                          To create visualizations, click on the green “<strong>Visualize</strong>” button.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Attached datasets</strong> do not have the capability for users to view or work with the data within the interface.
                  </p>
                  <p>
                    <i>
                      (<strong>Please note</strong>: This legacy dataset was created before DTG and is only currently available via the attached file(s). Please contact the dataset owner if there is a need to work with this data using the data.transportation.gov analysis features (online viewing, API, graphing, etc.), and the U.S. DOT will consider fully integrating the dataset in DTG.)
                    </i>
                  </p>
                  <ul>
                    <li>
                      To download the metadata, refer to the “<strong>Download this Resource</strong>” section.
                    </li>
                    <li>
                      To download the data, zip files of the data can be found in the “<strong>Attachments</strong>” section.
                    </li>
                  </ul>
                </li>
              </ol>
              <h3 id="data-discovery_sandbox">ITS Sandbox</h3>
              <p>
                Several datasets transmitted to U.S. DOT are not fully mature therefore, they need to be stored in a flexible archive that allows for active data processing and user engagement to form the final mature data product. The ITS Sandbox is a lightweight sandbox environment that gives the development team full control of how the data is aggregated, processed, indexed and delivered to users.
              </p>
              <p>
                Users can access the data in the sandbox using any existing tools that interact with AWS S3 as well as browse the sandbox bucket via the online AWS S3 explorer.
              </p>
            </li>
          </ul>

          <h2 id="data-submission">Data Submission</h2>
          <p class="dh-about_color-blue">
            Be a part of the movement toward open data...
          </p>
          <p>
            The most current information on how data providers can provide information to the ITS DataHub can be found on the
            "<router-link to="/resources/data-storage-system">Data Storage Systems</router-link>"
            page within the Resources tab.
          </p>
          <h3 id="access-datasets">Access to Sensitive Transportation Datasets</h3>
          <p>
            The U.S. DOT provides access to sensitive data via several systems. One such system is the proof-of-concept
            <a target="_blank" href="https://its.dot.gov/data/secure/index.html">Secure Data Commons<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>,
            which provides a secure and collaborative controlled-access environment for sensitive data (i.e., proprietary or containing PII).
          </p>
          <p>
            For more information or to participate, contact
            <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>.
          </p>

          <h2 id="resources">Resources</h2>
          <p>
            The U.S. DOT offers several resources to learn more as well as discover transportation data and software source code.
          </p>
          <h3 id="resources_upcoming-webinars">Upcoming Webinars</h3>
          <p>
            Stay tuned for exciting upcoming events!
          </p>
          <h3 id="resources_past-webinars">Past Webinars</h3>
          <ul class="dh-about_list-nobullet">
            <li>
              <p>
                <strong>U.S. DOT Work Zone Data Exchange (WZDx) Project on February 26, 2019:</strong>
              </p>
              <ul>
                <li>
                  Recording Link:
                  <a target="_blank" href="http://itsa.adobeconnect.com/pbniwiub81oi/">http://itsa.adobeconnect.com/pbniwiub81oi/<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>.
                </li>
                <li>
                  Webinar Presentation:
                  <a target="_blank" href="https://www.its.dot.gov/resources/pdf/WZDx_Webinar_Presentation_26FEB2019.pdf">https://www.its.dot.gov/resources/pdf/WZDx_Webinar_Presentation_26FEB2019.pdf<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>Data Exchanges to Enable Automated Vehicle Integration on November 8, 2018:</strong>
              </p>
              <ul>
                <li>
                  Recording Link:
                  <a target="_blank" href="https://connectdot.connectsolutions.com/puzqp81cjws2/">https://connectdot.connectsolutions.com/puzqp81cjws2/<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>.
                </li>
                <li>
                  Webinar Presentation:
                  <a target="_blank" href="https://www.its.dot.gov/presentations/2018/DAVI_Webinar.pdf">https://www.its.dot.gov/presentations/2018/DAVI_Webinar.pdf<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>ITS Data Update Webinar on January 25, 2018:</strong>
              </p>
              <ul>
                <li>
                  Recording Link:
                  <a target="_blank" href="http://itsa.adobeconnect.com/pea1mfcm39fv/">http://itsa.adobeconnect.com/pea1mfcm39fv/<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>.
                </li>
                <li>
                  Webinar Presentation:
                  <a target="_blank" href="https://www.its.dot.gov/presentations/2018/ITS_PublicDataHub_Webinar.pdf">https://www.its.dot.gov/presentations/2018/ITS_PublicDataHub_Webinar.pdf<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>.
                </li>
              </ul>
            </li>
            <li>
              <p>
                <strong>ITS JPO Data Program Webinar on August 15, 2017:</strong>
              </p>
              <ul>
                <li>
                  Recording Link:
                  <a target="_blank" href="http://itsa.adobeconnect.com/pn2f951fsqso/">http://itsa.adobeconnect.com/pn2f951fsqso/<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>.
                </li>
              </ul>
            </li>
          </ul>

          <h3 id="resources_links">Links</h3>
          <ul>
            <li>
              <a target="_blank" href="https://its.dot.gov/code/">ITS CodeHub<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
              – ITS CodeHub is the U.S. DOT’s public portal for open-source, reusable ITS software code.
            </li>
            <li>
              <a target="_blank" href="https://its.dot.gov/data/secure/index.html">Secure Data Commons (SDC)<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
              – The SDC is the U.S. DOT’s prototype cloud-based analytics platform for the transportation sector to share and collaborate on research, tools, algorithms, analysis, and more around sensitive datasets.
            </li>
            <li>
              <a target="_blank" href="http://usdot-its-cvpilot-public-data.s3.amazonaws.com/index.html">ITS Sandbox<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>
              – The ITS Sandbox is the data repository that uses Amazon Web Services (AWS) Simple Storage System (S3). Large data streams and immature data whose schemas are still subject to change are stored in the sandbox.
            </li>
            <li>
              <a target="_blank" href="https://github.com/">GitHub<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link. Opens in a new tab."></a>
              – GitHub is a development platform to host and review code, manage projects, and build software alongside other developers.
            </li>
            <li>
              <a target="_blank" href="http://its.dot.gov/pilots/">ITS JPO Connected Vehicle Pilot Deployment Program<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>
              – The U.S. DOT’s ITS JPO launched the Connected Vehicle Pilot Deployment Program in September 2015 to deploy, test, and operationalize cutting-edge mobile and roadside technologies and to enable multiple connected vehicle applications. This site provides a detailed description of the program and its objectives, phases, and research progress.
            </li>
          </ul>

          <h3 id="resources_aditional-information">Additional Information</h3>
          <a target="_blank" href="https://www.its.dot.gov/factsheets/pdf/ITS_ResearchData.pdf">ITS Research Data Fact Sheet<img class="in-line-dot-link-new-tab" src="/images/icons/external-tabs.svg" alt="New tab icon." title="Opens in a new tab."></a>

          <h3 id="resources_contact-information">Contact Information</h3>
          <p>
            For more information about the ITS DataHub, please contact the ITS JPO Data Program support team at
            <a href="mailto:data.itsjpo@dot.gov">data.itsjpo@dot.gov<img class="in-line-external-link-icon" src="/images/icons/external-link_1b1b1b.svg" alt="External from DOT link icon" title="External link"></a>.
          </p>
        </div>

      </div>
    </div>
  </main>
</div>
</template>

<script>
export default {
  name: 'about',
  data: function() {
    return {
      refreshCounter: 0,
      currentId:'id-about_overview',
      sideMenuElement: null
    }
  },
  computed: {
  },
  created : function(){
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted: function(){
    this.sideMenuElement = document.getElementById('dh-about-side-menu');
    // window.scrollTo(0, 240);
  },
  destroyed: function(){
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    sectionClicked: function(event) {
      this.currentId = event.target.id;
    },
    isVisible: function(ids) {
      return ids.includes(this.currentId);
    },
    moveToTag: function(event,id) {
      event.preventDefault();
      this.currentId = event.target.id;
      let element = document.getElementById(`${id}`);
      if(element) {
        // due to support IE11 where scrollY is not available
        let yOff = window.scrollY ? window.scrollY : window.pageYOffset;
        const y = element.getBoundingClientRect().top + yOff;
        window.scrollTo(0, y);
      }
    },
    handleScroll: function() {
      // handling scroll position to support IE11
      let sy = window.scrollY ? window.scrollY : window.pageYOffset;
      let cln = this.sideMenuElement.className;
      let topclass = 'dh-about-main_float-menu_top';
      // handling className instead of classList to support IE11
      if(sy > 250 && this.sideMenuElement) {
        if (cln && !cln.includes(topclass)) {
          cln += ' '+topclass;
          this.sideMenuElement.className = cln;
          console.log(cln);
        }
      } else {
        if (cln && cln.includes(topclass)) {
          let x = cln.indexOf(topclass);
          if(x>=0) {
            let v1 = cln.substring(0, x-1);
            let v2 = cln.substring(x+topclass.length, cln.length);
            console.log(v1+v2);
            this.sideMenuElement.className = v1+v2;
          }
        }
      }
    }
  }
}
</script>

