import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "./home.css";
import Header from "../../components/UI/Header/Header";
import Footer from "../../components/UI/Footer/Footer";
import MiniArticle from "../../components/UI/Article/MiniArticle/MiniArticle";

import image from "../../assets/images/about-image.svg";
import light from "../../assets/images/icons/light_mode.svg";
import dark from "../../assets/images/icons/dark_mode.svg";
import logoImage from "../../assets/images/logo-hero.svg";
import Button from "../../components/UI/Button/SubmitButton/Button";
import LinkButton from "../../components/UI/Button/LinkButton/Button";
import ArticleShortcard from "../../components/UI/Article/ArticleShortcard/ArticleShortcard";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [articles, setArticles] = useState([]);
  const [politics, setPolitic] = useState([]);
  const [health, setHealth] = useState([]);
  const themeState = localStorage.getItem("theme");
  let position = 1;

  const length = articles.length;
  let counter = 2;

  function switchTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    localStorage.setItem("theme", theme);
  }

  useEffect(() => {
    //destaques
    axios
      .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
      .then((resp) => {
        setArticles(resp.data);
      });

    axios
      .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
      .then((resp) => {
        const datas = resp.data;
        const arr = [];

        for (const data of datas) {
          if (data.category == "Política") {
            arr.push(data);
          }
        }

        setPolitic(arr);
      });

    axios
      .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
      .then((resp) => {
        const datas = resp.data;
        const arr = [];

        for (const data of datas) {
          if (data.category == "Saúde") {
            arr.push(data);
          }
        }

        setHealth(arr);
      });
  }, []);

  return (
    <div className="home" data-theme={themeState}>
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
        <section className="main-articles-section container">
          <div className="main-articles">
            <div className="main-article">
              <div className="image">
                <img
                  src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${
                    articles[length - 1]?.idArticle
                  }`}
                  alt="Imagem em destque"
                />
              </div>

              <h2>{articles[length - 1]?.title}</h2>

              <p>{articles[length - 1]?.subtitle}</p>
            </div>

            <div className="mini-articles">
              <MiniArticle category="Diversos" />
              <MiniArticle category="Mundo" />
              <MiniArticle category="Política" />
            </div>
          </div>
        </section>

        <section className="last-news-section container">
          <h2>Últimas Notícias</h2>


              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ipsum perferendis ullam temporibus enim praesentium iure soluta magni, neque fugit quod hic dolores cupiditate aut earum quo? Est, soluta dolorum.</p>
          <div className="lasts-news">
            {length > 0
              ? articles.map((article) => {
                  if (counter > 1) {
                    counter++;
                    position++;

                    if (counter > 7) {
                      counter = 1;
                    }
                    return (
                      <div className="article-card">
                        <div className="image">
                          <img
                            src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${
                              articles[length + 1 - position]?.idArticle
                            }`}
                            alt={articles[length + 1 - position]?.title}
                          />
                        </div>

                        <div className="card-body">
                          <h5>{articles[length + 1 - position]?.category}</h5>
                          <h3>{articles[length + 1 - position]?.title}</h3>
                        </div>
                        <div className="card-footer">
                          <span>
                            Postado em:{" "}
                            {articles[length + 1 - position]?.create_at}
                          </span>
                        </div>
                      </div>
                    );
                  }
                })
              : "Sem artigos..."}
          </div>
        </section>

        <section className="login-invite-section container">
          <div className="invite-text">
            <h2>Junte-se a nossa família e tenha acessos exclusivos.</h2>
            <span>Crie sua conta.</span>
          </div>

          <LinkButton>
            CRIAR CONTA
            <img src="" alt="" />
          </LinkButton>
        </section>

        <section className="politics-section container">
          <div className="politic-section-header">
            <h2>Política</h2>

            <Link to="/politica">VER MAIS</Link>
          </div>

          <div className="articles">
            {politics.length > 0
              ? politics.map((politic) => {
                  if (counter > 0) {
                    counter++;
                    position++;

                    if (counter > 4) {
                      counter = 0;
                    }

                    return (
                      <div className="article-card">
                        <div className="image">
                          <img
                            src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${
                              politics[politics.length - position]?.idArticle
                            }`}
                            alt={politics[politics.length - position]?.title}
                          />
                        </div>

                        <div className="card-body">
                          <h5>
                            {politics[politics.length - position]?.category}
                          </h5>
                          <h3>{politics[politics.length - position]?.title}</h3>
                        </div>
                        <div className="card-footer">
                          <span>
                            Postado em:{" "}
                            {politics[politics.length - position]?.create_at}
                          </span>
                        </div>
                      </div>
                    );
                  }
                })
              : "Sem artigos disponíveis..."}
          </div>
        </section>

        <section className="health-section container">
          <div className="health-section-header">
            <h2>Saúde</h2>

            <Link to="/saude">VER MAIS</Link>
          </div>

          <div className="articles">
            {health.length > 0
              ? health.map((heal) => {
                  if (counter > 0) {
                    counter++;
                    position++;

                    if (counter > 3) {
                      counter = 0;
                    }

                    return (
                      <div className="article-card">
                        <div className="image">
                          <img
                            src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${
                              health[health.length - 1]?.idArticle
                            }`}
                            alt={health[health.length - 1]?.title}
                          />
                        </div>

                        <div className="card-body">
                          <h5>{health[health.length - 1]?.category}</h5>
                          <h3>{health[health.length - 1]?.title}</h3>
                        </div>
                        <div className="card-footer">
                          <span>
                            Postado em: {health[health.length - 1]?.create_at}
                          </span>
                        </div>
                      </div>
                    );
                  }
                })
              : "Sem artigos disponíveis..."}
          </div>
        </section>

        <section className="shortcard-articles-section container">
          <div className="shortcard-article">
            <div className="shortcard-header">
              <h2>DESPORTO</h2>
              <Link to="/desporto">VER MAIS</Link>
            </div>

            <div className="shortcard-body">
              <ArticleShortcard category="Desporto" />
            </div>
          </div>

          <div className="shortcard-article">
            <div className="shortcard-header">
              <h2>ECONOMIA</h2>
              <Link to="/desporto">VER MAIS</Link>
            </div>

            <div className="shortcard-body">
              <ArticleShortcard category="Economia" />
            </div>
          </div>

          <div className="shortcard-article">
            <div className="shortcard-header">
              <h2>DIVERSOS</h2>
              <Link to="/desporto">VER MAIS</Link>
            </div>

            <div className="shortcard-body">
              <ArticleShortcard category="Diversos" />
            </div>
          </div>
        </section>

        <section className="send-email-section container">
          <div className="send-email-content">
            <h2>Envie-nos uma mensagem</h2>

            <p>
              Entre em contacto conosco caso gostaria alguma matéria de seu
              interesse fosse publicada aqui.
            </p>
            <form action="">
              <textarea
                name="email_content"
                cols="30"
                rows="5"
                placeholder="Mensagem"
              />
            </form>

            <Button type="submit">Enviar</Button>
          </div>

          <div className="image">
            <img src={image} alt="Imagem Ilustrativa" />
          </div>
        </section>
      </main>

      <Footer image={logoImage} />
    </div>
  );
}
