const cors = require("cors"); // import express
const express = require("express"); // import express
const Parser = require("rss-parser");
const { port } = require("./config/vars");

// const feeeURL = "https://www.espn.com/espn/rss/news";
const feeeURL = "https://e00-marca.uecdn.es/rss/portada.xml";
const parser = new Parser();
let articles = [];
const parse = async (url) => {
  const feed = await parser.parseURL(url);
  feed.items.forEach((item) => {
    // console.log(`${item.title}\n${item.link}\n\n`);
    articles.push({ item });
  });
};

parse(feeeURL);

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  console.log(articles);
  res.status(200).send(articles);
});

const server = app.listen(port, () => {
  console.log(`App is listening in ${port}`);
});
