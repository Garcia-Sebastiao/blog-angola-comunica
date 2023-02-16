import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./article.css";
import logoImage from "../../../assets/images/logo-hero.svg";

import Header from "../../../components/UI/Header/Header";
import light from "../../../assets/images/icons/light_mode.svg";
import dark from "../../../assets/images/icons/dark_mode.svg";
import image from "../../../assets/images/about-image.svg";
import Footer from "../../../components/UI/Footer/Footer";
import ArticleCard from "../../../components/UI/Article/ArticleCard/ArticleCard";
import Comment from "../../../components/UI/Comment/Comment";
import Button from "../../../components/UI/Button/SubmitButton/Button";
import axios from "axios";
import ConnectedArticles from "../../../components/UI/Article/ConnectedArticles/ConnectedArticles";

export default function ArticleView() {
  const { id } = useParams();
  const [theme, setTheme] = useState("light");
  const [article, setArticle] = useState();
  const themeState = localStorage.getItem("theme");

  useEffect(() => {
    axios.get(`https://apiblogdb.onrender.com/blog/global/view_article/${id}`)
    .then(resp => {
      setArticle(resp.data);
    })
  })

  function switchTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    localStorage.setItem("theme", theme);
  }
  return (
    <div className="article_view" data-theme={themeState}>
      <Header>
        <button onClick={switchTheme}>
          {themeState == "light" ? (
            <img src={light} alt="" />
          ) : (
            <img src={dark} alt="" />
          )}{" "}
        </button>
      </Header>

      <main>
        <section className="view-article-section container">
          <div className="article-view">
            <h2>{article?.title}</h2>
            <span>
              {article?.subtitle}
            </span>

            <div className="author-infos">
              <div className="author-image">
                <img src={image} alt={article?.title} />
              </div>

              <div className="user-data">
                <h4>Garcia Pedro</h4>
                <span>{article?.create_at}</span>
              </div>
            </div>

            <div className="image">
              <img src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${id}`} alt="Imagem em destaque" />
            </div>

            <div className="article-content">
              <p>
                {article?.body}
              </p>
            </div>
          </div>
        </section>

        <section className="lasts-news-section container">
          <h2>Veja Também</h2>

          <div className="lasts-articles">
            <ConnectedArticles category={article?.category}/>
          </div>
        </section>

        <section className="comments-section container">
          <h2>Comentários</h2>

          <form action="">
            <textarea
              name="comment"
              cols="30"
              rows="5"
              placeholder="Comentário"
            />

            <Button type="submit">Comentar</Button>
          </form>
          <div className="comments">
            <Comment
              visitorName="Garcia Pedro"
              createAt="04 horas"
              comment="I've been on my own since age 09🖖!"
            />
            <Comment
              visitorName="Garcia Pedro"
              createAt="04 horas"
              comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam consectetur cupiditate corporis reprehenderit, accusamus sint.🖖!"
            />
          </div>
        </section>
      </main>

      <Footer image={logoImage} />
    </div>
  );
}
