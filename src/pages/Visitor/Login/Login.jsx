import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/UI/Button/SubmitButton/Button";
import FormData from "form-data";
import { useAuth } from "../../../hooks/useAuth";

/*----------------- CSS -----------------*/
import "./login.css";

/*---------------- Images ------------------*/
import logoHero from "../../../assets/images/logo-hero.svg";

export default function Login() {
  const themeState = localStorage.getItem("theme");
  const navigate = useNavigate();
  const [values, setValues] = useState("");
  const form = new FormData();
  const auth = useAuth();

  function onChange(event) {
    event.preventDefault();

    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  async function handleFormSubmit() {
    try {
      form.append("username", values.username);
      form.append("password", values.password);

      console.log(auth);

      await auth.authenticate(form);

      navigate("/home");
      window.location.href = window.location.href;
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <main className="login dark-mode" data-theme={themeState}>
        <aside>
          <Link to="/">
            <img src={logoHero} alt="LOGO" />
          </Link>
        </aside>

        <div className="main-form">
          <div className="form-area">
            <h2>LOGIN</h2>

            <div className="form-box">
              <form onSubmit={handleFormSubmit} action="">
                <input
                  name="username"
                  type="text"
                  autoComplete="odd"
                  placeholder="Degite seu Nome"
                  value={values.username}
                  onChange={onChange}
                  required
                />

                <input
                  name="password"
                  value={values.password}
                  onChange={onChange}
                  type="password"
                  placeholder="Degite sua senha"
                  required
                />
              </form>

              <Button onClick={handleFormSubmit}>Login</Button>
              <span>
                Ainda não possui uma conta?{" "}
                <Link to="/cadastrar">Cadastre-se.</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
