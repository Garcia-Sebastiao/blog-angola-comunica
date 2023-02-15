import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./header.css";

import logoImage from "../../../assets/images/logo-hero.svg";
import emailIcon from "../../../assets/images/icons/icons8_mail.svg";
import phoneIcon from "../../../assets/images/icons/icons8_sip_dialer.svg";

export default function Header(props) {
  const [state, setState] = useState(false);

  function navToogle()
  {
    !state ? setState(true) : setState(false);
  }

  return (
    <>
      <header className="header">
        <div className="top_header">
          <a className="logo" href="/">
            <img src={logoImage} alt="logoImage" />
          </a>

          <div className="contacts">
            <span>
              <img src={emailIcon} alt="" />
              angolacomunicablog@gmail.com
            </span>
            <span>
              <img src={phoneIcon} alt="" />
              +244 923 456 722
            </span>
          </div>

          <nav className="navbar"></nav>

          <div className="sign">
            <Link to="/cadastrar">Cadastrar-se</Link>
          </div>
        </div>

        <div className="header_categories">
          <nav>
            <ul className={state ? 'appear' : ''}>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/mundo">Mundo</Link>
              </li>
              <li>
                <Link to="/desporto">Desporto</Link>
              </li>
              <li>
                <Link to="/politica">Política</Link>
              </li>
              <li>
                <Link to="/economia">Economia</Link>
              </li>
              <li>
                <Link to="/saude">Saúde</Link>
              </li>
              <li>
                <Link to="/diversos">Diversos</Link>
              </li>
            </ul>

            <div className="nav-options">
              {props.children}
              <div onClick={navToogle} className="nav-toggle">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
