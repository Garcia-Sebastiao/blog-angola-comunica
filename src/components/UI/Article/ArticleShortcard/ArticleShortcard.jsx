import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import "./articleshortcard.css";

export default function ArticleShortcard(props) {
  if (props.category == "Desporto") {
    return (
      <div className="shortcard-article">
        <div className="shortcard-header">
          <h2>{props.category}</h2>
          <a href="/">VER MAIS</a>
        </div>

        <div className="shortcard-body">
          <div className="shortcard">
            <div className="image">
              <img src={props.image} alt="imagem em destaque" />
            </div>

            <div className="content">
              <Link to="/article_view">
                <span>{props.title}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="shortcard-body">
          <div className="shortcard">
            <div className="image">
              <img src={props.image} alt="imagem em destaque" />
            </div>

            <div className="content">
              <span>{props.title}</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="shortcard-article">
        <div className="shortcard-header">
          <h2>{props.category}</h2>
          <a href="/">VER MAIS</a>
        </div>

        <div className="shortcard-body">
          <div className="shortcard">
            <div className="image">
              <img src={props.image} alt="imagem em destaque" />
            </div>

            <div className="content">
              <span>{props.title}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
