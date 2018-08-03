Vue.component('dot-header',{
    template:`<div id="dotTopBanner" style="width: 100%; background: #152350; height: 60px; padding: 5px 0 0 10px">
                <a style="background: none" href="https://transportation.gov">
                    <img src="/data/images/icons/dot_logo.png" style="height: 35px; margin-left: 25px; margin-top: 8px;"alt="department of transportation logo">
                </a>
                <div id="dotTopLinks" style="line-height: 30px; background: #04214f">
                    <a class="headHovers" href="https://www.transportation.gov/mission/about-us" style="font-size: 11px; width: 70px; background: #04214f">ABOUT DOT&emsp;&nbsp;|</a>
                    <a class="headHovers" href="https://www.transportation.gov/briefingroom" style="font-size: 11px; width: 80px; background: #04214f">&emsp;&nbsp;BRIEFING ROOM&emsp;&nbsp;|</a>
                    <a class="headHovers" href="https://www.transportation.gov/our-activities" style="margin-right: 30px; font-size: 11px; width: 70px; background: #04214f">&emsp;&nbsp;OUR ACTIVITIES</a>
                </div>
            </div>`
    
})

Vue.component('navigation-top', {
    template:`<div class="navigation-bar navBarLinks">
                 <a class="headHovers navBarLinks" href="/">ITS JPO SITE</a> <div style="font-size: 15px; padding:3px 7px 3px 7px; display: inline;">|</div>
                 <a class="headHovers navBarLinks" href="/data">HOME</a> <div style="font-size: 15px; padding:3px 5px 7px 7px; display: inline;">|</div>
                 <a class="headHovers navBarLinks" href="/data/about/">ABOUT</a><div style="font-size: 15px; padding:3px 7px 3px 7px; display: inline;">|</div>
                 <a class="headHovers navBarLinks" href="/data/public-access/">PUBLIC ACCESS</a> <div style="font-size: 15px; padding:3px 7px 3px 7px; display: inline;">|</div>
                 <a class="headHovers navBarLinks" href="/data/metrics/">METRICS</a><div style="font-size: 15px; padding:3px 7px 3px 7px; display: inline;">|</div>
                 <a class="headHovers navBarLinks" href="/data/visualizations/">VISUALIZATIONS</a>
                 <a class="headHovers navBarLinks" href="https://github.com/usdot-its-jpo-data-portal/microsite" style="float:right; text-align:right;padding:3px 7px 3px 7px;">VIEW THIS PROJECT ON GITHUB</a>
             </div>`
} )

Vue.component('microsite-footer',{
    data: function(){
        return{
            contact_email:""
        }
    },
   created: function(){
        var self = this;
        $.getJSON("/data/template_categories.json", function (json) {
            self.contact_email = json.contact_email;
        });
    },
    template:`<div id="footerInfo" style="padding-top: 20px;">
                <div style="display:inline; font-size:50px; font-weight:100; text-align:center">
                    <img src="/data/images/icons/dot_logo.png" style="height: 30px;margin-right: 3px;" alt="DOT Logo" /> 
                    |
                    <img src="/data/images/icons/ITS_JPO.png" style="height: 27px" alt="ITS JPO Logo" /> 
                </div>
                <p style="font-weight: bold;">Questions? Contact Us</p>
                <p id="contactEmail">{{ contact_email }}</p>
            </div>`
})

Vue.component('search-main', {
    props:['query'],
    data: function(){
        return{
            background_image: '',//Background image for search bar, set in load_json
            search_placeholder: '',//Placeholder text for search bar on home page
            socrata_url: 'https://api.us.socrata.com/api/catalog/v1?q=',//URL for Socrata API
            socrata_domain: 'data.transportation.gov',//Domain of Socrata site to search, set in load_json
            query: '',//Search query
            totalDataCount: 0
        }
    },    
    // Function runs on page load
    created: function () {
        this.datasetCount(); //Sets the total number of datasets available visual
        var self = this;
        $.getJSON("/data/template_categories.json", function (json) {
            self.background_image = json.background_image;
        });
    },
    methods: {
        //===============================================SEARCH PAGE INITIALIZATION FUNCTIONS===============================================
        // Finds the total count of data for search bar placeholder text
        datasetCount: function () {
            var self = this;
            $.get(self.socrata_url + '&search_context=' + self.socrata_domain, function (data) {
                self.totalDataCount = data.results.length;
                self.search_placeholder = self.totalDataCount.toString() + " data sets and counting!";
            });
        },
        
        //===============================================SEARCH FUNCTIONS===============================================        
        //Sets search term and sends it to search html page
        searchSend: function (search_query) {
            sessionStorage.setItem("sentSearchTerm", search_query);
            window.location.href = "search.html";
        },

    },
    template: `<div class="TitleText" style="padding-top: 40px;">
                    <p class="searchHeaderText">EXPLORE OUR DATA</p>
                    <h3 style="font-size: 18px; color: white; text-align: center; margin-top: 10px;">Department of Transportation ITS JPO Data</h3>
                    <h3 style="font-size: 18px; color: white; text-align: center; margin-bottom: 12px;"> Welcome to the ITS JPO public access point for ITS data</h3>

                    <label for="mainSearch" class="hidden">Search</label>
                    <input class="mainSearch" id="mainSearch" v-model="query" v-on:keyup.enter="searchSend(query)" v-bind:placeholder="search_placeholder"><button class="searchButton" v-on:click="searchSend(query)">SEARCH</button>
                </div>`
})

