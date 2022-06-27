// react
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components
import AccountDropdown from "./AccountDropdown";
import DropdownMenu from "./DropdownMenu";
import NavItem from "./NavItem";

// assets and styles
import logo from "../../assets/logo.png";
import "../styles/Navbar.css";

// contexts
import { NavContext } from "../../contexts/navbar";
import AuthContext from "../../contexts/AuthContext";
import axios from "axios";

function Navbar() {
    const { user, logoutUser, authTokens } = useContext(AuthContext);
    const { visibility } = useContext(NavContext);

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        if (user) {
            axios
                .get(`http://localhost:8000/user_profile/${user.id}`, {headers: { Authorization: `Bearer ${authTokens?.access}` }})
                .then((res) => {
                    console.log(res.data);
                    setUserData(res.data);
                });
        }
    }, []);

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
                {user ?  (
                    userData.map((item, key) => (
                        <>
                            <input type="text" placeholder="Search" />
                            <AccountDropdown>
                                <NavItem
                                    icon={item.profile_pic}
                                    className="profileImg"
                                >
                                    <DropdownMenu></DropdownMenu>
                                </NavItem>
                            </AccountDropdown>
                            <ul className="account-dropdown"></ul>
                        </>
                    )
                    )

                ) : (
                    <Link to='/login'>Login</Link>
                )
                }
            </div>
        </nav>
    );
}

export default Navbar;
