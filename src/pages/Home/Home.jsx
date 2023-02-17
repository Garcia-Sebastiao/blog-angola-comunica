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
import ArticleCard from "../../components/UI/Article/ArticleCard/ArticleCard";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [articles, setArticles] = useState([]);
  const [politics, setPolitic] = useState([]);
  const [health, setHealth] = useState([]);
  const [worlds, setWorld] = useState([]);
  const themeState = localStorage.getItem("theme");

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

        setPolitic(arr.reverse());
      });

    axios
      .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
      .then((resp) => {
        const datas = resp.data;
        const arr = [];

        for (const data of datas) {
          if (data.category == "Mundo") {
            arr.push(data);
          }
        }

        setWorld(arr.reverse());
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

        setHealth(arr.reverse());
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
            {worlds.length > 0
              ? worlds
                  .slice(0, 1)
                  .reverse()
                  .map((article) => {
                    return (
                      <div className="main-article">
                        <div className="image">
                          <img
                            src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${
                              article?.idArticle
                            }`}
                            alt={article?.idArticle}
                          />
                        </div>

                        <h2>
                          <Link
                            to={`/article_view/${
                              article?.idArticle
                            }`}
                          >
                            {article?.title}
                          </Link>
                        </h2>

                        <p>{article?.subtitle}</p>
                      </div>
                    );
                  })
              : ""}

            <div className="mini-articles">
              <MiniArticle category="Diversos" start={0} limit={1} />
              <MiniArticle category="Mundo" start={0} limit={1} />
              <MiniArticle category="Política" start={0} limit={1} />
            </div>
          </div>
        </section>

        <section className="last-news-section container">
          <h2>Últimas Notícias</h2>

          <div className="lasts-news">
            {articles.length > 0
              ? articles
                  .slice(0, 7)
                  .reverse()
                  .map((article) => {
                    return <ArticleCard article={article} />;
                  })
              : "Sem artigos disponíveis..."}
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
              ? politics
                  .slice(0, 7)
                  .reverse()
                  .map((article) => {
                    return <ArticleCard article={article} />;
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
              ? health
                  .slice(0, 7)
                  .reverse()
                  .map((article) => {
                    return <ArticleCard article={article} />;
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
              <h2>DIVERSOS</h2>
              <Link to="/diversos">VER MAIS</Link>
            </div>

            <div className="shortcard-body">
              <ArticleShortcard category="Diversos" />
            </div>
          </div>

          <div className="shortcard-article">
            <div className="shortcard-header">
              <h2>ECONOMIA</h2>
              <Link to="/economia">VER MAIS</Link>
            </div>

            <div className="shortcard-body">
              <ArticleShortcard category="Economia" />
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
