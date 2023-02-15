import React, { useState } from "react";
import { Link } from "react-router-dom";

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

export default function ArticleView() {
  const [theme, setTheme] = useState("light");
  const themeState = localStorage.getItem("theme");

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
            <h2>Lançamento de Angola Comunica Previsto para Fevereiro.</h2>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum corrupti adipisci perspiciatis.
            </span>

            <div className="author-infos">
              <div className="author-image">
                <img src={image} alt="" />
              </div>

              <div className="user-data">
                <h4>Garcia Pedro</h4>
                <span>Publicado em 13 de fevereiro de 2023.</span>
              </div>
            </div>

            <div className="image">
              <img src={image} alt="Imagem em destaque" />
            </div>

            <div className="article-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae amet sapiente architecto, at officia libero.
                Cupiditate, perferendis, corrupti soluta harum molestias libero
                nisi totam eligendi dolore debitis vero, quam labore.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores placeat esse sunt aliquam inventore, recusandae qui
                ducimus! Quas eveniet voluptatem ea? Dolor officiis placeat
                recusandae accusamus cumque a eveniet suscipit?
              </p>
            </div>
          </div>
        </section>

        <section className="lasts-news-section container">
          <h2>Últimas Notícias</h2>

          <div className="lasts-articles">
            <ArticleCard
              image={image}
              category="Política"
              title="Presidente da república Jõao Manuel Gonçalves Lourenço repudia corrupção"
              create_at="22 Janeiro 2023"
              author="Garcia Pedro"
            />
            <ArticleCard
              image={image}
              category="Política"
              title="Presidente da república Jõao Manuel Gonçalves Lourenço repudia corrupção"
              create_at="22 Janeiro 2023"
              author="Garcia Pedro"
            />
            <ArticleCard
              image={image}
              category="Política"
              title="Presidente da república Jõao Manuel Gonçalves Lourenço repudia corrupção"
              create_at="22 Janeiro 2023"
              author="Garcia Pedro"
            />
            <ArticleCard
              image={image}
              category="Política"
              title="Presidente da república Jõao Manuel Gonçalves Lourenço repudia corrupção"
              create_at="22 Janeiro 2023"
              author="Garcia Pedro"
            />
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
