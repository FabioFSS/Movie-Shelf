import React from "react";
import "../styles/AccountDropdown.css";

function AccountDropdown(props) {
    return <ul className="navbar-ul">{props.children} </ul>;
}

export default AccountDropdown;
