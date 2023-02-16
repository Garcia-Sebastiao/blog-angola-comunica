import axios from "axios";
import "./miniarticle.css";
import React, { useEffect, useState } from "react";

export default function MiniArticle({category}) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
      .then((resp) => {
        setArticles(resp.data);
      });
  }, []);

  let length = articles.length;
  let verify = 1;

  return (
    <div>
      {articles.map((article) => {
        if (category == article.category) {
          if (verify > 0) {
            verify++;

            if (verify > 1) {
              return (
                <div className="mini-article">
                  <div className="image">
                    <img
                      src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${
                        articles[length - 1]?.idArticle
                      }`}
                      alt="Imagem em destaque"
                    />
                  </div>
                  <div className="content">
                    <h4>{articles[length - 1]?.title}</h4>
                  </div>
                </div>
              );
            }
          }
        }
      })}
    </div>
  );
}
