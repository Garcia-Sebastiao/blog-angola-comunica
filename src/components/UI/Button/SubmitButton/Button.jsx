import React from "react";

import './button.css';

export default function Button (props) {
    return <button type={props.type} disabled={props.disabled} className="button">{props.children}</button>
}