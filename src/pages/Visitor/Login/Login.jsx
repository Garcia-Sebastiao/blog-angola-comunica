import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button/SubmitButton/Button";

/*----------------- CSS -----------------*/
import "./login.css";

/*---------------- Images ------------------*/
import logoHero from "../../../assets/images/logo-hero.svg";

export default function Login() {
  const themeState = localStorage.getItem("theme");

  return (
    <>
      <main className="login dark-mode" data-theme={themeState}>
        <aside>
          <a href="/">
            <img src={logoHero} alt="LOGO" />
          </a>
        </aside>

        <div className="main-form">
          <div className="form-area">
            <h2>LOGIN</h2>

            <form action="">
              <input type="email" placeholder="Degite seu email" />

              <input type="password" placeholder="Degite sua senha" />

              <Button>Login</Button>
              <span>
                Ainda não possui uma conta?{" "}
                <Link to="/cadastrar">Cadastre-se.</Link>
              </span>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
