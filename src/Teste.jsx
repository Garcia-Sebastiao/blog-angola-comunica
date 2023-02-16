import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Teste() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://apiblogdb.onrender.com/blog/global/view_article_all")
      .then((resp) => {
        const length = resp.data.length;
        setArticles(resp.data);
      });
  }, []);

  const lastAll = articles[articles.length - 1];

  return <div></div>;
}
