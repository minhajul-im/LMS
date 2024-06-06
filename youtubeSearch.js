import puppeteer from "puppeteer";

const searchTermCLI = process.argv.length >= 3 ? process.argv[2] : "minhaj";
const searchTermENV = process.env.SEARCHTXT ?? "minhaj";

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://www.youtube.com/");
    await page.waitForSelector("#search-input #search");
    await page.type("#search-input #search", searchTermCLI, { delay: 100 });
    await page.emulateVisionDeficiency("blurredVision");
    await page.screenshot({ path: "./images/youtube-blurred.png" });
    await page.emulateVisionDeficiency("none");
    await page.screenshot({ path: "./images/youtube-none.png" });

    await browser.close();
  } catch (error) {
    console.log("ERROR", error);
  }
})();
