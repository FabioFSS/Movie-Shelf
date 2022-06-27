import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountDropdown from "./AccountDropdown";
import DropdownMenu from "./DropdownMenu";
import NavItem from "./NavItem";
import logo from "../../assets/logo.png";
import "../styles/Navbar.css";
import Cookies from 'js-cookie'

import { NavContext } from "../../contexts/navbar";

function Navbar() {
    let user_id = 2;
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/user_profile/`, {headers: {'X-CSRFToken': localStorage.getItem('csrftoken')}}).then((res) => {
            setUser(res.data);
        });
    }, [user_id]);

    const { visibility } = useContext(NavContext);

    return (
        <nav className="Navbar" style={{ visibility: visibility }}>
            <div className="leftSide">
                <div className="links">
                    <Link to="/tv">TV Shows</Link>
                    <Link to="/">Movies</Link>
                </div>
            </div>

            <div className="middleSide">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
            </div>

            <div className="rightSide">
                <input type="text" placeholder="Search" />
                <AccountDropdown>
                    {user.map((user) => (
                        <NavItem icon={user.profile_pic} className="profileImg">
                            <DropdownMenu></DropdownMenu>
                        </NavItem>
                    ))}
                </AccountDropdown>
                <ul className="account-dropdown"></ul>
            </div>
        </nav>
    );
}

export default Navbar;
