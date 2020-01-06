# USDOT JPO Microsite Template

The microsite is a standalone website that has been templated so that small changes can be made in a couple json files to create the desired website look and functionality.        

The microsite template is designed to provide users of USDOT data a new standardized entry point for them to explore USDOT DOT data and for various groups within the USDOT to create custom data home pages with the template to promote their data.  The template is not intended to be a replacement for data.transportation.gov (DTG) or the National Transportation Library (NTL) sites but instead enhance those sites by providing additional entry points to those two systems in support of the ITS JPO No Wrong Door Policy. 

The website capabilities include querying desired data from a given domain, creating custom categories/buttons that search through the given domain, displaying featured datasets for users to see on page load, displaying system use metrics, detailing data access and retention policy and hosting sample visualizations of data.

The microsite is developed completely using JavaScript, CSS, and HTML and requires no installation of software to run. External JavaScript and CSS libraries are:

* [JavaScript jQuery](https://jquery.com/) - Used for AJAX calls
* [JavaScript Vue](https://vuejs.org/) - Framework used for HTML to Javascript data transfer
* [CSS font-awesome v4.7.0](http://fontawesome.io/) - Used to style the microsite
* [CSS bulma v0.5.0](https://bulma.io/) - Used to handle grid layouts

Javascript libraries are referenced using CDNs. All CSS files, include custom CSS are under the css folder. [Babel](https://babeljs.io/) is used to convert the usdot_data_microsite_template.js ES2015 JavaScript to be backward compatible and minified. 

The core search functionality of the microsite is written with the Vue Javascript Framework consisting of seven Vue components. 

- **DOT header** - This component contains the HTML template for the USDOT standard header at the top of the page.
- **Navigation top** - This component contains the HTML template for the data microsite's navigation bar.
- **Microsite footer** - This components contains the HTML template for the data microsite's footer. The email address in the footer is loaded from template_categories.json and can be modified in that file.
- **Search main** – This component sets the look for the search bar, including the placeholder text advertising the number of available datasets to search. The user enters their search query here and that data is then picked up by the search results component. 
- **Search results** - This components executes the code to pull down the latest NTL datasets into a searchable JSON, then searches DTG and NTL for the query the user entered either under the search bar or by clicking a category. The component also has the template for the search results page, which displays results for all domains in a common format including the dataset title, description and tags, as they are listed on the external domain. The user interface allows for the search results to be ordered by Relevance, Date or Alphabetically. For example, if a user enters “weather” into the search bar the site will return all dataset results from DTG and NTL that include the term “weather” somewhere in the dataset's tags, title or description and display them to the user in a common format. 
- **Category search** – This component executes the code that provides the user with a set of typical search term categories that the user can select from to help them discover data. The category information is set in template_categories.json. 
- **Featured data** – This component executes the code the creats the featured dataset boxes that are links to datasets or visualizations that the site manager wants to highlight. The dataset information is pulled from template_datasets.json and is currently limited to three featured datasets. 

These Vue compontents are then included into HTML pages index.html and search.html that the user access through a standard branching URL. The metrics, about and public access pages are static HTML, but include the header and footer components to make it so that header and footer updates propogate out to the entire site with a single change. 

## Getting Started

The microsite is designed as a template with minimal Javascript updates necessary to be used for new data. A developer interested in search functionality for data.transportation.gov and the National Transportation Library will only need to update template_categories.json and template_datasets.json to set the values for the category search and featured datasets respectively. If a developer is interested in using this code to create a site that searches other domains, they will need to modify some methods under the search-main and search-results Vue components to work with the search API for their chosen domains. Details for the three files are below. 

### usdot_data_microsite_template.js
This file contains the seven Vue components that make up the microsite's javascript code as detailed above. Vue components are entirely self contained with the HTML used to display the element and the Javascript methods used to build it in a single component. Changes can be made to a component and will automatically be propogated out into each page of the site. The HTML codebase references only the components it needs to reduce load times. Some changes a developer might need to make are:

1. Modifying links provided in the navigation bar. This can be done by changing the HTML in the template value of the nagivation-top component. 
```
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
```
2. Changing where a query is searched. This can be done by making a couple changes to the search-results component. First the developer needs to create their own version of the addNTLtoSearchResult and addSocratatoSearchResult that uses the searching API of their chosen domain. Then the search function needs to be modified to remove unnecessary addtoSearchResult functions and include the new one.
 ```
 addSocratatoSearchResult: function (search_query) {
    var itemCount;
    var self = this;
    $.get(self.socrata_url + search_query + '&search_context=' + self.socrata_domain, function (items) {
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
    });
},
 ```
3. Changing the placeholder text for the search box. The placeholder text is set in the search-main component method dataset count. The developer can change this so that the self.search_placeholder variable is set to a new value. 
```
        datasetCount: function () {
            var self = this;
            $.get(self.socrata_url + '&search_context=' + self.socrata_domain, function (data) {
                self.totalDataCount = data.results.length;
                self.search_placeholder = self.totalDataCount.toString() + " data sets and counting!";
            });
```
### template_categories.json:
This file contains all the category data and extra data (the background image on the main page and the contact email in the footer). Below is a cut out of what the category search looks like on the microsite and the JSON associated with the screenshot. 
![alt text](images/screenshots/ButtonScreenshot.png "Category Layout Screenshot")

"background_image" is a chosen background image placed in "/images" will appear behind the search bar.  
"contact_email": is the email that will be displayed in the footer of the page.

```
    "background_image": "./images/Transportation Background.png",
    "contact_email": "data.itsjpo@dot.gov",
```

The category search buttons are a list of JSON objects under the key "buttons". The buttons have a category name, image, rollover image and altText to be 508 compliant. Place all the icon image files for the categories in the "/images/icons" folder and reference them in the "imgIcons" and "rolloverImages" JSON field. The "rolloverImages" should be the same image exaggerated in some manner to make it clear that the user is clicking on that category.

```
 "buttons": [
        {
            "CategoryName": "Connected Vehicle Message",
            "imgIcons": "/data/images/icons/CVPCars.png",
            "rolloverImages": "/data/images/icons/CVPCars_Rollover.png",
            "altText": "search for connected vehicle message"
        }, {
            "CategoryName": "Application Message",
            "imgIcons": "/data/images/icons/AppMessage.png",
            "rolloverImages": "/data/images/icons/AppMessage_Rollover.png",
            "altText": "search for application message"
        }, {
        ...
```

### template_datasets.json:
This file contains information for the featured datasets.  Below is a cut out of what the featured datasets look like on the microsite and the JSON associated with the screenshot.
![alt text](images/screenshots/DatasetsScreenshot.PNG "Datasets Layout Screenshot")
Dataset Layout in JSON Format:
There are five fields for each dataset:
1. 'name' This is the name that will be displayed.  If no name is provided the title of the page that is pulled from the URL will be used.
2. 'description' This is the description of the dataset that will be displayed.  If no description is provided the description of the page that is pulled from the URL will be used.
3. 'url' The URL is where the data will come from.
4. 'image' The image is the image that will be displayed.
5. 'altText' This is the alternate image text for accessibility.

```
    "datasets": [
        {
            "name": "Wyoming CV Pilot Basic Safety Messages Sample",
            "description": "Contains a sample of sanitized Basic Safety Messages collected from the Wyoming Connected Vehicle pilot.",
            "url": "https://data.transportation.gov/Automobiles/Wyoming-CV-Pilot-Basic-Safety-Message-One-Day-Samp/9k4m-a3jc",
            "image": "./images/Wyoming DOT Connected Vehicle Pilot.png",
            "altText": "Link to sample Wyoming CV Pilot Basic Safety Messages on data.transportation.gov"
        },
        {
            "name": "Wyoming Connected Vehicle Pilot Basic Safety Message Visualization",
            "description": "A visualization portal for the Wyoming CV Pilot Basic Safety Messages.",
            "url": "https://data.transportation.gov/Automobiles/Wyoming-Connected-Vehicle-Pilot-Basic-Safety-Messa/hchs-a7s6",
            "image": "./images/Wyoming Connected Vehicle Pilot Basic Safety Message Visualization.png",
            "altText": "Map and histograms of Wyoming CV Pilot Basic Safety Messages on data.transportation.gov"
        },
        {
            "name": "Proof-of-Concept Vehicle Platooning Based on CACC",
            "description": "Performance of a proof-of-concept vehicle platooning based on Cooperative Adaptive Cruise Control (CACC).",
            "url": "https://data.transportation.gov/Automobiles/Test-Data-of-Proof-of-Concept-Vehicle-Platooning-B/wpek-zziu",
            "image": "./images/video.jpeg",
            "altText": "Link to Test Data of Proof-of-Concept Vehicle Platooning Based on Cooperative Adaptive Cruise Control (CACC) on data.transportation.gov"
        }
    ]
```

## Testing

1. In order to run tests node package manager is installed (npm) must be installed.

2. 'npm install' must then be run in the '/microsite' directory.  This command installs all dependencies specified in the package.json

2. Open up a terminal at '/microsite' and run the command 'http-server'.  This will create an instance of the website to run locally.

3. Navigate into the '/microsite/test' directory and from another terminal run the shell script using ./testRunner.js in the terminal. This script will run the browser tests.

The test cases use a variety of different softwares to run these tests
* [Selenium Webdriver](http://www.seleniumhq.org/projects/webdriver/) - Software used to run the tests in the three web browsers IE, Firefox, and Chrome.
* [Mocha JS](https://mochajs.org/) - Framework used to handle the test cases.
* [Chai JS](http://chaijs.com/) - Assertion library used in conjunction with MochaJS.
* [http-server](https://www.npmjs.com/package/http-server) - HTTP server created to run the website locally


## Versioning

* **Version 1.0** -  Initial version of the template 


## License

This project is licensed under the Apache License - see the [LICENSE.txt](LICENSE.txt) file for details
