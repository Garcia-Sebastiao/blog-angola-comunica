import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./articleshortcard.css";

export default function ArticleShortcard({ category }) {
  const [articles, setArticles] = useState([]);
  const length = articles.length;
  let counter = 1;
  let position = 1;

  useEffect(() => {
    axios
      .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
      .then((resp) => {
        setArticles(resp.data);
      });
  }, []);

  return (
    <div>
      {articles.length > 0 ? articles.map((article) => {
        if (category == article.category) {
          if (counter > 0) {
            counter++;
            position++;

            if (counter > 3) {
              counter = 0;
            }
            return (
              <div className="shortcard">
                <div className="image">
                  <img
                    src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${
                      articles[articles.length - position]?.idArticle
                    }`}
                    alt={articles[length - position]?.title}
                  />
                </div>

                <div className="content">
                  <span>{articles[length - position]?.title}</span>
                </div>
              </div>
            );
          }
        }
      }) : 'Sem artigos disponíveis...'}
    </div>
  );
}
