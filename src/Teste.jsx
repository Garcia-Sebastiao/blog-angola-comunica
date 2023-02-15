import axios from "axios"
import React, { useEffect, useState } from "react"

export default function Teste ()
{
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get("https://apiblogdb.onrender.com/blog/global/view_article_all?_start=2")
        .then((resp) => {   
            const length = resp.data.length
            setArticles(resp.data)
        })
    }, [])

    return(
        <div>
            {articles.length > 0 ? articles.map(article => {
                if(article.category == 'Social')
                {
                    console.log([article]);
                }
            }) : 'Sem Artigos...'}
        </div>
    )
}