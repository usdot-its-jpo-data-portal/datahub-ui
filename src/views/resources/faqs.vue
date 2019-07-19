<template>
  <div class="usa-layout-docs__main desktop:grid-col-9 usa-prose">
    <h1>Frequency Asked Questions (FAQs)</h1> <!--comment!-->

    <h2>What is the purpose of a preliminary DMP and a post-award DMP?</h2>
    <p>Data Management Plans (DMPs) are living documents describing how researchers will handle digital data both during and after a research project and how a research proposal conforms to U.S. DOT policy on the dissemination and sharing of research results. They are essential tool for ensuring proper data management occurs.</p>
    <p>A preliminary DMP is a document provided in the early stages of a research project, usually during the application stage of a solicitation, that offers preliminary information on data management of a project. The purpose of this document is to begin planning for data management at the beginning of a project in order to make necessary preparations for when data is produced by the project.</p>
    <p>A post-award DMP is an update to the preliminary DMP that occurs once the project has begun, usually 60 days after award of a solicitation, and is continually updated as data management details change. The purpose of this document is to maintain up-to-date information on all details of a project’s data management.</p> 
    
    <h2>Please clarify 'near real-time' -- e.g. should this be measured in milliseconds, seconds, minutes, hours, and/or days?</h2>
    <p>Near real-time means the data has been made available as soon as possible after data collection. This depends on the nature of the data, the nature of the need, and any privacy protections or processes that needs to be applied. This frequency could be streaming, so true real time, or periodic dash uploads of a frequency that could be minutes, days, weeks or months. We need you to specify your frequency of update to us in your data management plan, and it should be as near to real-time as possible.</p>
    
    <h2>Does the applicant need to submit multiple data management plans (DMPs) if they are submitting multiple projects in the same application?</h2>
    <p>The applicant may choose whether to provide one or multiple DMPs. Whichever approach they decide, the applicant should clearly indicate how all the data will be managed.</p>

    <h2>What kind of data should I provide?</h2>
    <p>Appropriate data will vary according to the scope and goals of the proposed project.  Applicants should consider the feasibility of obtaining and sharing data in preparing their proposals. In addition, appropriate data should be collected to support evaluation of the demonstrated system.</p>


    
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
