import "./economy.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../../../components/UI/Header/Header";
import Footer from "../../../../components/UI/Footer/Footer";
import logoImage from "../../../../assets/images/logo-hero.svg";
import dark from "../../../../assets/images/icons/dark_mode.svg";
import light from "../../../../assets/images/icons/light_mode.svg";
import Pagination from "../../../../components/UI/Pagination/Pagination";
import LastNews from "../../../../components/UI/Article/LastNews/LastNews";
import ConnectedArticles from "../../../../components/UI/Article/ConnectedArticles/ConnectedArticles";

/*------------ Global VAriables -----------*/
const limit = 12;

export default function Economy() {
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
        <section className="lastnews-section container">
          <div className="lastnews-header">
            <h2 className="sec-indentifier">ECONOMIA</h2>
            <div className="separator"></div>
          </div>

          <LastNews />
        </section>

        <section className="connected-section container">
          <h2>Artigos Relacionados</h2>

          <ConnectedArticles category="Econimia"/>
        </section>
      </main>

      <Footer image={logoImage} />
    </div>
  );
}
