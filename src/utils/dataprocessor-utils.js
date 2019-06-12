import DateTimeUtils from './datetime-utils.js';

export default {
  processNTLData: function(response) {
    let json = response.data;
    let ntlData = [];
    //Filter results to pull only dataset types
    let dataSets = json.response.docs.filter( (item) => { return item["mods.sm_resource_type"][0] == 'Dataset'; });
    for (let itemCountNTL = 0; itemCountNTL < dataSets.length; itemCountNTL++) {
      var tempJson = {};
      //Read dataset name, description, date
      tempJson["name"] = dataSets[itemCountNTL]["dc.title"][0];
      tempJson["description"] = dataSets[itemCountNTL]["mods.abstract"][0];
      tempJson["date"] = DateTimeUtils.formatDate(dataSets[itemCountNTL]["fgs.createdDate"]);

      let tempAccessLevel = dataSets[itemCountNTL]["rdf.isOpenAccess"][0];

      if((tempAccessLevel == "") || (tempAccessLevel == null)){
        tempJson["accessLevelIsPublic"] ="Public";
      }
      if(tempAccessLevel == "true"){
        tempJson["accessLevelIsPublic"] ="Public";
      }
      else{
        tempJson["accessLevelIsPublic"] = "Restricted";
      }

      //Read dataset tags, add Research Results button tag to all NTL results
      let tagCount;
      let allTags = [];
      let RESEARCHRESULTS = "Research Results";
      allTags[0] = RESEARCHRESULTS;
      for (tagCount = 0; tagCount < dataSets[itemCountNTL]["mods.sm_key_words"].length; tagCount++) {
        allTags[tagCount + 1] = dataSets[itemCountNTL]["mods.sm_key_words"][tagCount];
      }
      tempJson["tags"] = allTags;
      tempJson["tags"].sort();

      //Build URL to refer to NTL result using PID
      let PID = dataSets[itemCountNTL].PID.split(":")[1];
      tempJson["link"] = "https://rosap.ntl.bts.gov/view/dot/" + PID;

      //Add to NTL datasets JSON list
      ntlData.push(tempJson);
    }
    return ntlData;
  },
  processSocratasData: function(response) {
    let items = response.data;
    let socraData = [];
    for (let itemCount = 0; itemCount < items.results.length; itemCount++) {
      let tempJson = {};
      tempJson["name"] = items.results[itemCount].resource.name;
      tempJson["description"] = items.results[itemCount].resource.description;

      let tempAccessLevel = '';
      for (let metadata_element in items.results[itemCount].classification.domain_metadata){
        if(items.results[itemCount].classification.domain_metadata[metadata_element].key == "Common-Core_Public-Access-Level"){
          tempAccessLevel  = items.results[itemCount].classification.domain_metadata[metadata_element].value;
        }
      }
      if(tempAccessLevel == "public" || tempAccessLevel == "Public"){
        tempJson["accessLevelIsPublic"] ="Public";
      }
      else{
        tempJson["accessLevelIsPublic"] = "Restricted";
      }

      // if string only has year then only print year, otherwise parse into formatting
      tempJson["date"] = (items.results[itemCount].resource.updatedAt.substring(0,10) < 7) ? items.results[itemCount].resource.updatedAt.substring(0,10) : DateTimeUtils.formatDate(items.results[itemCount].resource.updatedAt);
      let tagCount;
      let allTags = [];
      for (tagCount = 0; tagCount < items.results[itemCount].classification.domain_tags.length; tagCount++) {
          allTags[tagCount] = items.results[itemCount].classification.domain_tags[tagCount];
      }
      tempJson["tags"] = allTags;
      tempJson["tags"].sort();
      tempJson["link"] = items.results[itemCount].link;
      socraData.push(tempJson);
    }
    return socraData;
  },
  mergeNTLandSocratasData: function(ntlData, socraData, search_query) {
    if(ntlData.length > 0) {
      for (let itemCountNTL = 0; itemCountNTL < ntlData.length; itemCountNTL++) {
        if(ntlData[itemCountNTL]["name"].toLowerCase().search(search_query.toLowerCase()) > -1){
          socraData.push(ntlData[itemCountNTL]);
        } else if(ntlData[itemCountNTL]["description"].toLowerCase().search(search_query.toLowerCase()) > -1){
          socraData.push(ntlData[itemCountNTL]);
        } else {
          for (let tagCount = 0; tagCount < ntlData[itemCountNTL].tags.length; tagCount++) {
            if (ntlData[itemCountNTL].tags[tagCount].toLowerCase().search(search_query.toLowerCase()) > -1) {
              socraData.push(ntlData[itemCountNTL]);
              break;
            }
          }
        }
      }
    }
    return socraData;
  }
}