Vue.component('search-results', {
    props: ['query'],
    data: function(){
        return{
            NTLJson: [], //List of NTL datasets loaded from NTL API
            searchResults: [], //List of combined search results
            relevanceSortedSearchResults: [], //List of combined search results sorted by relevance
            dateSortedSearchResults: [], //List of combined search results sorted by date
            nameSortedSearchResults: [], //List of combined search results sorted by name
            socrata_url: 'https://api.us.socrata.com/api/catalog/v1?q=',
            socrata_domain:"data.transportation.gov",
            seeMoreToggler: []
        }            
    },
    created: function(){
        this.loadNTL(); // Loads the initial static file of NTL Data
        this.search(this.query);
    },
    methods: {
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

    },
    template: `<div id="searchresults" class="contentArea searchResults">
                    <br>
                    <div style="display: flex;">
                        <button id="returnPage" class="readButton" style="font-size: 15px; margin-left: 80px;margin-bottom: 10px" v-on:click="window.location.href = '/data/'">Return to Main Page &raquo;</button>
                    </div>
                    <div style="display: flex; float: right; margin-right: 80px">
                        <p style="line-height: 1.8" class="resultsSectionHeading">Sort By: &nbsp;</p>
                        <nav class="segmented-button">
                            <input v-on:click="dropDownFilter" type="radio" name="seg-1" value="R" id="seg-Relevance" class="filterRelevance" checked>
                            <label for="seg-Relevance" class="first">Relevance</label>
                            <input v-on:click="dropDownFilter" type="radio" name="seg-1" value="N" id="seg-Name" class="filterName">
                            <label for="seg-Name" class="first">Name</label>
                            <input v-on:click="dropDownFilter" type="radio" name="seg-1" value="D" id="seg-Date" class="filterDate">
                            <label for="seg-Date" class="last">Date</label>
                        </nav>
                    </div>
                    <div style="display: flex;">
                        <p class="resultsSectionHeading"><b>SEARCH RESULTS FOR:&nbsp;</b></p>
                        <p class="resultsQuery"><b id="resultsQuery">{{query}}</b></p><br>
                    </div>

                    <div style="display: flex;">
                        <p class="resultsSectionHeading"><b>Number of results:&nbsp;</b><p>
                        <p class="resultsCount"><b>{{searchResults.length}}</b></p><br>
                    </div>



                    <hr class="resultsDivider" noshade>
                    <br>

                    <!--generates a bullet point for each search result item-->
                    <div style="margin-left: 100px; margin-right: 100px;">

                        <!--displays results if there are results-->
                        <ul v-if="searchResults.length > 0" style="list-style: none; padding-left: 0px;">
                            <li v-model="seeMoreToggler" v-for="(item,index) in searchResults" style="margin-bottom: 30px; list-style: none;">

                                <table style="width: 100%">
                                    <tr>
                                        <td style="width: 70%">
                                            <!--the data set name-->
                                            <a class='resultItemHeader' style="padding-right: 0%" :href="item.link" target="_blank">
                                                {{ item.name }}

                                            </a>
                                        </td>
                                        <td style="text-align: right; width: 30%">
                                            <p class="resultItemHeader" style="float: right; font-size: 18px;">
                                                Date Added: {{ item.date}}
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                                <!--the data set description-->
                                <p v-if="item.description.length > 300 && seeMoreToggler[index] && item.description.indexOf(' ', 290) != -1" style="font-size: 15px; padding-top: 5px;">{{ item.description.substring(0,item.description.indexOf(" ", 290))}}...</br><button class="readButton" v-on:click="toggleSeeMore(index)">Read More</button></p>
                                <p v-else-if="item.description.length > 300 && seeMoreToggler[index]" style="font-size: 15px; padding-top: 5px;">{{ item.description.substring(0,item.description.lastIndexOf(" "))}}...</br><button class="readButton" v-on:click="toggleSeeMore(index)">Read More</button></p>
                                <p v-else-if="item.description.length > 300 && !seeMoreToggler[index]" style="font-size: 15px; padding-top: 5px;">{{ item.description }}</br><button class="readButton" v-on:click="toggleSeeMore(index)">Read Less</button></p>
                                <p v-else-if="item.description.length > 0" style="font-size: 15px; padding-top: 5px;">{{ item.description}}</p>
                                <p v-else style="font-size: 15px; padding-top: 5px;">No description available.</p>

                                <!--lists the domain tags-->
                                <div v-if="item.tags.length > 0" style="padding-top: 5px;">
                                    <p style="float:left; padding: 3px; height: 30px; line-height: 30px;">Tags: </p>
                                    <button v-for="tag in item.tags" class='tag' v-on:click="search(tag)">{{tag}}</button>
                                </div>
                                <hr v-if="searchResults.length != index+1" style="border-color: #DEDEDE" noshade>
                            </li>
                            <div v-else>
                                <p>No search results.</p>
                            </div>
                    </div>
                </div>`
})

