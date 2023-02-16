import axios from "axios";
import "./miniarticle.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MiniArticle({ category, start, limit }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
      .then((resp) => {
        const datas = [];

        for (let data of resp.data) {
          if (category == data.category) {
            datas.push(data);
          }
        }

        setArticles(datas.reverse());
      });
  }, []);

  return (
    <div>
      {articles.length > 0
        ? articles.slice(start, limit).map((article) => {
            return (
              <div className="mini-article">
                <div className="image">
                  <img
                    src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${article?.idArticle}`}
                    alt="Imagem em destaque"
                  />
                </div>
                <div className="content">
                  <small>{article?.category}</small>
                  <h3>
                    <Link to={`/article_view/${article?.idArticle}`}>
                      {article?.title}
                    </Link>
                  </h3>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}
