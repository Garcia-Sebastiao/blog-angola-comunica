import React from "react";

import "./articlecard.css";
export default function ArticleCard(props) {
  return (
    <div className="article-card">
      <div className="image">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="card-body">
        <h5>{props.category}</h5>
        <h3>
          {props.title}
        </h3>
      </div>
      <div className="card-footer">
        <span>Postado em: {props.create_at}, por {props.author}.</span>
      </div>
    </div>
  );
}
