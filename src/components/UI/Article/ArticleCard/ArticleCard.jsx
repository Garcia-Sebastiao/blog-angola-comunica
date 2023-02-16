import React from "react";
import { Link } from "react-router-dom";

import "./articlecard.css";
export default function ArticleCard({ article }) {
  const image = `https://apiblogdb.onrender.com/blog/global/view_article/image/${article?.idArticle}`;

  return (
    <div className="article-card">
      <div className="image">
        <img src={image} alt={article?.title} />
      </div>

      <div className="card-body">
        <h5>{article?.category}</h5>
        <h3>
          <Link to={`/article_view/${article?.idArticle}`}>{article?.title}</Link>
        </h3>
      </div>
      <div className="card-footer">
        <span>Postado em: {article?.create_at}</span>
      </div>
    </div>
  );
}
