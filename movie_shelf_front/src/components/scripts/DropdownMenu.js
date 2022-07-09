// react
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// styles
import "../styles/DropdownMenu.css";

// contexts
import AuthContext from "../../contexts/AuthContext";

function DropdownMenu() {
    const { logoutUser } = useContext(AuthContext);

    function DropdownItem(props) {
        return (
            <Link to={props.page} className="menu-item">
                <span className="icon-left">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </Link>
        );
    }

    return (
        <div className="dropdown">
            <DropdownItem page="/profile">Profile</DropdownItem>
            <DropdownItem page="/lists">Lists</DropdownItem>
            <DropdownItem page="/progress">Progress</DropdownItem>
            <DropdownItem page="/settings">Settings</DropdownItem>
            <DropdownItem page="/">
                <a onClick={logoutUser}>Log out</a>
            </DropdownItem>
        </div>
    );
}

export default DropdownMenu;
