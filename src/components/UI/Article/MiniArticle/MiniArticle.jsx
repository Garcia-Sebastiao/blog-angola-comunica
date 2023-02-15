import React from "react";

import "./miniarticle.css";

export default function MiniArticle(props) {
  return (
    <div className="mini-article">
      <div className="image">
        <img src={props.image} alt="Imagem em destaque" />
      </div>
      <div className="content">
        <h5>{props.category}</h5>
        <h3>
          {props.title}
        </h3>
      </div>
    </div>
  );
}
