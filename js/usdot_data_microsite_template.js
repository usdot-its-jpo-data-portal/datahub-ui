var myVue = new Vue({

    el: '#searchTerms',
    data: {
        background_image: '',
        search_placeholder: '',

        // functional variables - do not change
        hideResults: 'True',
        items: '',
        resultsJson: [],
        NTLJson: [],
        responseSocrata: '',
        // data set topics and search domain
        // modify these values to your preference
        url: 'https://api.us.socrata.com/api/catalog/v1?q=',
        
        query: '',

        // Lists for dynamic data
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
        domain: '',
        seeMoreToggler: [],

        totalDataCount: 0
    },

    // Function runs on page load
    created: function () {
        // Loads the initial static file of NTL Data
        this.addNTL();
        
        // Loads the template data
        this.load_json();
        if (!window.location.href.includes("search")) {
            this.create_buttons();
            this.loadFeaturedDatasets();
        }
    },

    methods: {
        // Method used for sorting json data when DTG and NTL are combined
        compare: function (a, b) {
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
        
        // Method used for sorting json data by date
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

        // function loads data.json and stores all values locally, function operates sync on load to prevent timing issue
        load_json: function () {
            var self = this;
            $.ajaxSetup({
                async: false
            });
            // Extracts all information out of data.json
            $.getJSON("template_categories.json", function (json) {
                var i;
                self.domain = json.domain;
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

        // Finds the total count of data for header
        initialSearch: function () {
            var self = this;
            $.get(self.url + '&search_context=' + self.domain, function (data) {
                self.totalDataCount = data.results.length + self.NTLJson.length;
                self.search_placeholder = self.totalDataCount.toString() + " data sets and counting!";
            });
        },

        // sets search term and sends to to next page
        searchSend: function (search_query) {
            localStorage.setItem("sentSearchTerm", search_query);
            window.location.href = "search.html";
        },

        // gets the JSON data for a search term and sets it to the "items" variable
        search: function (search_query) {
            var self = this;
            var buttonIdx;
            var newQ = search_query;
            //for (buttonIdx = 0; buttonIdx < self.buttonlabels.length; buttonIdx++) {
            //    if (search_query === self.buttonlabels[buttonIdx]) {
            //        var tagIdx;
            //        if (self.buttonTags[buttonIdx] !== undefined) {
            //            for (tagIdx = 0; tagIdx < self.buttonTags[buttonIdx].length; tagIdx++) {
            //                newQ = newQ + "+" + self.buttonTags[buttonIdx][tagIdx];
            //            }
            //        }
            //    }
            //}
            $.get(self.url + newQ + '&search_context=' + self.domain, function (data) {
                self.resultsJson = [];
                self.items = data;
                self.addSocratatoJson();
                self.addNTLtoJson(search_query);
                self.resultsJson.sort(self.compare);
                //document.getElementById('searchresults').scrollIntoView();
                for (var i = 0; i < self.resultsJson.length; i = i + 1) {
                    self.seeMoreToggler[i] = true;
                }
                document.getElementsByClassName("filterName")[0].checked = true;
            });
            self.query = search_query;
            this.hideResults = "False";
        },

        dropDownFilter: function () {
            var self = this;
            if (document.getElementsByClassName("filterName")[0].checked) {
                self.resultsJson.sort(self.compare);
            }
            else if (document.getElementsByClassName("filterDate")[0].checked) {
                self.resultsJson.sort(self.compareDate);
            }
        },

        toggleSeeMore: function (index) {
            this.seeMoreToggler[index] = !this.seeMoreToggler[index];
            this.$forceUpdate();
        },

        // Loads json file for NTL data, called on webpage load (will be used until NTL becomes api called)
        addNTL: function () {
            var itemCountNTL;
            var self = this;

            $.getJSON("json/NTL.json", function (json) {
                for (itemCountNTL = 0; itemCountNTL < json.datasets.length; itemCountNTL++) {
                    var tempJson = {};
                    tempJson["name"] = json.datasets[itemCountNTL].title;
                    tempJson["description"] = json.datasets[itemCountNTL].Abstract;
                    // if string only has year then use that, otherwise parse string into date formatting
                    tempJson["date"] = (json.datasets[itemCountNTL].PublicationDate.length < 7) ? json.datasets[itemCountNTL].PublicationDate : self.formatDate(json.datasets[itemCountNTL].PublicationDate);

                    var tagCount;
                    var allTags = [];
                    var RESEARCHRESULTS = "Research Results";

                    allTags[0] = RESEARCHRESULTS;
                    for (tagCount = 0; tagCount < json.datasets[itemCountNTL].tags.length; tagCount++) {
                        allTags[tagCount + 1] = json.datasets[itemCountNTL].tags[tagCount];
                    }
                    tempJson["tags"] = allTags;
                    tempJson["tags"].sort();
                    tempJson["link"] = json.datasets[itemCountNTL].URL;
                    self.NTLJson.push(tempJson);
                }
                self.initialSearch();
            });
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

        // searches ntl files for match based on tag (will be used until NTL becomes API called)
        addNTLtoJson: function (search_query) {
            var itemCountNTL;
            var self = this;
            var buttonIdx = -1;
            var tempCount;
            // match query to button
            for (tempCount = 0; tempCount < self.buttonlabels.length; tempCount++) {
                if (search_query === self.buttonlabels[tempCount]) {
                    buttonIdx = tempCount;
                }
            }
            for (itemCountNTL = 0; itemCountNTL < self.NTLJson.length; itemCountNTL++) {
                for (tagCount = 0; tagCount < self.NTLJson[itemCountNTL].tags.length; tagCount++) {
                    // Checks if tag matches query
                    if (self.NTLJson[itemCountNTL].tags[tagCount].toLowerCase().search(search_query.toLowerCase()) > -1) {
                        self.resultsJson.push(self.NTLJson[itemCountNTL]);
                        tagCount = self.NTLJson[itemCountNTL].tags.length;
                    }
                    else {
                        var buttonCount;
                        if (self.buttonTags[buttonIdx] !== undefined) {
                            for (buttonCount = 0; buttonCount < self.buttonTags[buttonIdx].length; buttonCount++) {
                                if (self.NTLJson[itemCountNTL].tags[tagCount].toLowerCase().search(self.buttonTags[buttonIdx][buttonCount].toLowerCase()) > -1) {
                                    self.resultsJson.push(self.NTLJson[itemCountNTL]);
                                    buttonCount = self.buttonTags[buttonIdx].length;
                                }
                            }
                        }
                    }
                }
            }
        },

        // adds socrata data together with NTL for one query display
        addSocratatoJson: function () {
            var itemCount;
            var self = this;
            for (itemCount = 0; itemCount < self.items.results.length; itemCount++) {
                var tempJson = {};
                tempJson["name"] = self.items.results[itemCount].resource.name;
                tempJson["description"] = self.items.results[itemCount].resource.description;
                // if string is only has year then only print year, otherwise parse into formatting
                tempJson["date"] = (self.items.results[itemCount].resource.updatedAt.substring(0,10) < 7) ? self.items.results[itemCount].resource.updatedAt.substring(0,10) : self.formatDate(self.items.results[itemCount].resource.updatedAt.substring(0,10));
                var tagCount;
                var allTags = [];
                for (tagCount = 0; tagCount < self.items.results[itemCount].classification.domain_tags.length; tagCount++) {
                    allTags[tagCount] = self.items.results[itemCount].classification.domain_tags[tagCount];
                }
                tempJson["tags"] = allTags;
                tempJson["tags"].sort();
                tempJson["link"] = self.items.results[itemCount].link;
                self.resultsJson.push(tempJson);
            }
        },

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
                var jsonurl = "https://" + this.domain + "/views/" + dataId + ".json";
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