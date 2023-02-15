import React from "react";

import "./lastnews.css";

import image from "../../../../assets/images/about-image.svg";
import MiniArticle from "../../Article/MiniArticle/MiniArticle";

export default function LastNews(props) {
  return (
    <div className="lastnews">
      <div className="lastnew-article">
        <div className="image">
          <img src={image} alt="Imagem em destque" />
        </div>

        <h2>Lançamento de Angola Comunica Previsto para Fevereiro.</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ut
          quasi debitis nostrum fugit dolores. Totam vero, cupiditate eos culpa
          quaerat tempora nemo aspernatur cumque fugit porro saepe consequuntur
          distinctio?
        </p>
      </div>

      <div className="mini-articles">
        <MiniArticle
          image={image}
          category="Política"
          title="Presidente da república Jõao Manuel Gonçalves Lourenço repudia corrupção."
        />
      </div>
    </div>
  );
}
