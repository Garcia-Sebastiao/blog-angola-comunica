import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

/*----------------- CSS -----------------*/
import "./signup.css";

/*---------------- Images ------------------*/
import logoHero from "../../../assets/images/logo-hero.svg";
import Button from "../../../components/UI/Button/SubmitButton/Button";

export default () => {
  const [values, setValues] = useState();
  const navigate = useNavigate();
  const themeState = localStorage.getItem('theme');

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    axios.post("http://localhost:5000/visitors", values).then((response) => {
      navigate("/");
    });
  }
  return (
    <>
      <main className="signup dark-mode" data-theme={themeState}>
        <aside>
          <a href="/">
            <img src={logoHero} alt="LOGO" />
          </a>
        </aside>

        <div className="main-form">
          <div className="form-area">
            <h2>Cadastre-se.</h2>

            <form onSubmit={onSubmit} action="">
              <input
                type="text"
                name="name"
                onChange={onChange}
                placeholder="Degite seu Nome de Usuário"
              />
              
              <input
                type="email"
                name="email"
                onChange={onChange}
                placeholder="Degite seu email"
              />

              <input
                type="password"
                name="password"
                onChange={onChange}
                placeholder="Degite sua senha"
              />

              <input type="password" placeholder="Confirmar senha" />

              <Button>Cadastrar</Button>

              <span>
                Já possui uma conta? Faça <Link to="/login">login.</Link>
              </span>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};
