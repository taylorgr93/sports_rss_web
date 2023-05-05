import { useEffect, useState } from "react";
import Parser from "rss-parser";
import React from "react";

const feeeURL = "https://e00-marca.uecdn.es/rss/portada.xml";
const parser = new Parser();

export const useAxios = () => {
  const [articles, setArticles] = useState([]);

  const parse = async (url) => {
    const feed = await parser.parseURL(url);
    console.log(feed.title);

    // feed.items.forEach((item) => {
    //   // console.log(`${item.title}\n${item.link}\n\n`);
    //   articles.push({ item });
    // });
  };

  useEffect(() => {
    parse(feeeURL);
    console.log(articles);
  }, []);

  return {
    articles,
  };
};
