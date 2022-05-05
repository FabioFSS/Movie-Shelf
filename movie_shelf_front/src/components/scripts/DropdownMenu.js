
import React, { useState } from 'react';
import '../styles/DropdownMenu.css';
import ProfileIco from "../Icons/user-solid.svg";
import FavoriteIco from "../Icons/star-solid.svg";
import SettingsIco from "../Icons/gear-solid.svg";
import LogoutIco from "../Icons/logout_icon.svg";


function DropdownMenu() {

    function DropdownItem(props) {
        return (
            <a href={props.page} className="menu-item">
                <span className="icon-left">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>

        );
    }

    return (
        <div className="dropdown">
            <DropdownItem page="/profile">Hi, Kirito!</DropdownItem>
            <DropdownItem page="/profile">My Profile</DropdownItem>
            <DropdownItem page="/lists">Favorites</DropdownItem>
            <DropdownItem page="#">Settings</DropdownItem>
            <DropdownItem page="#">Log out</DropdownItem>
        </div>
    )

}

export default DropdownMenu;