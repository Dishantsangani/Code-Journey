const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeHN() {
  try {
    const { data } = await axios.get("https://www.drugs.com/alpha/a.html");
    const $ = cheerio.load(data);

    const titles = [];
    $(".titleline > a").each((index, element) => {
      titles.push($(element).text());
    });

    console.log("Top Hacker News stories:");
    titles.forEach((title, i) => {
      console.log(`${i + 1}. ${title}`);
    });
  } catch (error) {
    console.error("Error scraping Hacker News:", error);
  }
}

scrapeHN();
