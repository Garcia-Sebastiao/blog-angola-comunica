import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "./home.css";
import Header from "../../components/UI/Header/Header";
import Footer from "../../components/UI/Footer/Footer";
import ArticleCard from "../../components/UI/Article/ArticleCard/ArticleCard";
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
  const [sports, setSports] = useState([]);
  const themeState = localStorage.getItem("theme");

  const length = articles.length;

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
        console.log(resp.data)
      });

    // axios
    //   .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
    //   .then((resp) => {
    //     const datas = resp.data;
    //     const arr = []

    //     for (const data of datas) {
    //       if(data.category == "Desporto")
    //       {
    //         arr.push(data);
    //       }
    //     }

    //     setArticles(arr);
    //   });
  }, []);
  console.log(articles[length - 1])
  console.log(length)

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
                <img src={image} alt="Imagem em destque" />
              </div>

              <h2>{articles[length - 1].title}</h2>

              <p>{articles[length - 1].subtitle}</p>

            </div>

            <div className="mini-articles">
              <MiniArticle
                image={image}
                category="Política"
                title="Presidente da república Jõao Manuel Gonçalves Lourenço repudia corrupção."
              />
              <MiniArticle
                image={image}
                category="Política"
                title="Presidente da república Jõao Manuel Gonçalves Lourenço repudia corrupção."
              />
              <MiniArticle
                image={image}
                category="Política"
                title="Presidente da república Jõao Manuel Gonçalves Lourenço repudia corrupção."
              />
            </div>
          </div>
        </section>

        <section className="last-news-section container">
          <h2>Últimas Notícias</h2>

          <div className="lasts-news">
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

            <a href="/">VER MAIS</a>
          </div>

          <div className="articles">
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

        <section className="health-section container">
          <div className="health-section-header">
            <h2>Saúde</h2>

            <a href="/">VER MAIS</a>
          </div>

          <div className="articles">
            <ArticleCard
              image={image}
              category="Saúde"
              title="Nova variante do coronoavirus tras modificações genéticas a humanos."
              create_at="22 Janeiro 2023"
              author="Garcia Pedro"
            />
            <ArticleCard
              image={image}
              category="Saúde"
              title="Nova variante do coronoavirus tras modificações genéticas a humanos."
              create_at="22 Janeiro 2023"
              author="Garcia Pedro"
            />
            <ArticleCard
              image={image}
              category="Saúde"
              title="Nova variante do coronoavirus tras modificações genéticas a humanos."
              create_at="22 Janeiro 2023"
              author="Garcia Pedro"
            />
            <ArticleCard
              image={image}
              category="Saúde"
              title="Nova variante do coronoavirus tras modificações genéticas a humanos."
              create_at="22 Janeiro 2023"
              author="Garcia Pedro"
            />
            <ArticleCard
              image={image}
              category="Saúde"
              title="Nova variante do coronoavirus tras modificações genéticas a humanos."
              create_at="22 Janeiro 2023"
              author="Garcia Pedro"
            />
          </div>
        </section>

        <section className="shortcard-articles-section container">
          <ArticleShortcard
            category="Desporto"
            image={image}
            title="Presidente da república Jõao Manuel Gonçalves Lourenço repudia corrupção"
          />
          <ArticleShortcard
            category="Economia"
            image={image}
            title="Angola supera a fase negativa do gráfico económico e continua a subir."
          />
          <ArticleShortcard
            category="Diversos"
            image={image}
            title="Nova plataforma de perdidos e achados desenvolvida por estudante Angolano."
          />
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
