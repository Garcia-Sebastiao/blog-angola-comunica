import axios from "axios";
import React, { useEffect, useState } from "react";

import "./connectedarticles.css";
import image from "../../../../assets/images/about-image.svg";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ConnectedArticles({ category }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
      .then((resp) => {
        setArticles(resp.data);
      });
  }, []);

  let length = 0;
  let verify = 0;

  return (
    <div className="connected-articles">
      {articles.map((article) => {
        if (category == article.category) {
          length++;

          if (length > 0) {
            return <ArticleCard article={article} />;
          } else {
            return (
              <p style={{ padding: "1rem 0" }}>Sem artigos relacionados.</p>
            );
          }
        }
      })}
    </div>
  );
}