Vue.component('category-search', {
    data: function(){
        return{
                // Entries for template data
                buttons: []
        }
    },
    created: function(){
        this.load_categories_json();
    },
    methods: {
        load_categories_json: function () {
            var self = this;
            $.ajaxSetup({
                async: false
            });
            // Extracts all information out of data.json
            $.getJSON("template_categories.json", function (json) {
                var i;
                for (i = 0; i < Math.min(json.maxButtonCount, json.buttons.length) ; i++) {
                    self.buttons.push({ 'labels': json.buttons[i].CategoryName,
                                        'imgIcons':json.buttons[i].imgIcons,
                                        'rolloverImages': json.buttons[i].rolloverImages,
                                        'altText': json.buttons[i].altText,
                                        'id':"bterm" + i});
                }
            });
            $.ajaxSetup({
                async: true
            });
        },
        //===============================================SEARCH FUNCTIONS===============================================        
        //Sets search term and sends it to search html page
        searchSend: function (search_query) {
            sessionStorage.setItem("sentSearchTerm", search_query);
            window.location.href = "search.html";
        }
    },
    template: `
        <div id="categoryDiv">
            <img class="contentIndicator" style="top: -57px" src="images/icons/ContentIndicator.png" alt="Content Indicator Arrow"/>
            <div id="CategoryAreaHead">
                <p class="headingFont" style="color: #3585B2">POPULAR DATA SET TOPICS</p>
            </div>

            <div id="categoryArea" class="contentArea categorylayout">
                <div id="bulmaDataset" class="columns is-multiline" style="padding: 0 0 5% 0; height: 100%">
                    <div class="bulmaCategories column is-one-quarter" v-for="btn in buttons">
                        <button v-bind:id="btn.id" class="topic" vertical-align="middle" style="padding-bottom: 10px;" v-on:click="searchSend(btn.labels)">
                            <img v-bind:src="btn.imgIcons" v-bind:alt="btn.altText" style="width: 55%; height: 55%; margin-bottom: 20%;" class="RegularThumbnail">
                            <img v-bind:src="btn.rolloverImages" v-bind:alt="btn.altText" class="HoverThumbnail"> 
                            <p class="categoryText" style="text-transform: uppercase;">{{btn.labels}}</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>`
})

Vue.component('featured-data', {
    data:  function(){
        return{
                datasets: [],
        }
    },
    created:function(){
        this.load_dataset_json();
    },       
    methods: {
        load_dataset_json: function() {
            $.ajaxSetup({
                async: false
            });
            var self = this;
                        // Extracts all information from datasets.json
            $.getJSON("template_datasets.json", function (json) {
                var i;
                for (i = 0; i < Math.min(json.maxDatasetCount, json.datasets.length) ; i++) {
                    self.datasets.push({
                        'url': json.datasets[i].url,
                        'image':json.datasets[i].image,
                        'altText':json.datasets[i].altText,
                        'name':json.datasets[i].name,
                        'desc':json.datasets[i].description,
                        'id': "fds" + i,
                        'dataId': json.datasets[i].url.substring(json.datasets[i].url.length - 9, json.datasets[i].url.length)
                    })
                }
            });
            $.ajaxSetup({
                async: true
            });
        }
    },
    template: `<div id="DatasetDiv" style="text-align: center;">
            <img class="contentIndicator" style="top: -30px" src="/data/images/icons/ContentIndicator.png" alt="Content Indicator Arrow"/>
            <div id="FeaturedDataArea">
                <p class="headingFont" style="background-color: #152350; color: white; padding-top: 3%;">FEATURED DATA SETS</p>
            </div>
            <div class="contentArea" style="background-color: #152350;">
                <div style="display: flex; margin-left: 8%; margin-right: 8%; " id="datasetArea">
                    <div id="bulmaDatasetFDS" class="columns is-multiline">
                        <div v-for="dataset in datasets" class="column is-one-quarter" style="background: #FFFFFF; margin: 5% auto; padding: 0; max-width: 50%; min-width: 300px;" v-bind:id="dataset.id">
                            <a v-bind:href="dataset.url" target="_blank">
                                <img v-bind:src="dataset.image" v-bind:alt="dataset.altText" class="featuredDataThumbnail">
                                <p class="featuredHeading">{{dataset.name}}</p>
                                <p style="color: black; margin-left: 7%; margin-right: 7%; text-align: left">{{dataset.desc}}</p>
                                <br> 
                        </div>
                    </div>
                </div>
            </div>
        </div>`
})

var myVue = new Vue({
    el: '#searchTerms',
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