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
    <div className="connected-articles">
      {articles.length > 0
        ? articles.map((article) => {
            return <ArticleCard article={article} />;
          })
        : <p style={{padding: '1rem 0'}}>Sem artigos disponíveis...</p>}
    </div>
  );
}
