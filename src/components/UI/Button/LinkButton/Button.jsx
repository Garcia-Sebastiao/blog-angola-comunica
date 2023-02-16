import React from "react";
import { Link } from "react-router-dom";

import './button.css';

export default function Button (props) {
    return(
        <>
            <Link to="/cadastrar" className="button">{props.children}</Link>
        </>
    )
}