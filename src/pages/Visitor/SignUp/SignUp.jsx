import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import FormData from "form-data";

/*----------------- CSS -----------------*/
import "./signup.css";

/*---------------- Images ------------------*/
import logoHero from "../../../assets/images/logo-hero.svg";
import Button from "../../../components/UI/Button/SubmitButton/Button";

export default () => {
  const [values, setValues] = useState();
  const imageRef = useRef(null)
  const navigate = useNavigate();
  const themeState = localStorage.getItem("theme");
  const form = new FormData();

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    const image = imageRef.current.files[0];

    const headersForm = form.getHeaders;
    
    console.log(values.password, values.confirm_password)
    
    form.append('username', values.username);
    form.append('email', values.email);
    form.append('password', values.password);
    form.append('confirm_password', values.confirm_password);
    form.append('image', image);
    
    
    axios.post("https://apiblogdb.onrender.com/blog/global/register_reader", form, {
      headers: {
        ...headersForm
      }
    }).then((response) => {
      alert('Conta criada com sucesso.');
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

            <form method="POST" autoComplete="off" encType="multipart/form-data" onSubmit={onSubmit} action="">
              <input
                type="text"
                name="username"
                onChange={onChange}
                placeholder="Degite seu nome"
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
              
              <input
                type="password"
                name="confirm_password"
                onChange={onChange}
                placeholder="Confirmar senha"
              />

              <input
                ref={imageRef}
                type="file"
                placeholder="Fotos"
                accept="image/*"
                multiple={false}
                required
              />

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
