import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./articleshortcard.css";

export default function ArticleShortcard({ category }) {
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

  const newArticle = articles.slice(0, 3);

  return (
    <div>
      {articles.length > 0
        ? newArticle.map((article) => {
            return (
              <div className="shortcard">
                <div className="image">
                  <img
                    src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${article?.idArticle}`}
                    alt={article?.title}
                  />
                </div>

                <div className="content">
                  <span>{article?.title}</span>
                </div>
              </div>
            );
          })
        : "Sem artigos disponíveis..."}
    </div>
  );
}
