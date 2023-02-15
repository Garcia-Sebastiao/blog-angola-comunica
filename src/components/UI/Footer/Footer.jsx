import React from "react";
import { Link } from "react-router-dom";

import './footer.css';

import instagarmIcon from "../../../assets/images/icons/icons8_instagram.svg";
import facebookIcon from "../../../assets/images/icons/icons8_facebook_circled.svg";
import twitterIcon from "../../../assets/images/icons/icons8_Twitter.svg";
import emailIconW from "../../../assets/images/icons/icons8_mail_1.svg";
import phoneIconW from "../../../assets/images/icons/icons8_sip_dialer_1.svg";

export default function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <a href="/">
            <img src={props.image} alt="LOGOIMAGE" />
          </a>

          <div className="footer-contacts">
            <span>
              <img src={emailIconW} alt="" />
              angolacomunica@gmail.com
            </span>
            <span>
              <img src={phoneIconW} alt="" />
              +244 923 456 722
            </span>

            <div className="social-midias">
              <div>
                <img src={facebookIcon} alt="" />
                <img src={instagarmIcon} alt="" />
                <img src={twitterIcon} alt="" />
              </div>
            </div>
          </div>
        </div>

        <p>
          Todos os direitos reservados a JNLS, Lda. Feito com ❤ pela{" "}
          <b>PN Clique</b>.
        </p>
      </footer>
    </>
  );
}
