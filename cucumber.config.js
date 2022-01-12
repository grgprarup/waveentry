const {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium } = require("playwright");
const { expect } = require("@playwright/test");
const config = require("./tests/acceptance/config");

const {
  deleteAllStudents,
  deleteTestUsers,
} = require("./tests/acceptance/testHelper/cleanup.js");

global.expect = expect;
global.testUsers = [];
setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  global.browser = await chromium.launch({
    channel: "chrome",
    // headless: true,
  });

  // console.log("This is before all hooks");
});

AfterAll(async function () {
  await global.browser.close();
  // console.log("This is after all hooks");
});

Before(async function () {
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
  // console.log("this is before scenario!!!!");
});

After(async function () {
  // console.log("this is after scenario!!");

  await global.page.close();
  await global.context.close();
  await deleteAllStudents();
  await deleteTestUsers();
});
