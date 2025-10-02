const { chromium } = require('playwright');

(async () => {
  console.log("Starting browser...");   // <-- to see output in terminal
  const browser = await chromium.launch({ headless: false }); 
  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log("Page title:", await page.title());
  await browser.close();
  console.log("Browser closed.");
})();
