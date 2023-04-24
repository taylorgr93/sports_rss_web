import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Feed } from "./Feed";
import logoMarca from "./logoMarca.svg";

function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:3010/");
      // console.log(res);
      setArticles(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-5">
        RSS Feed Sports
      </h1>
      <h2 className="text-3xl font-semibold text-center mt-2 mb-4">
        From HiveCoding
      </h2>
      <div className="w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
        <div>
          <img src={logoMarca} alt="Logo" />
        </div>

        {articles.map((article, i) => {
          return (
            <Feed
              key={i}
              title={article.item.title}
              link={article.item.link}
              date={article.item.pubDate}
              contentSnippet={article.item.contentSnippet}
              categories={article.item.categories}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
