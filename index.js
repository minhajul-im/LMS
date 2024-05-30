const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.minhajul.com/");

    await page.setViewport({ width: 1080, height: 1024 });

    await page.screenshot({ path: "./images/minhaj.png" });

    await browser.close();
  } catch (error) {
    console.log("ERROR", error);
  }
})();
