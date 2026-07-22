const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log("Starting browser...");
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  const jsonResponses = [];
  
  page.on('response', async (response) => {
    const url = response.url();
    const type = response.request().resourceType();
    if (type === 'xhr' || type === 'fetch') {
      try {
        const json = await response.json();
        jsonResponses.push({ url, json });
      } catch (e) {
        // Not JSON
      }
    }
  });

  console.log("Navigating to URL...");
  await page.goto('https://aigiaoduc.io.vn/#/apps/UD1', { waitUntil: 'networkidle0', timeout: 60000 });
  
  console.log("Waiting a bit...");
  await new Promise(r => setTimeout(r, 5000));
  
  fs.writeFileSync('network_data.json', JSON.stringify(jsonResponses, null, 2));
  console.log("Done extracting network data.");

  await browser.close();
})();
