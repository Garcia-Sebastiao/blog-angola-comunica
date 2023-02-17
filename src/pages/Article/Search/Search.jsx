import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../../components/UI/Header/Header";

import "./search.css";

import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button/SubmitButton/Button";
import Footer from "../../../components/UI/Footer/Footer";
import logoImage from "../../../assets/images/logo-hero.svg";
import dark from "../../../assets/images/icons/dark_mode.svg";
import light from "../../../assets/images/icons/light_mode.svg";

export default function Search() {
  const [theme, setTheme] = useState("light");
  const [articles, setArticle] = useState([]);
  const [search, setSearch] = useState('1');
  const themeState = localStorage.getItem("theme");

  function handleSearch() {
    if (search != '1' && search != ' ') {
      console.log(search)
      axios.get(`https://apiblogdb.onrender.com/blog/global/search_article/query=${search}`).then((resp) => {
        setArticle(resp.data);
      });
      return true
    }
    else{
      return false;
    }
  }

  function switchTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    localStorage.setItem("theme", theme);
  }

  return (
    <div className="dark-mode" data-theme={themeState}>
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
        <section className="search-article-section container">
          <div className="search-header">
            <div className="header-content">
              <h2>Procurar Artigo</h2>

              <div className="form-area">
                <form onSubmit={handleSearch} autoComplete="off" action="">
                  <input
                    name="search"
                    onChange={(event) => setSearch(event.target.value)}
                    type="search"
                    placeholder="Procurar"
                  />
                </form>

                <button onClick={handleSearch}>Procurar</button>
              </div>
            </div>
            <div className="separator"></div>
          </div>

          <div className="search-content">
            {{handleSearch} ? articles.map(article => (
              <div className="mini-article">
                <div className="image">
                  <img
                    src={`https://apiblogdb.onrender.com/blog/global/view_article/image/${article?.idArticle}`}
                    alt="Imagem em destaque"
                  />
                </div>
                <div className="content">
                  <small>{article?.category}</small>
                  <h3>
                    <Link to={`/article_view/${article?.idArticle}`}>
                      {article?.title}
                    </Link>
                  </h3>
                </div>
              </div>
            )) : (
              <p style={{ padding: "2rem 0" }}>
                Sem artigos correspondentes...
              </p>
            )}
          </div>
        </section>
      </main>

      <Footer image={logoImage} />
    </div>
  );
}
