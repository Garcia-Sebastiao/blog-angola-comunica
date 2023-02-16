import React from "react";
import {Route, Routes} from 'react-router-dom';

/*------------------- Pages ---------------------*/
import Home from './pages/Home/Home';
import Login from "./pages/Visitor/Login/Login";
import SignUp from './pages/Visitor/SignUp/SignUp';
import World from "./pages/Article/Categories/World/World";
import Sports from "./pages/Article/Categories/Sports/Sports"
import Health from "./pages/Article/Categories/Health/Health";
import Others from "./pages/Article/Categories/Others/Others";
import Economy from "./pages/Article/Categories/Economy/Economy";
import Politics from "./pages/Article/Categories/Politics/Politics";
import ArticleView from "./pages/Article/ArticleView/Article"
import Teste from './Teste';

/*------------- CSS -------------*/
import './App.css';

const App = () => (
    <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/login" element={< Login/>}/>
        <Route path="/mundo" element={< World/>}/>
        <Route path="/saude" element={< Health/>}/>
        <Route path="/diversos" element={< Others/>}/>
        <Route path="/desporto" element={< Sports/>}/>
        <Route path="/economia" element={< Economy/>}/>
        <Route path="/cadastrar" element={< SignUp/>}/>
        <Route path="/politica" element={< Politics/>}/>
        <Route path="/article_view/:id" element={< ArticleView/>}/>
        <Route path="/teste" element={<Teste/>}/>
    </Routes>
);
export default App;