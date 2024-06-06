import puppeteer from "puppeteer";

const searchTermCLI = process.argv.length >= 3 ? process.argv[2] : "minhaj";
const searchTermENV = process.env.SEARCHTXT ?? "minhaj";

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://www.google.com/");
    await page.waitForSelector("#APjFqb");
    await page.type("#APjFqb", searchTermCLI, { delay: 100 });
    await page.emulateVisionDeficiency("blurredVision");
    await page.screenshot({ path: "./images/google-blurred.png" });
    await page.emulateVisionDeficiency("none");
    await page.screenshot({ path: "./images/google-none.png" });

    await browser.close();
  } catch (error) {
    console.log("ERROR", error);
  }
})();
