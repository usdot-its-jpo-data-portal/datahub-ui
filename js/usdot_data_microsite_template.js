var myVue = new Vue({

    el: '#searchTerms',
    data: {
        background_image: '',//Background image for search bar, set in load_json
        search_placeholder: '',//Placeholder text for search bar on home page

        // functional variables - do not change
        hideResults: 'True',

        searchResults: [], //List of combined search results
        NTLJson: [], //List of NTL datasets loaded from NTL API
        relevanceSortedSearchResults: [], //List of combined search results sorted by relevance
        dateSortedSearchResults: [], //List of combined search results sorted by date
        nameSortedSearchResults: [], //List of combined search results sorted by name
        
        socrata_url: 'https://api.us.socrata.com/api/catalog/v1?q=',//URL for Socrata API
        socrata_domain: '',//Domain of Socrata site to search, set in load_json
        
        query: '',//Search query

        // Entries for template data
        buttonlabels: [],
        buttonTags: [],
        altTextButtonIcons: [],
        imgIcons: [],
        datasets: [],
        urls: [],
        images: [],
        rolloverImages: [],
        srcs: [],
        altTextFDS: [],
        datasetNames: [],
        datasetDesc: [],
        contact_email: "",
        seeMoreToggler: [],

        totalDataCount: 0
    },

    // Function runs on page load
    created: function () {
        
        this.loadNTL(); // Loads the initial static file of NTL Data

        this.datasetCount(); //Sets the total number of datasets available visual

        // Loads the template data
        this.load_json();
        if (window.location.href.indexOf("search") == -1) {
            this.create_buttons();
            this.loadFeaturedDatasets();
        }
    },

    methods: {

        //===============================================SEARCH PAGE INITIALIZATION FUNCTIONS===============================================

        //Function loads template_categories.json and template_datasets.json and stores all values locally, function operates sync on load to prevent timing issue
        load_json: function () {
            var self = this;
            $.ajaxSetup({
                async: false
            });
            // Extracts all information out of data.json
            $.getJSON("template_categories.json", function (json) {
                var i;
                self.socrata_domain = json.domain;
                self.background_image = json.background_image;
                self.contact_email = json.contact_email;
                for (i = 0; i < Math.min(json.maxButtonCount, json.buttons.length) ; i++) {
                    self.buttonlabels[i] = json.buttons[i].CategoryName;
                    self.imgIcons[i] = json.buttons[i].imgIcons;
                    self.rolloverImages[i] = json.buttons[i].rolloverImages;
                    var tagList = [];
                    if (json.buttons[i].tags.length !== undefined) {
                        for (tagIdx = 0; tagIdx < json.buttons[i].tags.length; tagIdx++) {
                            tagList[tagIdx] = json.buttons[i].tags[tagIdx];
                        }
                    }
                    self.buttonTags[i] = tagList;
                    self.altTextButtonIcons[i] = json.buttons[i].altText;
                }
            });
            // Extracts all information from datasets.json
            $.getJSON("template_datasets.json", function (json) {
                var i;
                for (i = 0; i < Math.min(json.maxDatasetCount, json.datasets.length) ; i++) {
                    self.urls[i] = json.datasets[i].url;
                    self.images[i] = json.datasets[i].image;
                    self.altTextFDS[i] = json.datasets[i].altText;
                    self.datasetNames[i] = json.datasets[i].name;
                    self.datasetDesc[i] = json.datasets[i].description;
                }
            });
            $.ajaxSetup({
                async: true
            });
        },

        // Finds the total count of data for search bar placeholder text
        datasetCount: function () {
            var self = this;
            $.get(self.socrata_url + '&search_context=' + self.socrata_domain, function (data) {
                self.totalDataCount = data.results.length + self.NTLJson.length;
                self.search_placeholder = self.totalDataCount.toString() + " data sets and counting!";
            });
        },
        
        //===============================================SEARCH FUNCTIONS===============================================

        //Gets the search results for a search query
        search: function (search_query) {
            var self = this;

            $.get(self.socrata_url + search_query + '&search_context=' + self.socrata_domain, function (data) {
                self.searchResults = [];
                self.addSocratatoSearchResult(data);
                self.addNTLtoSearchResult(search_query);
                self.relevanceSortedSearchResults = self.searchResults.slice();

                self.dateSortedSearchResults = self.searchResults.slice();
                self.dateSortedSearchResults.sort(self.compareDate);

                self.nameSortedSearchResults = self.searchResults.slice();
                self.nameSortedSearchResults.sort(self.compareName);

                for (var i = 0; i < self.searchResults.length; i = i + 1) {
                    self.seeMoreToggler[i] = true;
                }
                document.getElementsByClassName("filterRelevance")[0].checked = true;
            });
            self.query = search_query;
            this.hideResults = "False";
        },
        
        //Sets search term and sends it to search html page
        searchSend: function (search_query) {
            localStorage.setItem("sentSearchTerm", search_query);
            window.location.href = "search.html";
        },

        //===============================================NTL FUNCTIONS===============================================

        // Calls NTL API to grab json file containing ITS JPO dataset listings from NTL, called on webpage load, function operates sync on load to prevent timing issue
        loadNTL: function () {
            $.ajaxSetup({
                async: false
            });
            var itemCountNTL;
            var self = this;
            var NTL_url = "https://rosap.ntl.bts.gov/fedora/export/view/collection/";
            var NTL_collection = "dot:239"; //Limit results to specific collection
            var NTL_datelimit = "?from=2018-01-01T00:00:00Z"; //Limit results to before, after or between a specific date range
            var NTL_rowslimit = "&rows=9999"; //Set number of rows to have returned (NTL default is 100), max 9999

            $.get(NTL_url + NTL_collection + NTL_datelimit + NTL_rowslimit, function (data) {
                var json = JSON.parse(data);
                for (itemCountNTL = 0; itemCountNTL < json.response.docs.length; itemCountNTL++) {
                    //Filter results to pull only dataset types
                    if (json.response.docs[itemCountNTL]["mods.sm_resource_type"][0] == "Dataset"){
                        var tempJson = {};
                        //Read dataset name, description, date
                        tempJson["name"] = json.response.docs[itemCountNTL]["dc.title"][0];
                        tempJson["description"] = json.response.docs[itemCountNTL]["mods.abstract"][0];
                        tempJson["date"] = self.formatDate(json.response.docs[itemCountNTL]["fgs.createdDate"]);

                        //Read dataset tags, add Research Results button tag to all NTL results
                        var tagCount;
                        var allTags = [];
                        var RESEARCHRESULTS = "Research Results";
                        allTags[0] = RESEARCHRESULTS;
                        for (tagCount = 0; tagCount < json.response.docs[itemCountNTL]["mods.sm_key_words"].length; tagCount++) {
                            allTags[tagCount + 1] = json.response.docs[itemCountNTL]["mods.sm_key_words"][tagCount];
                        }
                        tempJson["tags"] = allTags;
                        tempJson["tags"].sort();

                        //Build URL to refer to NTL result using PID
                        var PID = json.response.docs[itemCountNTL].PID.split(":")[1];
                        tempJson["link"] = "https://rosap.ntl.bts.gov/view/dot/" + PID;

                        //Add to NTL datasets JSON list
                        self.NTLJson.push(tempJson);
                    }
                    
                }
            });
            $.ajaxSetup({
                async: true
            });
        },

        //Searches NTL files for match based on tag, title, or description and adds them to combined search result list
        addNTLtoSearchResult: function (search_query) {
            var itemCountNTL;
            var self = this;
            for (itemCountNTL = 0; itemCountNTL < self.NTLJson.length; itemCountNTL++) {
                if(self.NTLJson[itemCountNTL]["name"].toLowerCase().search(search_query.toLowerCase()) > -1){
                    self.searchResults.push(self.NTLJson[itemCountNTL]);
                } else if(self.NTLJson[itemCountNTL]["description"].toLowerCase().search(search_query.toLowerCase()) > -1){
                    self.searchResults.push(self.NTLJson[itemCountNTL]);
                } else {
                    var tagCount;
                    for (tagCount = 0; tagCount < self.NTLJson[itemCountNTL].tags.length; tagCount++) {
                        if (self.NTLJson[itemCountNTL].tags[tagCount].toLowerCase().search(search_query.toLowerCase()) > -1) {
                            self.searchResults.push(self.NTLJson[itemCountNTL]);
                            break;
                        }
                    }
                }
            }
        },

        //===============================================SOCRATA FUNCTION===============================================

        //Adds Socrata search results to combined search result list
        addSocratatoSearchResult: function (items) {
            var itemCount;
            var self = this;
            for (itemCount = 0; itemCount < items.results.length; itemCount++) {
                var tempJson = {};
                tempJson["name"] = items.results[itemCount].resource.name;
                tempJson["description"] = items.results[itemCount].resource.description;
                // if string only has year then only print year, otherwise parse into formatting
                tempJson["date"] = (items.results[itemCount].resource.updatedAt.substring(0,10) < 7) ? items.results[itemCount].resource.updatedAt.substring(0,10) : self.formatDate(items.results[itemCount].resource.updatedAt.substring(0,10));
                var tagCount;
                var allTags = [];
                for (tagCount = 0; tagCount < items.results[itemCount].classification.domain_tags.length; tagCount++) {
                    allTags[tagCount] = items.results[itemCount].classification.domain_tags[tagCount];
                }
                tempJson["tags"] = allTags;
                tempJson["tags"].sort();
                tempJson["link"] = items.results[itemCount].link;
                self.searchResults.push(tempJson);
            }
        },

        ////===============================================SEARCH HELPER FUNCTIONS===============================================
        // Parses a string with a date into a format "Month Day Year"
        formatDate: function (date) {
            var monthNames = [
              "Jan", "Feb", "Mar",
              "Apr", "May", "Jun", "Jul",
              "Aug", "Sep", "Oct",
              "Nov", "Dec"
            ];
            var newDate = new Date(date);
            var day = newDate.getDate();
            var monthIndex = newDate.getMonth();
            var year = newDate.getFullYear();

            return monthNames[monthIndex] + ' ' + day +  ' ' + year;
        },

        // Method used for sorting search results by dataset title alphabetically
        compareName: function (a, b) {
            var self = this;
            const titleA = a.name.toUpperCase();
            const titleB = b.name.toUpperCase();

            let comparison = 0;
            if (titleA > titleB) {
                comparison = 1;
            } else if (titleA < titleB) {
                comparison = -1;
            }
            return comparison;
        },
        
        // Method used for sorting search results by date created
        compareDate: function(a, b) {
            var self = this;
            var dateA = new Date(a.date);
            var dateB = new Date(b.date);

            let comparison = 0;
            if (dateA < dateB) {
                comparison = 1;
            } else if (dateA > dateB) {
                comparison = -1;
            }
            return comparison;
        },

        //===============================================SEARCH RESULT PAGE FORMATTING FUNCTIONS===============================================

        //Creates buttons to select how to organize search results by Name, Date or Relevance
        dropDownFilter: function () {
            var self = this;
            if (document.getElementsByClassName("filterName")[0].checked) {
                self.searchResults = self.nameSortedSearchResults.slice();
            }
            else if (document.getElementsByClassName("filterDate")[0].checked) {
                self.searchResults = self.dateSortedSearchResults.slice();
            }
            else if (document.getElementsByClassName("filterRelevance")[0].checked) {
                self.searchResults = self.relevanceSortedSearchResults.slice();
            }
        },

        //Allows the user to expand the dataset description
        toggleSeeMore: function (index) {
            this.seeMoreToggler[index] = !this.seeMoreToggler[index];
            this.$forceUpdate();
        },

        //===============================================TEMPLATE FUNCTIONS===============================================

        // Function generates html for buttons and all attributes attached to it
        create_buttons: function () {
            var buttonCount = 0;
            var self = this;
            ////////////////
            // Bulma wrapper section
            var bulmaWrapper = document.createElement("div");
            bulmaWrapper.setAttribute("class", "columns is-multiline");
            bulmaWrapper.setAttribute("id", "bulmaDataset");
            bulmaWrapper.setAttribute("style", "padding: 0 0 5% 0; height: 100%");

            var buttonArea = document.getElementById("categoryArea");
            buttonArea.appendChild(bulmaWrapper);

            // Loops through each term/category for buttons in the provided template
            for (i = 0; i < Math.min(10, self.buttonlabels.length) ; i++) {
                // bulma columns
                var bulmaCol = document.createElement("div");
                bulmaCol.setAttribute("class", "bulmaCategories column is-one-quarter");

                var imageHTML = document.createElement("IMG");
                imageHTML.setAttribute("src", self.imgIcons[i]);
                imageHTML.setAttribute("alt", self.altTextButtonIcons[i]);
                imageHTML.setAttribute("style", "width: 55%; height: 55%; margin-bottom: 20%;");
                imageHTML.setAttribute("class", "RegularThumbnail");
                // Sets all attributes of the image
                var imageHover = document.createElement("IMG");
                imageHover.setAttribute("src", self.rolloverImages[i]);
                imageHover.setAttribute("alt", self.altTextButtonIcons[i]);
                imageHover.setAttribute("class", "HoverThumbnail");

                var btn = document.createElement("button");
                btn.setAttribute("class", "topic");
                btn.setAttribute("id", "bterm" + i);
                btn.setAttribute("v-on:click", "searchSend(" + "buttonlabels[" + i + "])");
                btn.style.verticalAlign = "middle";
                btn.setAttribute("style", "padding-bottom: 10px;");
                btn.appendChild(imageHTML);
                btn.appendChild(imageHover);

                var paragraphStyle = document.createElement("p");
                paragraphStyle.innerHTML = self.buttonlabels[i].toUpperCase();
                paragraphStyle.setAttribute("class", "categoryText");
                btn.appendChild(paragraphStyle);

                var myArea = document.getElementsByClassName("contentArea");
                bulmaCol.appendChild(btn);
                bulmaWrapper.appendChild(bulmaCol);

                if (self.buttonlabels[i] == "") {
                    document.getElementById("bterm" + i).parentElement.removeChild(document.getElementById("bterm" + i));
                }
            }
        },

        // auto-hides the search results section if True
        // auto-hides the topic buttons and featured data sets if False
        showFeatured: function () {
            this.query = '';
            //document.getElementById('dotTopBanner').scrollIntoView();
            this.hideResults = "True";
            document.getElementById('mainSearch').focus();
            document.getElementById('mainSearch').select();
        },
        navBarClick: function () {
            this.hideResults = "True";
        },

        // This function loads all featured data sets as html with all attributes
        loadFeaturedDatasets: function () {
            var self = this;
            // bulma column list wrapper
            var bulmaWrapper = document.createElement("div");
            bulmaWrapper.setAttribute("class", "columns is-multiline");
            bulmaWrapper.setAttribute("id", "bulmaDatasetFDS");
            var datasetArea = document.getElementById("datasetArea");
            datasetArea.appendChild(bulmaWrapper);
            for (i = 0; i < this.urls.length; i++) {
                var dataDiv = document.createElement("div");
                dataDiv.setAttribute("id", "fds" + i);
                bulmaWrapper.appendChild(dataDiv);
            }
            for (i = 0; i < this.urls.length; i++) {
                var dataId = self.urls[i].substring(self.urls[i].length - 9, self.urls[i].length);
                this.srcs[i] = "https://data.transportation.gov/w/" + dataId + "/m7rw-edbr?cur=u0WX7_BAfhk&from=root"
                var jsonurl = "https://" + this.socrata_domain + "/views/" + dataId + ".json";
                $.get(jsonurl, function (data) {
                    var datasetArea = document.getElementById("bulmaDatasetFDS");
                    //datasetArea.setAttribute("style", "text-align: center");
                    var aRefLink = document.createElement("a");
                    var datasetName = document.createElement("p");
                    var imgtoBind = document.createElement("IMG");
                    var datasetDesc = document.createElement("p");
                    var myBreak = document.createElement("br");

                    // Allows for each source to be matched by index due to async timing causing mismatch
                    var indexofSource = 0;
                    for (j = 0; j < self.urls.length; j++) {
                        var currentSrc = self.urls[j].substring(self.urls[j].length - 9, self.urls[j].length);
                        if (currentSrc == data.id) {
                            indexofSource = j;
                        }
                    }

                    // bulma columns
                    var bulmaCol = document.getElementById("fds" + indexofSource);
                    bulmaCol.setAttribute("class", "column is-one-quarter");
                    bulmaCol.setAttribute("style", "background: #FFFFFF; margin: 5% auto; padding: 0; max-width: 50%; min-width: 300px;");

                    aRefLink.setAttribute("href", self.urls[indexofSource]);
                    aRefLink.setAttribute("target", "_blank");
                    // DataSets name is set and stored
                    datasetName.setAttribute("class", "featuredHeading");
                    datasetName.innerHTML = (self.datasetNames[indexofSource] !== "") ? self.datasetNames[indexofSource] : data.name;
                    // Sets all attributes of the image
                    imgtoBind.setAttribute("src", self.images[indexofSource]);
                    imgtoBind.setAttribute("alt", self.altTextFDS[indexofSource]);
                    imgtoBind.setAttribute("class", "featuredDataThumbnail");
                    // DataSets description is set and stored
                    datasetDesc.setAttribute("style", "color: black; margin-left: 7%; margin-right: 7%; text-align: left");
                    datasetDesc.innerHTML = (self.datasetDesc[indexofSource] !== "") ? self.datasetDesc[indexofSource] :
                                            data.description == undefined ? "No Description Available" :
                                            data.description.length > 150 ? data.description.substring(0, 150) + "..." :
                                            data.description;
                    // Html is appended and pieced together
                    aRefLink.appendChild(imgtoBind);
                    aRefLink.appendChild(datasetName);
                    aRefLink.appendChild(datasetDesc);
                    aRefLink.appendChild(myBreak);
                    bulmaCol.appendChild(aRefLink);
                    self.datasets[indexofSource] = data;
                });
            }
        }
    }
});


//////////////////////////////////////
// Jquery onclick function for links
var $root = $('html, body');
$('a').click(function () {
    $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});


// Function allows the nav bar to move with the page
$(document).ready(function () {
    $(window).scroll(function () {
        // fixed header is strange.  For now it is hard coded to adjust padding otherwise the text moves
        if ($(window).scrollTop() > 58) {
            $('.navigation-bar').addClass('navbar-fixed');
            $('.TitleText').attr('style', 'padding-top:130px');
        }
        if ($(window).scrollTop() < 58) {
            $('.navigation-bar').removeClass('navbar-fixed');
            $('.TitleText').attr('style', 'padding-top:40px');
        }
    });
});