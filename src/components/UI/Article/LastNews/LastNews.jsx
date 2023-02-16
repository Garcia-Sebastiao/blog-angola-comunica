import axios from "axios";
import React, { useEffect, useState } from "react";

import "./lastnews.css";

import image from "../../../../assets/images/about-image.svg";
import MiniArticle from "../../Article/MiniArticle/MiniArticle";

export default function LastNews({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
      .then((resp) => {
        const arr = [];
        for (const data of resp.data) {
          if (category == data.category) {
            arr.push(data);
          }
        }
        setArticles(arr.reverse());
      });
  }, []);

  return (
    <div className="lastnews">
      {articles.length > 0
        ? articles.slice(0, 1).map((article) => {
            return (
              <div className="lastnew-article">
                <div className="image">
                  <img
                    src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${article?.idArticle}`}
                    alt={article?.idArticle}
                  />
                </div>

                <h2>
                  <Link to={`/article_view/${article?.idArticle}`}>
                    {article?.title}
                  </Link>
                </h2>

                <p>{article?.subtitle}</p>
              </div>
            );
          })
        : "Sem artigos disponíveis..."}

      <div className="mini-articles">
        <MiniArticle category={category} start={1} limit={3} />
      </div>
    </div>
  );
}
