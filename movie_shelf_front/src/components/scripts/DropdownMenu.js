
import React, { useState } from 'react';
import '../styles/DropdownMenu.css';
import ProfileIco from "../Icons/user-solid.svg";
import FavoriteIco from "../Icons/star-solid.svg";
import SettingsIco from "../Icons/gear-solid.svg";
import LogoutIco from "../Icons/logout_icon.svg";


function DropdownMenu() {

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item">
                <span className="icon-left">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>

        );
    }

    return (
        <div className="dropdown">
            <DropdownItem>Hi, Kirito!</DropdownItem>
            <DropdownItem>My Profile</DropdownItem>
            <DropdownItem>Favorites</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Log out</DropdownItem>
        </div>
    )

}

export default DropdownMenu;