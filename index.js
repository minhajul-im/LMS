const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://google.com/");

    await page.setViewport({ width: 1080, height: 1024 });

    await page.screenshot({ path: "google.png" });

    await browser.close();
  } catch (error) {
    console.log("ERROR", error);
  }
})();
