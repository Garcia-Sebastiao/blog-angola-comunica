import React from "react";
import "./connectedarticles.css";
import image from "../../../../assets/images/about-image.svg";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ConnectedArticles() {
  return (
    <div className="connected-articles">
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
  );
}
