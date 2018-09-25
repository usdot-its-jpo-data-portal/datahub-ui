var mochaTimeout = 30000; // ms

var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var until = webdriver.until;
var urlTest = 'http://127.0.0.1:8080/index.html';

var browser;

function closeBrowser() {
    browser.quit();
}

// Use webdriverjs to create a Selenium Client
var browserIdx = 0;
beforeEach(function () {
    this.timeout(30000);
    browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'ie', 'requireWindowFocus': true, 'nativeEvents': false }).build()
    browser.manage().window().maximize();
    return browser.get(urlTest);
});

afterEach(function () {
    return browser.quit();
});

test.describe("IE Test Suite", function () {
    this.timeout(mochaTimeout);
    test.describe("Page Load Components", function () {
        test.it("Title Loaded", function () {
            browser.wait(until.elementLocated(webdriver.By.className('searchHeaderText')));

            browser.findElement(webdriver.By.className('searchHeaderText')).getText().then(function (text) {
                expect(text).to.deep.equal("EXPLORE OUR DATA - Beta Version");
            });
        });
        test.it("Contact Email Loaded", function () {
            browser.wait(until.elementLocated(webdriver.By.id('contactEmail')));

            browser.findElement(webdriver.By.id('contactEmail')).getText().then(function (text) {
                expect(text).to.deep.equal("data.itsjpo@dot.gov");
            });
        });
        test.it("Categories Loaded", function () {
            browser.wait(until.elementLocated(webdriver.By.id('bterm0')));


            browser.findElement(webdriver.By.id('bterm0')).then(function (text) {
                expect(text).to.exist;
            });
        });
        test.it("Datasets Loaded", function () {
            browser.wait(until.elementLocated(webdriver.By.id('fds0')));
            browser.findElement(webdriver.By.id('fds0')).then(function (text) {
                expect(text).to.exist;
            });
        });
    });

    test.describe("Search Related Components", function () {
        test.it("Search Submitted and Results Returned", function () {
            browser.findElement(webdriver.By.className('searchButton')).click();

            browser.findElement(webdriver.By.id('resultsQuery')).getText().then(function (text) {
                expect(text).to.equal("");
            });
            browser.findElement(webdriver.By.className('resultsCount')).getText().then(function (text) {
                expect(parseInt(text)).to.be.above(23);
            });
            browser.findElement(webdriver.By.id('returnPage')).click();
        });
        test.it("Research Results Clicked and Results Returned", function () {
            browser.findElement(webdriver.By.id('bterm5')).click();

            browser.findElement(webdriver.By.id('resultsQuery')).getText().then(function (text) {
                expect(text).to.equal("Research Results");
            });
            browser.findElement(webdriver.By.className('resultsCount')).getText().then(function (text) {
                expect(parseInt(text)).to.be.above(23);
            });
        });
    });
});