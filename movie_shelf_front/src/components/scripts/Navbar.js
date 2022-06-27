// react
import React, { useContext } from "react";
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

function Navbar() {
    const { user, logoutUser } = useContext(AuthContext);
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
                {user ? (
                    <>
                        <input type="text" placeholder="Search" />
                        <AccountDropdown>
                            <NavItem
                                icon={user.profile_pic}
                                className="profileImg"
                            >
                                <DropdownMenu></DropdownMenu>
                            </NavItem>
                        </AccountDropdown>
                        <ul className="account-dropdown"></ul>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
