import React, {useContext} from "react";
import "../styles/DropdownMenu.css";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

function DropdownMenu() {
    const {logoutUser} = useContext(AuthContext);

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
            <DropdownItem page="/profile">My Profile</DropdownItem>
            <DropdownItem page="/lists">Favorites</DropdownItem>
            <DropdownItem page="/settings">Settings</DropdownItem>
            <DropdownItem page="/"><a onClick={logoutUser}>Log out</a></DropdownItem>
        </div>
    );
}

export default DropdownMenu;
