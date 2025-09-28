import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
Before(async function () {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  this.browser = await chromium.launch({ headless: false,channel: 'chrome' });
  this.page = await this.browser.newPage();
});
After(async function () {
  //await this.page?.close();
  //await this.browser?.close();
});